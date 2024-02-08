"use client";
import useIntersectionObserver from "@/utils/IntersectionObserver";
import React, { useState, useEffect, useRef } from "react";

const Counter: React.FC<CounterProps> = ({ start, end, duration, subtitle }) => {
    const [count, setCount] = useState(start);
    const counterRef = useRef(null);
    const isVisible = useIntersectionObserver(counterRef);
  
    useEffect(() => {
      let frame: number = 0;
      let startTime: number | null = null;
  
      const countTo = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
  
        setCount(start + (end - start) * progress);
  
        if (progress < 1) {
          frame = requestAnimationFrame(countTo);
        }
      };
  
      if (isVisible) {
        frame = requestAnimationFrame(countTo);
      }
  
      return () => cancelAnimationFrame(frame);
    }, [start, end, duration, isVisible]);
  
    return (
      <li ref={counterRef} className="counter">
        <div className="counter-value">{Math.floor(count)} +</div>
        <div className="counter-subtitle">{subtitle}</div>
      </li>
    );
  };
  
  export default Counter;