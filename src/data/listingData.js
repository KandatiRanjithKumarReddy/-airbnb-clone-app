// All listing data hardcoded for the Airbnb clone
export const listingData = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment",
  location: "Candolim, India",
  locationFull: "Candolim, Goa, India",
  specs: {
    guests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  rating: 4.95,
  reviewCount: 19,
  isSuperhost: false,
  isGuestFavourite: true,

  // Price
  price: {
    total: 28499,
    currency: "₹",
    nights: 5,
    perNight: 5700,
    cleaningFee: 1500,
    serviceFee: 4025,
    discount: 0,
  },

  // Dates
  dates: {
    checkIn: "10/18/2026",
    checkOut: "10/23/2026",
    checkInDate: new Date(2026, 9, 18),
    checkOutDate: new Date(2026, 9, 23),
  },

  guests: 2,

  // Host
  host: {
    name: "Mirashya Homes",
    avatar: "https://ui-avatars.com/api/?name=Mirashya+Homes&background=6B8E23&color=fff&size=128",
    yearsHosting: 2,
    isSuperhost: false,
    responseRate: "100%",
    responseTime: "within an hour",
    about:
      "Welcome to Mirashya Homes! We offer premium serviced apartments in Goa, designed for comfort and relaxation. Our properties feature modern amenities, stylish interiors, and prime locations near popular beaches and attractions.",
  },

  // Photos
  photos: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      alt: "Outdoor seating area with rattan furniture and plants",
      room: "Outdoor area",
      caption: "Outdoor seating, Plants - 1/11",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      alt: "Living room with modern furniture",
      room: "Living room 1",
      caption: "Sofa, Air conditioning, Ceiling fan - 1/6",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      alt: "Private jacuzzi on terrace",
      room: "Jacuzzi",
      caption: "Private jacuzzi - 1/2",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      alt: "Interior living room view",
      room: "Living room 2",
      caption: "Smart TV, Sofa - 2/6",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      alt: "Building exterior view",
      room: "Building exterior",
      caption: "Building exterior - 1/1",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      alt: "Bedroom with double bed",
      room: "Bedroom",
      caption: "Double bed, Air conditioning - 1/3",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      alt: "Living room with vintage decor",
      room: "Living room 3",
      caption: "Sofa, Ceiling fan, Decor - 3/6",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      alt: "Kitchen area",
      room: "Kitchen",
      caption: "Kitchen, Refrigerator - 1/2",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      alt: "Bathroom with modern fixtures",
      room: "Bathroom",
      caption: "Hot water, Shower - 1/2",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
      alt: "Balcony with seating",
      room: "Balcony",
      caption: "Balcony seating, View - 1/1",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      alt: "Night view of the property",
      room: "Night view",
      caption: "Property exterior, Night - 1/1",
    },
  ],

  // Highlights
  highlights: [
    {
      icon: "tent",
      title: "Outdoor entertainment",
      description:
        "The pool and alfresco dining are great for summer trips.",
    },
    {
      icon: "snowflake",
      title: "Designed for staying cool",
      description: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      icon: "key",
      title: "Self check-in",
      description: "You can check in with the building staff.",
    },
  ],

  // Description
  description: `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! 🌺 Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind.

Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors.

Just minutes from Candolim Beach 🏖, popular cafés, restaurants, and nightlife 🍹, it's the ideal base for your Goa getaway.

✨ Features:
• Private Jacuzzi
• High-speed WiFi
• Smart TV with streaming
• Fully equipped kitchen
• Air conditioning & ceiling fans
• Pet-friendly
• Self check-in
• Outdoor seating area

📍 Location highlights:
• 5 min walk to Candolim Beach
• Close to popular restaurants
• Easy access to North Goa attractions

Book now for an unforgettable Goa experience! 🌟`,

  // Where you'll sleep
  sleepingArrangements: [
    {
      name: "Bedroom",
      details: "1 double bed",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    },
    {
      name: "Living room",
      details: "1 sofa",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    },
  ],

  // Amenities
  amenities: [
    { icon: "wifi", name: "Wifi", available: true },
    { icon: "tv", name: "TV", available: true },
    { icon: "utensils", name: "Kitchen", available: true },
    { icon: "car", name: "Free parking on premises", available: true },
    { icon: "snowflake", name: "Air conditioning", available: true },
    { icon: "waves", name: "Private jacuzzi", available: true },
    { icon: "shirt", name: "Washer", available: true },
    { icon: "paw-print", name: "Pets allowed", available: true },
    { icon: "wind", name: "Ceiling fan", available: true },
    { icon: "flame", name: "Hot water", available: true },
  ],

  // Reviews
  reviews: [
    {
      id: 1,
      name: "Anand",
      avatar: null,
      location: "Mumbai, India",
      date: "September 2026",
      yearsOnAirbnb: "2 years on Airbnb",
      rating: 5,
      text: "The place is exactly as described. Jacuzzi was the highlight of our stay. The apartment is clean, well-maintained, and has all the amenities you need. The host was very responsive and helpful throughout our stay. Highly recommend for couples looking for a romantic getaway in Goa!",
    },
    {
      id: 2,
      name: "Priya",
      avatar: null,
      location: "Delhi, India",
      date: "August 2026",
      yearsOnAirbnb: "3 years on Airbnb",
      rating: 5,
      text: "What a wonderful stay! The private jacuzzi was amazing and the location is perfect - close to the beach and restaurants. The apartment is stylishly decorated and very comfortable. Mirashya Homes were excellent hosts. Will definitely come back!",
    },
    {
      id: 3,
      name: "Rahul",
      avatar: null,
      location: "Bangalore, India",
      date: "August 2026",
      yearsOnAirbnb: "1 year on Airbnb",
      rating: 5,
      text: "Great apartment with modern amenities. The jacuzzi was a pleasant surprise. Located in a quiet area but close to all the action. The self check-in process was smooth. Perfect for a weekend getaway!",
    },
    {
      id: 4,
      name: "Sneha",
      avatar: null,
      location: "Pune, India",
      date: "July 2026",
      yearsOnAirbnb: "4 years on Airbnb",
      rating: 5,
      text: "Beautiful apartment! Everything was spotless and well-organized. The jacuzzi on the terrace is absolutely divine. Great Wi-Fi, comfortable bed, and lovely outdoor seating area. The host provided all the information we needed.",
    },
    {
      id: 5,
      name: "Vikram",
      avatar: null,
      location: "Hyderabad, India",
      date: "July 2026",
      yearsOnAirbnb: "2 years on Airbnb",
      rating: 5,
      text: "Stayed here for 3 nights and loved every moment. The apartment is cozy and has everything you need. The private jacuzzi is the cherry on top. Candolim beach is just a short walk away.",
    },
    {
      id: 6,
      name: "Meera",
      avatar: null,
      location: "Chennai, India",
      date: "June 2026",
      yearsOnAirbnb: "5 years on Airbnb",
      rating: 4,
      text: "Nice apartment in a great location. The jacuzzi was wonderful. Only minor issue was some noise from the street in the evening, but overall a fantastic stay. Would recommend to friends!",
    },
  ],

  // Review categories
  reviewCategories: [
    { name: "Cleanliness", rating: 5.0 },
    { name: "Accuracy", rating: 4.9 },
    { name: "Check-in", rating: 5.0 },
    { name: "Communication", rating: 5.0 },
    { name: "Location", rating: 4.8 },
    { name: "Value", rating: 4.9 },
  ],

  // House rules
  houseRules: [
    "Check-in: 2:00 PM - 11:00 PM",
    "Checkout before 11:00 AM",
    "3 guests maximum",
    "No smoking",
    "No parties or events",
    "Pets are allowed",
  ],

  // Safety
  safety: [
    "No carbon monoxide alarm",
    "No smoke alarm",
    "Security camera/recording device",
  ],

  // Cancellation
  cancellation: {
    type: "Free cancellation before 17 October",
    description:
      "Cancel before check-in on 17 Oct for a partial refund. After that, your refund depends on when you cancel.",
  },

  // Map coordinates (Candolim, Goa)
  map: {
    lat: 15.5179,
    lng: 73.7613,
    description:
      "Candolim is a popular beach destination in North Goa, known for its beautiful sandy beach, vibrant nightlife, and proximity to Fort Aguada. The area offers a perfect blend of relaxation and entertainment.",
  },
};
