import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Monitor, Cpu, Heart, Baby, Eye, Activity, Scan, Zap, Shield, Wifi } from 'lucide-react';

const SamsungV6Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Baked-in titles and descriptions (trimmed, concise)
  const images = [
    {
      src: "/Fetal face with realistic view.png",
      alt: "Fetal face with RealisticVue",
      title: "Fetal Face — RealisticVue",
      icon: Baby,
      description: "Lifelike 3D rendering of the fetal face using RealisticVue for enhanced parental counseling and anatomical review."
    },
    {
      src: "/Fetal heart.png",
      alt: "Fetal heart imaging",
      title: "Fetal Heart Imaging",
      icon: Heart,
      description: "High-clarity fetal cardiac visualization to support detailed assessment of cardiac structures and function."
    },
    {
      src: "/umbilical cord with MV-Flow.png",
      alt: "Umbilical cord with MV-Flow",
      title: "MV-Flow — Umbilical Cord",
      icon: Activity,
      description: "Microvascular flow depiction of the umbilical cord with MV‑Flow for slow, minute flow sensitivity."
    },
    {
      src: "/umbilical cord with crystalvue.png",
      alt: "Umbilical cord with CrystalVue Flow",
      title: "CrystalVue Flow — Umbilical Cord",
      icon: Zap,
      description: "3D volumetric rendering of umbilical vasculature using CrystalVue Flow for rich structural detail."
    },
    {
      src: "/visualise snowflow in microvascular vessels.png",
      alt: "Visualize SlowFlow in microvascular vessels",
      title: "SlowFlow — Microvascular Vessels",
      icon: Activity,
      description: "Visualization of very low‑velocity flow within microvascular beds to aid assessment of perfusion."
    },
    {
      src: "/uterus with shadow.png",
      alt: "Uterus with ShadowHDR",
      title: "ShadowHDR — Uterus",
      icon: Scan,
      description: "Enhanced tissue contrast in uterine imaging using ShadowHDR for clearer delineation of structures."
    },
    {
      src: "/Renal artery.png",
      alt: "Renal artery visualization",
      title: "Renal Artery Visualization",
      icon: Cpu,
      description: "Detailed depiction of renal arterial flow patterns to support vascular assessment and diagnosis."
    },
    {
      src: "/S-detect.png",
      alt: "S-Detect decision support",
      title: "S‑Detect — Decision Support",
      icon: Shield,
      description: "AI‑assisted lesion characterization with standardised reporting (e.g., BI‑RADS) to support clinical decisions."
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-800 bg-slate-950"
            onClick={() => openModal(index)}
          >
            <div className="relative bg-black flex items-center justify-center p-2">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-auto object-contain mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <h4 className="font-semibold text-base drop-shadow-sm">{image.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
              <div className="relative bg-black flex items-center justify-center p-4">
                <img 
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="max-h-[80vh] w-auto object-contain"
                />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <h3 className="text-xl font-bold text-white drop-shadow-sm text-center">{images[currentImageIndex].title}</h3>
                </div>
              </div>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all shadow-lg hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all shadow-lg hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SamsungV6Gallery; 