# Production Architecture Diagram - Vacation Rental Marketplace

## High-Level Architecture

```mermaid
graph TB
    subgraph CLIENT["Frontend (Client)"]
        CDN["CDN (CloudFront/Vercel Edge)"]
        SPA["React SPA"]
        PWA["PWA Service Worker"]
    end

    subgraph LB["Load Balancing"]
        ALB["Application Load Balancer"]
        RATE["Rate Limiter"]
    end

    subgraph GATEWAY["API Gateway"]
        GW["API Gateway (Kong/AWS)"]
        AUTH_MW["Auth Middleware (JWT)"]
    end

    subgraph SERVICES["Microservices"]
        AUTH["Auth Service"]
        LISTING["Listing Service"]
        BOOKING["Booking Service"]
        REVIEW["Review Service"]
        SEARCH["Search Service"]
        PAYMENT["Payment Service"]
        NOTIFY["Notification Service"]
        MSG["Messaging Service"]
        MEDIA["Media Service"]
    end

    subgraph DATA["Data Layer"]
        PG_PRIMARY["PostgreSQL Primary"]
        PG_REPLICA["PostgreSQL Read Replicas"]
        REDIS["Redis Cache Cluster"]
        ES["Elasticsearch Cluster"]
        MONGO["MongoDB (Reviews/Messages)"]
    end

    subgraph STORAGE["Object Storage"]
        S3["AWS S3 / GCS"]
        IMG_CDN["Image CDN (Cloudinary/imgix)"]
    end

    subgraph ASYNC["Async Processing"]
        KAFKA["Kafka / SQS"]
        WORKERS["Background Workers"]
        CRON["Scheduled Jobs"]
    end

    subgraph MONITORING["Observability"]
        LOGS["ELK Stack / Datadog"]
        METRICS["Prometheus + Grafana"]
        TRACES["Jaeger / OpenTelemetry"]
        ALERTS["PagerDuty Alerts"]
    end

    subgraph INFRA["Infrastructure"]
        K8S["Kubernetes (EKS/GKE)"]
        TERRAFORM["Terraform IaC"]
        CI_CD["CI/CD (GitHub Actions)"]
    end

    %% Client connections
    SPA --> CDN
    CDN --> ALB
    ALB --> RATE --> GW

    %% Gateway to services
    GW --> AUTH_MW
    AUTH_MW --> AUTH
    AUTH_MW --> LISTING
    AUTH_MW --> BOOKING
    AUTH_MW --> REVIEW
    AUTH_MW --> SEARCH
    AUTH_MW --> PAYMENT
    AUTH_MW --> MSG
    AUTH_MW --> MEDIA

    %% Service to data
    AUTH --> PG_PRIMARY
    AUTH --> REDIS
    LISTING --> PG_PRIMARY
    LISTING --> PG_REPLICA
    LISTING --> REDIS
    LISTING --> ES
    BOOKING --> PG_PRIMARY
    BOOKING --> REDIS
    REVIEW --> MONGO
    REVIEW --> REDIS
    SEARCH --> ES
    SEARCH --> REDIS
    PAYMENT --> PG_PRIMARY
    MSG --> MONGO
    MEDIA --> S3

    %% Async
    BOOKING --> KAFKA
    PAYMENT --> KAFKA
    KAFKA --> WORKERS
    KAFKA --> NOTIFY
    WORKERS --> PG_PRIMARY

    %% Media
    S3 --> IMG_CDN
    IMG_CDN --> CDN

    %% Monitoring
    SERVICES --> LOGS
    SERVICES --> METRICS
    SERVICES --> TRACES
    METRICS --> ALERTS
```

---

## Component Details

### Frontend Layer
| Component | Technology | Purpose |
|-----------|-----------|---------|
| **SPA** | React 18 + Next.js | Server-side rendering for SEO, code splitting per route |
| **CDN** | Vercel Edge / CloudFront | Global edge caching, static asset delivery |
| **PWA** | Service Worker | Offline support, push notifications |
| **Image Optimization** | next/image + imgix | Responsive images, WebP/AVIF, lazy loading |

### API Gateway
| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Gateway** | Kong / AWS API Gateway | Request routing, throttling, API versioning |
| **Auth** | JWT + OAuth 2.0 | Token validation, Google/Apple SSO |
| **Rate Limiting** | Redis-backed | Per-user/IP rate limits |

