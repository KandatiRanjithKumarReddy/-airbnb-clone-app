import { useState } from 'react';

export default function Avatar({ src, alt, initial, className = '', fallbackBg = '#6B8E23' }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`avatar-fallback ${className}`}
        style={{
          backgroundColor: fallbackBg,
          color: '#ffffff',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
        }}
        aria-label={alt || initial}
      >
        <span>{initial || (alt ? alt.charAt(0).toUpperCase() : '?')}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'User avatar'}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
