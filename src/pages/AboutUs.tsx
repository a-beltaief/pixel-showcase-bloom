import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import sushiNight from "@/assets/sushi-night-2.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import all images from Bilder_Über_Uns
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
import img14 from "@/assets/Bilder_Über_Uns/e10d617d-9514-4a1a-b9e4-d697dae00ea4.jpg";

const firstRowImages = [img1, img2, img3, img4, img5, img6, img7];
const secondRowImages = [img8, img9, img10, img11, img12, img13, img14];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Über uns</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Image */}
            <div className="order-2 md:order-1">
              <img 
                src={sushiNight} 
                alt="Sushi Night - 2024" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            {/* Text */}
            <div className="order-1 md:order-2">
            <p className="text-lg md:text-xl leading-relaxed text-foreground-muted">
              Wir sind <span className="font-bold text-foreground">PRINCEBERG</span>, ein Universitätsprojekt aus Wien, 
              das professionelle Webentwicklung zugänglich macht. Unser revolutionäres Website-System setzt neue 
              Maßstäbe – Premium-Websites in 14 Tagen zu einem Bruchteil der üblichen Kosten.
            </p>
            </div>
            
          </div>

          {/* Image Carousels */}
          <div className="space-y-8">
            {/* First Carousel - Scrolling Right */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {firstRowImages.map((img, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="overflow-hidden rounded-xl shadow-lg h-64">
                      <img
                        src={img}
                        alt={`Team Bild ${index + 1}`}
                        className="w-full h-full object-contain bg-background"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Second Carousel - Scrolling Left */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  playOnInit: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4 [direction:rtl]">
                {secondRowImages.map((img, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 [direction:ltr]">
                    <div className="overflow-hidden rounded-xl shadow-lg h-64">
                      <img
                        src={img}
                        alt={`Team Bild ${index + 8}`}
                        className="w-full h-full object-contain bg-background"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
