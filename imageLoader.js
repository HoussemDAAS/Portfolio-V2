// Simple image loader that returns the src as-is
// This allows any URL to work without restrictions
export default function customImageLoader({ src }) {
  // If it's a local image (starts with /), return as-is
  if (src.startsWith('/')) {
    return src;
  }

  // For external URLs, return as-is
  return src;
}
