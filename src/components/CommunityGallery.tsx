import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunityGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: "/community-opening-ceremony.jpeg",
      caption: "Opening Ceremony — Kaler Scan Centre officially inaugurated",
      type: "Opening Ceremony"
    },
    {
      id: 2,
      image: "/community-newspaper-general.jpeg",
      caption: "Newspaper Coverage — Featured community healthcare initiative",
      type: "Media Coverage"
    },
    {
      id: 3,
      image: "/community-newspaper-diabetes.jpeg",
      caption: "Diabetes Awareness — News article on screening and education",
      type: "Public Health"
    },
    {
      id: 4,
      image: "/community-newspaper-pollution.jpeg",
      caption: "Air Pollution & Health — Coverage on community health impact",
      type: "Public Health"
    },
    {
      id: 5,
      image: "/community-energy-drinks-kids.jpeg",
      caption: "Energy Drinks & Kids — Awareness on risks and safe habits",
      type: "Health Awareness"
    }
  ];

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryItems.length]);

  // (Removed dark mode toggle on scroll as requested)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mb-4">
            Community Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to community health through free camps, awareness programs, and media recognition
          </p>
          <div className="w-24 h-1 bg-medical-blue mx-auto mt-4"></div>
        </div>

        {/* Gallery Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image Display */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg bg-transparent">
            <div 
              className="relative h-80 md:h-[28rem] bg-transparent flex items-center justify-center"
              style={{
                backgroundImage: `url(${galleryItems[currentIndex].image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Placeholder text when no image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="bg-transparent rounded-lg p-4">
                  <div className="text-sm font-semibold text-blue-100 mb-2">
                    {galleryItems[currentIndex].type}
                  </div>
                  <p className="text-lg font-medium leading-relaxed">
                    {galleryItems[currentIndex].caption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-medical-blue border-2 border-medical-blue rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-medical-blue border-2 border-medical-blue rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-medical-blue scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery; 