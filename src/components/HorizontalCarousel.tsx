import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

interface HorizontalCarouselProps {
  images: string[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
}

export default function HorizontalCarousel({
  images,
  autoplay = true,
  autoplaySpeed = 0.5,
  pauseOnHover = true
}: HorizontalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [validImages, setValidImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Intelligent non-blocking preload with timeout and error handling
  useEffect(() => {
    if (images.length === 0) {
      setIsLoading(false);
      return;
    }

    const loadImages = async () => {
      const loadPromises = images.map((src) => 
        new Promise<{ src: string; success: boolean }>((resolve) => {
          const img = new Image();
          const timeout = setTimeout(() => {
            console.warn(`⏱️ Timeout für Bild: ${src}`);
            resolve({ src, success: false });
          }, 3000); // 3 Sekunden Timeout
          
          img.onload = () => {
            clearTimeout(timeout);
            console.log(`✅ Bild geladen: ${src}`);
            resolve({ src, success: true });
          };
          
          img.onerror = () => {
            clearTimeout(timeout);
            console.error(`❌ Fehler beim Laden: ${src}`);
            resolve({ src, success: false });
          };
          
          img.src = src;
        })
      );
      
      const results = await Promise.all(loadPromises);
      const successful = results
        .filter(r => r.success)
        .map(r => r.src);
      
      console.log(`🎯 ${successful.length}/${images.length} Bilder erfolgreich geladen`);
      setValidImages(successful);
      setIsLoading(false);
    };
    
    loadImages();
  }, [images]);

  // Simplified container-based animation
  useEffect(() => {
    if (!validImages.length || isLoading) return;
    
    const container = containerRef.current;
    if (!container) return;

    // Wait for DOM to be ready
    requestAnimationFrame(() => {
      const imageWidth = 400; // Fixed width
      const gap = 10;
      const singleSetWidth = (imageWidth + gap) * validImages.length;
      let currentX = 0;
      let rafId: number;
      let isPaused = false;

      const observer = Observer.create({
        target: container,
        type: 'wheel,touch,pointer',
        preventDefault: true,
        onPress: ({ target }) => {
          (target as HTMLElement).style.cursor = 'grabbing';
        },
        onRelease: ({ target }) => {
          (target as HTMLElement).style.cursor = 'grab';
        },
        onChange: ({ deltaX, isDragging, event }) => {
          const d = event.type === 'wheel' ? -deltaX : deltaX;
          const distance = isDragging ? d * 3 : d * 8;
          currentX += distance;
          
          // Wrap around smoothly
          while (currentX > 0) currentX -= singleSetWidth;
          while (currentX < -singleSetWidth * 2) currentX += singleSetWidth;
          
          gsap.set(container, { x: currentX, force3D: true });
        }
      });

      if (autoplay) {
        const tick = () => {
          if (!isPaused) {
            currentX -= autoplaySpeed;
            
            // Simple reset when first set is fully scrolled
            if (Math.abs(currentX) >= singleSetWidth) {
              currentX = currentX + singleSetWidth;
            }
            
            gsap.set(container, { x: currentX, force3D: true });
          }
          rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);

        if (pauseOnHover) {
          const handleMouseEnter = () => { isPaused = true; };
          const handleMouseLeave = () => { isPaused = false; };

          container.addEventListener('mouseenter', handleMouseEnter);
          container.addEventListener('mouseleave', handleMouseLeave);

          return () => {
            observer.kill();
            cancelAnimationFrame(rafId);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
          };
        } else {
          return () => {
            observer.kill();
            cancelAnimationFrame(rafId);
          };
        }
      }

      return () => {
        observer.kill();
        if (rafId) cancelAnimationFrame(rafId);
      };
    });
  }, [validImages, autoplay, autoplaySpeed, pauseOnHover, isLoading]);

  if (isLoading) {
    return (
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center justify-center h-64 bg-background">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <div className="text-foreground-muted text-lg">Bilder werden geladen...</div>
          </div>
        </div>
      </div>
    );
  }

  if (validImages.length === 0) {
    return (
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center justify-center h-64 bg-background">
          <div className="text-foreground-muted text-lg">Keine Bilder verfügbar</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-[10px] cursor-grab"
      >
        {/* Render 3 sets for seamless looping */}
        {[...validImages, ...validImages, ...validImages].map((img, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={img}
              alt={`Team Bild ${(index % validImages.length) + 1}`}
              className="h-64 rounded-md object-cover"
              style={{ width: '400px', display: 'block' }}
              loading="eager"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
