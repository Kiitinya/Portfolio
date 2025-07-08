import React, { useEffect, useRef } from "react";
import "./CursorFollower.css";

const CursorFollower: React.FC = () => {
  const coreRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;
    const speed = 0.12;

    const updatePosition = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (coreRef.current)
        coreRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      if (glowRef.current)
        glowRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;

      requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    updatePosition();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={coreRef} className="cursor-core" />
    </>
  );
};

export default CursorFollower;
