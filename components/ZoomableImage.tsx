import React, { useState } from 'react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ZoomableImage({ src, alt, className = '' }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsZoomed(!isZoomed);
    }
    if (e.key === 'Escape') {
      setIsZoomed(false);
    }
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: '16px',
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    maxHeight: '100%',
    maxWidth: '100%',
  };

  const zoomedImageStyle: React.CSSProperties = {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '12px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    transition: 'all 0.2s ease',
  };

  const regularImageStyle: React.CSSProperties = {
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={regularImageStyle}
        className={className}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Click to ${isZoomed ? 'close' : 'zoom'} image`}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      />
      
      {isZoomed && (
        <div
          style={overlayStyle}
          onClick={() => setIsZoomed(false)}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="button"
          aria-label="Close zoomed image"
        >
          <div style={imageContainerStyle}>
            <img
              src={src}
              alt={alt}
              style={zoomedImageStyle}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              style={closeButtonStyle}
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoomed image"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
