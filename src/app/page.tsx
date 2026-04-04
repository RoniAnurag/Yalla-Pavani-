'use client';

import { useRef } from 'react';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import About from '@/components/About';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[#0a0a0a]">
      {/* 500vh ensures a long scroll for the cinematic sequence */}
      <div ref={containerRef} className="relative h-[500vh]">
        {/* The canvas handles the sticky behaviour inside its own sticky container */}
        <div className="sticky top-0 h-screen w-full">
          <ScrollyCanvas scrollContainerRef={containerRef} />
          <Overlay scrollContainerRef={containerRef} />
        </div>
      </div>
      
      {/* Rest of the page follows the sticky area */}
      <About />
      <Projects />
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-white/30 text-sm border-t border-white/10">
        <p>© {new Date().getFullYear()} Yalla Pavani. All rights reserved.</p>
      </footer>
    </main>
  );
}
