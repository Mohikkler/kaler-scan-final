import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { CalendarIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import medicalRoomBackground from "@/assets/medical-room-background.png";

const Hero = () => {
  return (
    <section 
      className="relative flex items-center overflow-hidden" 
      style={{ 
        height: '85vh', 
        backgroundImage: `url(${medicalRoomBackground})`,
        backgroundSize: 'contain',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#F7F9FC' // Match the KPI section background
      }}
    >


      <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Clinic Name - Positioned at top */}
        <div className="absolute -top-16 left-40 text-white animate-fade-in-up" style={{ fontFamily: 'Formative, sans-serif' }}>
          <h1 className="text-xl md:text-2xl text-white font-light tracking-wider animate-fade-in-up animation-delay-200" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.3)' }}>
            KALER
          </h1>
          <h2 className="text-xl md:text-2xl text-white font-light tracking-wider animate-fade-in-up animation-delay-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.8)' }}>
            SCAN CENTRE
          </h2>
        </div>

        <div className="text-white max-w-xl ml-32 mt-16">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight text-white animate-fade-in-up animation-delay-800" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.8)' }}>
            Advanced Diagnostics
            <br />
            <span className="text-blue-200 animate-fade-in-up animation-delay-1000" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.4)' }}>for Your Health</span>
          </h2>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1200">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl text-base py-3 px-8 min-h-[48px] transition-all duration-300 font-semibold group" 
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.3)' }}
              asChild
            >
              <Link to="/appointments">
                <CalendarIcon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Book Appointment
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl text-base py-3 px-8 min-h-[48px] transition-all duration-300 group" 
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.3)' }}
              asChild
            >
              <Link to="/contact">
                <PhoneIcon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Reach Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default Hero;