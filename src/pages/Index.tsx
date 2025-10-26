import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import CommunityGallery from "@/components/CommunityGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Baby, Stethoscope, Eye, Activity, Scan, Calendar, FileText, ArrowRight, Star, Users, Clock, Award, Zap } from "lucide-react";
import { 
  TrophyIcon, 
  BoltIcon, 
  UserGroupIcon, 
  ClockIcon,
  HeartIcon,
  UserIcon,
  EyeIcon,
  CogIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  StarIcon,
  CalendarIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ultrasoundImage from "@/assets/ultrasound-3d.jpg";
import colorDopplerImage from "@/assets/color-doppler.jpg";
import samsungV6Image1 from "@/assets/equipment/samsung-v6-ultrasound-1.jpg";
const Index = () => {
  const featuredServices = [{
    title: "3D/4D Ultrasound Scanning",
    description: "Advanced three-dimensional and real-time imaging for detailed fetal development monitoring and anatomical assessment with lifelike visualization.",
    icon: Baby,
    featured: true,
    image: ultrasoundImage,
    href: "/services"
  }, {
    title: "Color Doppler Testing",
    description: "State-of-the-art blood flow visualization using color-coded imaging to detect vascular abnormalities and circulation issues.",
    icon: HeartIcon,
    featured: true,
    image: colorDopplerImage,
    href: "/services"
  }];
  const quickServices = [{
    title: "ECG Testing",
    description: "Computerized electrocardiogram for cardiac function analysis.",
    icon: HeartIcon,
    href: "/services"
  }, {
    title: "Ultrasound Scanning",
    description: "Comprehensive abdominal, pelvic, and general diagnostic imaging.",
    icon: EyeIcon,
    href: "/services"
  }, {
    title: "TVS Scan",
    description: "Transvaginal sonography for detailed gynecological assessment.",
    icon: CogIcon,
    href: "/services"
  }, {
    title: "X-Ray Imaging",
    description: "Digital radiography for bone and tissue examination.",
    icon: Scan,
    href: "/services"
  }];
  const stats = [{
    icon: Users,
    number: "10,000+",
    label: "Patients Served"
  }, {
    icon: Star,
    number: "98%",
    label: "Patient Satisfaction"
  }, {
    icon: Clock,
    number: "25+",
    label: "Years Experience"
  }, {
    icon: Award,
    number: "50+",
    label: "Tests Daily"
  }];
  return <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* KPIs Section - Compact and blended */}
      <section className="relative -mt-16" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* 25+ Years Experience - Enhanced Dark */}
            <div className="bg-gradient-to-br from-white/90 via-white/80 to-gray-100/60 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-all duration-300 shadow-md transform group-hover:rotate-3 border-2 border-medical-blue">
                <TrophyIcon className="w-5 h-5 text-medical-blue animate-pulse" />
              </div>
              <div className="text-lg md:text-xl font-bold text-medical-blue mb-1">25+</div>
              <div className="text-xs md:text-sm text-gray-700 font-semibold tracking-wide">Years Experience</div>
            </div>
            
            {/* Samsung V6 Technology - Enhanced Medium */}
            <div className="bg-gradient-to-br from-white/80 via-gray-50/70 to-gray-100/50 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-all duration-300 shadow-md transform group-hover:-rotate-3 border-2 border-medical-blue">
                <BoltIcon className="w-5 h-5 text-medical-blue group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="text-base md:text-lg font-bold text-medical-blue mb-1">Samsung V6</div>
              <div className="text-xs md:text-sm text-gray-700 font-semibold tracking-wide">Advanced Technology</div>
            </div>
            
            {/* 10,000+ Patients - Enhanced Light */}
            <div className="bg-gradient-to-br from-white/70 via-gray-50/60 to-gray-100/40 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-all duration-300 shadow-md transform group-hover:rotate-6 border-2 border-medical-blue">
                <UserGroupIcon className="w-5 h-5 text-medical-blue group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-lg md:text-xl font-bold text-medical-blue mb-1">10,000+</div>
              <div className="text-xs md:text-sm text-gray-700 font-semibold tracking-wide">Patients Served</div>
            </div>
            
            {/* Operating Hours - Enhanced Lightest */}
            <div className="bg-gradient-to-br from-white/60 via-gray-50/50 to-gray-100/30 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-all duration-300 shadow-md transform group-hover:-rotate-6 border-2 border-medical-blue">
                <ClockIcon className="w-5 h-5 text-medical-blue group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="text-base md:text-lg font-bold text-medical-blue mb-1">9 AM - 5 PM</div>
              <div className="text-xs md:text-sm text-gray-700 font-semibold tracking-wide">Daily Operating Hours</div>
            </div>
          </div>
        </div>
        
        {/* Smooth transition overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Key Services - Enhanced with smooth transition */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mb-4">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Professional diagnostic imaging you can trust
            </p>
            <div className="w-24 h-1 bg-medical-blue mx-auto mt-4"></div>
          </div>

          {/* Featured Services - Large Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {featuredServices.map(service => <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} href={service.href} featured={service.featured} image={service.image} />)}
          </div>

          {/* Quick Services - Compact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {quickServices.map(service => 
              <div key={service.title} className="bg-white rounded-xl p-6 md:p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-medical-blue-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-blue group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-medical-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-base md:text-lg text-medical-blue mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button variant="medical-outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}

      {/* Community Gallery Section */}
      <CommunityGallery />

      {/* Patient Testimonials & Reviews Section */}
      <Testimonials />

      {/* Why Choose Us - Simple */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mb-4">
              Why Choose Kaler Scan Centre?
            </h2>
            <div className="w-24 h-1 bg-medical-blue mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-medical-blue to-medical-blue-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <TrophyIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-medical-blue mb-3">Expert Care</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Experienced medical professionals with advanced training</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-medical-blue to-medical-blue-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-medical-blue mb-3">Advanced Technology</h3>
              <p className="text-gray-600 text-lg leading-relaxed">State-of-the-art 3D/4D and Color Doppler equipment</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-medical-blue to-medical-blue-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-medical-blue mb-3">Convenient Hours</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Open daily from 9:00 AM to 5:00 PM for your convenience</p>
            </div>
          </div>
        </div>
      </section>


      
      <Footer />
    </div>;
};
export default Index;