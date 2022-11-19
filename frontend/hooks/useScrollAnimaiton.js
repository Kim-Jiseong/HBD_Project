import React, { useState, useEffect, useRef, useCallback } from "react";
export const useScrollAnimation = () => {
  const element = useRef();
  useEffect(() => {
    // element 안으로 들어가기 위해서 useEffect 사용
    if (element.current) {
      const { current } = element;
      console.log(current);
      current.style.transition = `opacity 1s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
