"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useSpring, motion, useMotionValue } from 'framer-motion';

const FRAME_COUNT = 200;
const IMAGES_PATH = '/frames/ezgif-frame-';

export default function HeadphoneScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Motion value for smooth frame transitions tied to mouse or scroll
  const targetFrame = useMotionValue(0);
  const smoothFrame = useSpring(targetFrame, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameIndexStr = i.toString().padStart(3, '0');
      img.src = `${IMAGES_PATH}${frameIndexStr}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      imgArray.push(img);
    }
    setImages(imgArray);
  }, []);

  // Handle Mouse Move for rotation
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = x / rect.width;

    // Map percentage to frame count
    const frame = Math.floor(percentage * (FRAME_COUNT - 1));
    targetFrame.set(frame);
  };

  // Render loop
  useEffect(() => {
    if (!isLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const render = (index: number) => {
      let fIndex = Math.round(index);
      if (fIndex < 0) fIndex = 0;
      if (fIndex >= FRAME_COUNT) fIndex = FRAME_COUNT - 1;

      const image = images[fIndex];
      if (!image) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      context.clearRect(0, 0, canvasWidth, canvasHeight);

      const imgRatio = image.width / image.height;
      const canvasRatio = canvasWidth / canvasHeight;

      let renderWidth, renderHeight;

      if (canvasRatio > imgRatio) {
        renderWidth = canvasWidth;
        renderHeight = canvasWidth / imgRatio;
      } else {
        renderWidth = canvasHeight * imgRatio;
        renderHeight = canvasHeight;
      }

      const offsetX = (canvasWidth - renderWidth) / 2;
      const offsetY = (canvasHeight - renderHeight) / 2;

      context.drawImage(image, offsetX, offsetY, renderWidth, renderHeight);
    };

    // React to smoothFrame changes
    const unsubscribe = smoothFrame.on("change", (latest) => {
      render(latest);
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(smoothFrame.get());
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    }
  }, [isLoaded, smoothFrame, images]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full relative bg-[#050505]"
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-[#E8C07D] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs uppercase tracking-widest text-[#E8C07D]">Loading Assets</p>
          </div>
        </div>
      )}
    </div>
  );
}
