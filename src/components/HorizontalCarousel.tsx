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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }

    const imagePromises = images.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          console.log(`Bild geladen: ${loadedCount}/${totalImages}`);
          if (loadedCount === totalImages) {
            console.log('Alle Bilder geladen!');
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = (error) => {
          console.error('Fehler beim Laden:', src, error);
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
          resolve();
        };
      });
    });

    Promise.allSettled(imagePromises);
  }, [images]);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const container = containerRef.current;
    if (!container || images.length === 0) return;

    const divItems = gsap.utils.toArray<HTMLElement>(container.children);
    if (!divItems.length) return;

    // Wait for next frame to ensure DOM is ready
    requestAnimationFrame(() => {
      // Calculate precise dimensions with gap
      const firstItem = divItems[0];
      const itemWidth = firstItem.offsetWidth;
      const gap = 10; // 10px gap between images
      const totalItemWidth = itemWidth + gap;
      const totalWidth = totalItemWidth * images.length;

      // Create seamless wrap function for range [0, totalWidth]
      const wrapFn = (x: number) => {
        const wrapped = gsap.utils.wrap(0, totalWidth)(x);
        return wrapped;
      };

      // Position all items precisely (2 sets only)
      const itemsPerSet = images.length;
      divItems.forEach((child, i) => {
        const setIndex = Math.floor(i / itemsPerSet);
        const posInSet = i % itemsPerSet;
        const xPos = (setIndex * totalWidth) + (posInSet * totalItemWidth);
        gsap.set(child, { 
          x: xPos,
          force3D: true,
          willChange: 'transform'
        });
      });

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
          const distance = isDragging ? d * 5 : d * 10;
          
          divItems.forEach(child => {
            const currentX = gsap.getProperty(child, 'x') as number;
            const newX = wrapFn(currentX + distance);
            gsap.set(child, {
              x: newX,
              force3D: true
            });
          });
        }
      });

      let rafId: number;
      if (autoplay) {
        const speedPerFrame = -autoplaySpeed;

        const tick = () => {
          divItems.forEach(child => {
            const currentX = gsap.getProperty(child, 'x') as number;
            const newX = wrapFn(currentX + speedPerFrame);
            gsap.set(child, {
              x: newX,
              force3D: true
            });
          });
          rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);

        if (pauseOnHover) {
          const stopTicker = () => rafId && cancelAnimationFrame(rafId);
          const startTicker = () => (rafId = requestAnimationFrame(tick));

          container.addEventListener('mouseenter', stopTicker);
          container.addEventListener('mouseleave', startTicker);

          return () => {
            observer.kill();
            stopTicker();
            container.removeEventListener('mouseenter', stopTicker);
            container.removeEventListener('mouseleave', startTicker);
          };
        } else {
          return () => {
            observer.kill();
            rafId && cancelAnimationFrame(rafId);
          };
        }
      }

      return () => {
        observer.kill();
        if (rafId) cancelAnimationFrame(rafId);
      };
    });
  }, [images, autoplay, autoplaySpeed, pauseOnHover, imagesLoaded]);

  if (!imagesLoaded) {
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

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex cursor-grab"
      >
        {/* Duplicate images 2 times for seamless loop */}
        {[...images, ...images].map((img, index) => (
          <div key={index} className="flex-shrink-0" style={{ marginRight: '10px' }}>
            <img
              src={img}
              alt={`Team Bild ${(index % images.length) + 1}`}
              className="h-64 w-auto object-contain rounded-md"
              style={{ display: 'block' }}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
