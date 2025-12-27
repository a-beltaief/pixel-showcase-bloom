import img1 from "@/assets/Bilder_Über_Uns/IMG_03B52D091928-1.jpeg";
import img2 from "@/assets/Bilder_Über_Uns/IMG_2396.jpg";
import img3 from "@/assets/Bilder_Über_Uns/IMG_2625.jpg";
import img4 from "@/assets/Bilder_Über_Uns/IMG_3438.jpg";
import img5 from "@/assets/Bilder_Über_Uns/IMG_3868.jpg";
import img6 from "@/assets/Bilder_Über_Uns/IMG_4687.jpg";
import img7 from "@/assets/Bilder_Über_Uns/IMG_5833.jpg";
import img8 from "@/assets/Bilder_Über_Uns/IMG_6273.png";
import img9 from "@/assets/Bilder_Über_Uns/IMG_6302.jpg";
import img10 from "@/assets/Bilder_Über_Uns/IMG_6829.jpg";
import img11 from "@/assets/Bilder_Über_Uns/IMG_8238.jpg";
import img12 from "@/assets/Bilder_Über_Uns/IMG_8415.jpg";
import img13 from "@/assets/Bilder_Über_Uns/PHOTO-2024-09-06-19-15-09.jpg";
import img14 from "@/assets/Bilder_Über_Uns/PHOTO-2025-09-30-02-00-04.jpg";
import img15 from "@/assets/Bilder_Über_Uns/WhatsApp Image 2025-10-17 at 02.25.30 (1).jpeg";
import img16 from "@/assets/Bilder_Über_Uns/WhatsApp Image 2025-10-17 at 02.25.30 (2).jpeg";
import img17 from "@/assets/Bilder_Über_Uns/WhatsApp Image 2025-10-17 at 02.25.30 (3).jpeg";
import img18 from "@/assets/Bilder_Über_Uns/WhatsApp Image 2025-10-17 at 02.25.30 (4).jpeg";
import img19 from "@/assets/Bilder_Über_Uns/WhatsApp Image 2025-10-17 at 02.25.30 (5).jpeg";
import img20 from "@/assets/Bilder_Über_Uns/WhatsApp Image 2025-10-17 at 02.25.30 (6).jpeg";
import img21 from "@/assets/Bilder_Über_Uns/WhatsApp Image 2025-10-17 at 02.25.30 (7).jpeg";
import img22 from "@/assets/Bilder_Über_Uns/WhatsApp Image 2025-10-17 at 02.25.30.jpeg";
import img23 from "@/assets/Bilder_Über_Uns/WhatsApp Image 2025-10-17 at 02.25.31.jpeg";
import img24 from "@/assets/Bilder_Über_Uns/e10d617d-9514-4a1a-b9e4-d697dae00ea4.jpg";

const allImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24
];

// Duplicate to create seamless infinite scroll effect
const row1Images = [...allImages.slice(0, 15), ...allImages.slice(0, 15)];
const row2Images = [...allImages.slice(10), ...allImages.slice(0, 5), ...allImages.slice(10), ...allImages.slice(0, 5)];

export const TeamGallery = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Das Team hinter PRINCEBERG
        </h2>
        <p className="text-foreground-muted text-center max-w-2xl mx-auto">
          Menschen, die Software bauen. Für Menschen, die was bewegen wollen.
        </p>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative mb-3">
        <div className="flex gap-3 animate-scroll-left">
          {row1Images.map((img, index) => (
            <div 
              key={`row1-${index}`}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-card"
            >
              <img 
                src={img} 
                alt={`Team ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative">
        <div className="flex gap-3 animate-scroll-right">
          {row2Images.map((img, index) => (
            <div 
              key={`row2-${index}`}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-card"
            >
              <img 
                src={img} 
                alt={`Team ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
