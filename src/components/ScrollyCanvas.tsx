'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 75; // 00 to 74

function getFrameUrl(index: number) {
  // frame_00_delay-0.066s.png through frame_74_delay-0.066s.png
  const zeroPaddedStr = index.toString().padStart(2, '0');
  return `/sequence/frame_${zeroPaddedStr}_delay-0.066s.png`;
}

export default function ScrollyCanvas({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLElement | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Measure scroll progress relative to the container
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  // Map progress (0 to 1) to frame index (0 to 74)
  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all frames
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (frameIndex: number) => {
    if (!imagesLoaded || images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[frameIndex];
    if (!img) return;

    // Handle high DPI displays for crispness
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Set actual canvas resolution if needed (only on resize/init, but keeping it simple)
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    // "Object-fit: cover" logic for Canvas
    const canvasRatio = rect.width / rect.height;
    const imgRatio = img.width / img.height;

    let renderWidth = rect.width;
    let renderHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      // Image is wider than canvas
      renderWidth = rect.height * imgRatio;
      renderHeight = rect.height;
      offsetX = (rect.width - renderWidth) / 2;
    } else {
      // Image is taller than canvas
      renderWidth = rect.width;
      renderHeight = rect.width / imgRatio;
      offsetY = (rect.height - renderHeight) / 2;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    // Draw background color (optional if canvas is transparent and bg is set in CSS, but good measure)
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  useMotionValueEvent(currentFrame, 'change', (latest) => {
    // Only execute during scroll changes
    requestAnimationFrame(() => {
      drawFrame(Math.round(latest));
    });
  });

  useEffect(() => {
    // Initial draw once loaded
    if (imagesLoaded) {
      const initialFrame = Math.round(currentFrame.get());
      drawFrame(initialFrame);
    }
    
    const handleResize = () => {
      if (imagesLoaded) {
        requestAnimationFrame(() => drawFrame(Math.round(currentFrame.get())));
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded, currentFrame]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A0A0A]">
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover"
      />
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] text-white">
          <div className="animate-pulse">Loading experience...</div>
        </div>
      )}
    </div>
  );
}
