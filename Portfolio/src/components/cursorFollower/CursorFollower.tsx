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

    // función para crear una chispa en (x, y)
    const spawnSparkle = (x: number, y: number, scale: number) => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.top = `${y + (Math.random() - 0.5) * 30}px`;
      sparkle.style.left = `${x + (Math.random() - 0.5) * 30}px`;
      sparkle.style.opacity = scale.toString();
      sparkle.style.width = sparkle.style.height = `${scale * 10}px`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 600);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // lanzamos 3 chispas con un pequeño delay para que vengan un poco "detrás"
      [1, 0.8, 0.6].forEach((scale, i) => {
        const x = e.clientX;
        const y = e.clientY;
        setTimeout(() => spawnSparkle(x, y, scale), i * 50);
      });
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
