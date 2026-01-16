import { useRef, useEffect } from 'react';
 
const LazyBackground = ({ imageUrl, placeholder = "#0e0d0dff" }) => {
  const elementRef = useRef(null); // Ref to the target element
 
  useEffect(() => {
    // Initialize Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in viewport: load the image
            const img = new Image();
            img.src = imageUrl;
 
            // On image load: set background
            img.onload = () => {
              if (elementRef.current) {
                elementRef.current.style.backgroundImage = `url("${imageUrl}")`;
                elementRef.current.style.backgroundSize = "cover"; // Optional: style as needed
                elementRef.current.style.backgroundPosition = "center";
              }
            };
 
            // On error: use placeholder
            img.onerror = () => {
              if (elementRef.current) {
                elementRef.current.style.backgroundColor = placeholder;
              }
            };
 
            // Stop observing after load
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '200px' } // Preload before fully in view
    );
 
    // Observe the element if ref exists
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
 
    // Cleanup: disconnect observer on unmount
    return () => observer.disconnect();
  }, [imageUrl, placeholder]);
 
  return (
    <div
      ref={elementRef}
      className="site-bg"
      style={{
        // Placeholder color while image is loading
        backgroundColor: placeholder,
      }}
      aria-hidden={true}
    />
  );
};
 
export default LazyBackground;