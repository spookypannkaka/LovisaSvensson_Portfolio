import React, { useRef, useEffect } from 'react';

// StarrySky component
function StarrySky() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    canvas.width = width;
    canvas.height = height;

    // Function to generate stars
    const generateStars = (count) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 1.5;
        const twinkle = Math.random() * 1.5 + 0.5; // Twinkle factor
        stars.push({ x, y, radius, twinkle });
      }
      return stars;
    };

    // Draw stars on canvas
    const drawStars = (stars) => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(Math.sin(star.twinkle))})`; // Use twinkle factor for dynamic opacity
        ctx.fill();
      });
    };

    // Update star twinkle
    const updateStars = (stars) => {
      stars.forEach(star => {
        star.twinkle += 0.07; // Update twinkle factor to animate
      });
    };

    // Animation loop
    const animate = () => {
      updateStars(stars);
      drawStars(stars);
      requestAnimationFrame(animate);
    };

    // Generate and draw stars
    const stars = generateStars(200); // Generate 200 stars
    animate();

  }, []);

  return <canvas ref={canvasRef} style={{position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none',}} />;
}

export default StarrySky;