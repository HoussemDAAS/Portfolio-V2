import { useState } from 'react';
import Image from 'next/image';

/**
 * Fallback Image component that uses regular img tag for public folder images
 * and Next.js Image for external images
 */
const SafeImage = ({ src, alt, fill, priority, sizes, className, style, onError, ...props }) => {
  const [imageError, setImageError] = useState(false);
  
  // For public folder images (start with /), use regular img tag
  const isPublicImage = src.startsWith('/') && !src.startsWith('//');

  const handleNativeError = (e) => {
    console.error('Image failed to load:', src);
    setImageError(true);
    if (onError) onError(e);
  };

  // If image completely failed, show placeholder
  if (imageError) {
    return (
      <div 
        className={className}
        style={{ 
          ...style, 
          background: '#f0f0f0', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#999',
          fontSize: '12px'
        }}
      >
        Image not found
      </div>
    );
  }

  // For public folder images, use native img tag (more reliable)
  if (isPublicImage) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ 
          ...style, 
          width: fill ? '100%' : 'auto',
          height: fill ? '100%' : 'auto',
          objectFit: fill ? 'cover' : 'initial'
        }}
        onError={handleNativeError}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    );
  }

  // For external URLs, use Next.js Image
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={className}
      style={style}
      onError={handleNativeError}
      {...props}
    />
  );
};

export default SafeImage;
