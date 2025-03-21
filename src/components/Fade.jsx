import React, { useEffect, useRef, useState } from "react";

const FadeInScroll = ({ children, id, delay = 0, animationType = "bottom" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false); 
  const elementRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimate(true); 
          setIsVisible(true); 
        } else {
          setAnimate(false); 
          setIsVisible(false); 
        }
      },
      {
        threshold: 0.2, 
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement); 
    }

    return () => {
      if (currentElement) {
        observer.disconnect(); 
      }
    };
  }, []);

  const animationClass = () => {
    if (animationType === "bottom" && animate) {
      return "animate-bottom-to-top";
    } else if (animationType === "left" && animate) {
      return "animate-left-to-right";
    } else if (animationType === "right" && animate) {
      return "animate-right-to-left";
    }
    return "";
  };

  return (
    <div
      ref={elementRef} 
      id={id}
      className={`transition-opacity duration-1000 opacity-0 ${isVisible ? animationClass() : ""}`}
      style={{ transitionDelay: `${delay}ms` }} 
    >
      {children}
    </div>
  );
};

export default FadeInScroll;
