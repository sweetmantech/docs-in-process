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

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer transition-transform duration-200 hover:scale-105 ${className}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Click to ${isZoomed ? 'close' : 'zoom'} image`}
      />
      
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setIsZoomed(false)}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="button"
          aria-label="Close zoomed image"
        >
          <div className="relative max-h-full max-w-full">
            <img
              src={src}
              alt={alt}
              className="max-h-full max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoomed image"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
