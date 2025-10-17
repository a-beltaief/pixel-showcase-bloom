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

    const imagePromises = images.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
          reject();
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

    const firstItem = divItems[0];
    const itemWidth = firstItem.offsetWidth;
    const itemStyle = getComputedStyle(firstItem);
    const itemMarginRight = parseFloat(itemStyle.marginRight) || 0;
    const totalItemWidth = itemWidth + itemMarginRight;
    const totalWidth = totalItemWidth * images.length;

    const wrapFn = gsap.utils.wrap(-totalWidth, totalWidth);

    // Position items in a continuous loop
    const itemsPerSet = images.length;
    divItems.forEach((child, i) => {
      const setIndex = Math.floor(i / itemsPerSet);
      const posInSet = i % itemsPerSet;
      const x = (setIndex * totalWidth) + (posInSet * totalItemWidth);
      gsap.set(child, { x });
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
          gsap.to(child, {
            duration: 0.5,
            ease: 'expo.out',
            x: `+=${distance}`,
            modifiers: {
              x: gsap.utils.unitize(wrapFn)
            }
          });
        });
      }
    });

    let rafId: number;
    if (autoplay) {
      const speedPerFrame = -autoplaySpeed; // Negative for right to left

      const tick = () => {
        divItems.forEach(child => {
          gsap.set(child, {
            x: `+=${speedPerFrame}`,
            modifiers: {
              x: gsap.utils.unitize(wrapFn)
            }
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
  }, [images, autoplay, autoplaySpeed, pauseOnHover, imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center justify-center h-64">
          <div className="text-foreground-muted">Wird geladen...</div>
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
        {/* Duplicate images 3 times for seamless infinite loop */}
        {[...images, ...images, ...images].map((img, index) => (
          <div key={index} className="flex-shrink-0 px-0.5">
            <img
              src={img}
              alt={`Team Bild ${(index % images.length) + 1}`}
              className="h-64 w-auto object-contain rounded-lg"
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
