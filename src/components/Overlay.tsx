'use client';

import { useScroll, useTransform, motion } from 'framer-motion';

export default function Overlay({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2, 1], [0, -100, -100]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 0.5, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [50, 50, 0, 0]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.7, 0.8, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 0.6, 1], [50, 50, 0, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center">
        
        {/* SECTION 1: Center */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Yalla Pavani.
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/70 font-light">
            Full-Stack Developer.
          </p>
        </motion.div>

        {/* SECTION 2: Left Aligned */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col justify-center px-10 md:px-32 max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white drop-shadow-2xl">
            I build digital experiences.
          </h2>
          <div className="w-24 h-1 bg-white/50 mt-8 rounded-full" />
        </motion.div>

        {/* SECTION 3: Right Aligned */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right px-10 md:px-32"
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white drop-shadow-2xl">
              Bridging design and engineering.
            </h2>
            <div className="w-24 h-1 bg-white/50 mt-8 rounded-full ml-auto" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