### Microservices
| Service | Tech Stack | Database | Responsibilities |
|---------|-----------|----------|-----------------|
| **Auth** | Node.js/Express | PostgreSQL + Redis | User registration, login, sessions, OAuth |
| **Listing** | Node.js/Express | PostgreSQL + Redis + ES | CRUD listings, availability, pricing rules |
| **Booking** | Node.js/Express | PostgreSQL + Redis | Reservations, calendar blocking, conflict resolution |
| **Search** | Python/FastAPI | Elasticsearch + Redis | Full-text search, geo-search, filtering, ranking |
| **Review** | Node.js/Express | MongoDB + Redis | Reviews, ratings, aggregation |
| **Payment** | Node.js/Express | PostgreSQL | Stripe integration, refunds, payouts |
| **Notification** | Node.js/Worker | Redis (pub/sub) | Email (SendGrid), SMS (Twilio), push |
| **Messaging** | Node.js/WebSocket | MongoDB | Real-time chat between host/guest |
| **Media** | Node.js/Express | S3 metadata in PG | Photo upload, resize, CDN invalidation |

### Data Layer Scaling Strategy

```mermaid
graph LR
    subgraph WRITE["Write Path"]
        APP_W["Services"] --> PG_P["PostgreSQL Primary"]
        PG_P --> WAL["WAL Replication"]
    end

    subgraph READ["Read Path"]
        APP_R["Services"] --> CACHE["Redis Cache"]
        CACHE -->|Miss| PG_R1["Read Replica 1"]
        CACHE -->|Miss| PG_R2["Read Replica 2"]
        WAL --> PG_R1
        WAL --> PG_R2
    end

    subgraph SEARCH_LAYER["Search"]
        PG_P -->|CDC| DEBEZIUM["Debezium CDC"]
        DEBEZIUM --> ES_C["Elasticsearch"]
    end
```

| Layer | Technology | Scaling Strategy |
|-------|-----------|-----------------|
| **Primary DB** | PostgreSQL 16 | Vertical scaling + connection pooling (PgBouncer) |
| **Read Replicas** | PostgreSQL | Horizontal read scaling, 2-4 replicas per region |
| **Cache** | Redis Cluster | 3-node cluster, TTL-based eviction, cache-aside pattern |
| **Search** | Elasticsearch | 3-node cluster, geo-point indexing, relevance tuning |
| **Documents** | MongoDB | Replica set, sharding by user_id for messages |
| **Object Storage** | S3 + CloudFront | Multi-region replication, lifecycle policies |

### Search Architecture

```mermaid
graph TD
    USER["User Search Query"] --> API["Search API"]
    API --> PARSE["Query Parser"]
    PARSE --> ES_QUERY["Elasticsearch"]
    
    ES_QUERY --> GEO["Geo Filter (location radius)"]
    ES_QUERY --> TEXT["Full-text Match (title, description)"]
    ES_QUERY --> FILTER["Facet Filters (price, amenities, type)"]
    ES_QUERY --> AVAIL["Availability Filter (calendar)"]
    
    GEO --> RANK["Ranking Algorithm"]
    TEXT --> RANK
    FILTER --> RANK
    AVAIL --> RANK
    
    RANK --> CACHE_RES["Cache Results (Redis)"]
    CACHE_RES --> RESPONSE["Paginated Response"]
```

### Deployment & CI/CD

```mermaid
graph LR
    DEV["Developer"] --> PR["Pull Request"]
    PR --> CI["CI Pipeline"]
    CI --> LINT["Lint + Type Check"]
    CI --> TEST["Unit + Integration Tests"]
    CI --> BUILD["Docker Build"]
    BUILD --> STAGING["Staging (Auto-deploy)"]
    STAGING --> MANUAL["Manual Approval"]
    MANUAL --> PROD["Production (K8s Rolling)"]
    PROD --> CANARY["Canary (10% traffic)"]
    CANARY --> FULL["Full Rollout"]
```

| Infrastructure | Technology | Details |
|---------------|-----------|---------|
| **Container Orchestration** | Kubernetes (EKS) | Auto-scaling, rolling deployments |
| **CI/CD** | GitHub Actions | Automated testing, Docker builds |
| **IaC** | Terraform | Reproducible infrastructure |
| **Secrets** | AWS Secrets Manager | Encrypted credential management |
| **Monitoring** | Datadog + PagerDuty | APM, logs, alerting |

---

## Scaling Milestones

| Users | Strategy |
|-------|----------|
| **0 – 10K** | Monolith on single server, PostgreSQL, Redis cache |
| **10K – 100K** | Separate services, read replicas, CDN, Elasticsearch |
| **100K – 1M** | Kubernetes, multi-region, sharding, message queues |
| **1M+** | Geo-distributed, edge computing, ML-based search ranking |
