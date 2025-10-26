import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SamsungV6Gallery from "@/components/SamsungV6Gallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Baby, 
  Stethoscope, 
  Eye, 
  Activity, 
  Scan, 
  X, 
  CircuitBoard,
  UserCheck,
  Calendar,
  ArrowRight,
  Award,
  Zap,
  Monitor,
  Cpu,
  Wifi,
  Shield,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import ultrasoundImage from "@/assets/ultrasound-3d.jpg";
import colorDopplerImage from "@/assets/color-doppler.jpg";

// Use renamed images from public folder
const samsungMachineSVG = "/samsung-v6-machine.svg";
const serviceImage1 = "/samsung-v6-4d-imaging.png";
const serviceImage2 = "/samsung-v6-color-doppler.png";
const serviceImage3 = "/samsung-v6-hd-display.png";
const serviceImage4 = "/samsung-v6-measurement-tools.png";
const serviceImage5 = "/samsung-v6-transvaginal.png";
const serviceImage6 = "/samsung-v6-follicular-monitoring.png";
const serviceImage7 = "/samsung-v6-3d-volume.png";
const serviceImage8 = "/samsung-v6-multi-frequency.png";
const serviceImage9 = "/samsung-v6-safety-features.png";
const serviceImage10 = "/samsung-v6-digital-connectivity.png";

const Services = () => {
  const services = [
    {
      title: "Samsung V6 Ultrasound System",
      description: "State-of-the-art Samsung V6 ultrasound system providing advanced 3D/4D imaging, Color Doppler, and high-resolution diagnostic capabilities for comprehensive medical imaging.",
      icon: Award,
      featured: true,
      image: samsungMachineSVG,
      href: "https://www.samsunghealthcare.com/en/ultrasound/v6"
    },
    {
      title: "3D/4D Ultrasound Scanning",
      description: "Advanced three-dimensional and real-time four-dimensional imaging technology for detailed fetal development monitoring and anatomical assessment.",
      icon: Baby,
      featured: true,
      image: serviceImage1,
      href: "https://en.wikipedia.org/wiki/Obstetric_ultrasound"
    },
    {
      title: "Color Doppler Testing",
      description: "State-of-the-art blood flow visualization using color-coded imaging to detect vascular abnormalities and circulation issues.",
      icon: Heart,
      featured: true,
      image: serviceImage2,
      href: "https://en.wikipedia.org/wiki/Doppler_ultrasound"
    },
    {
      title: "ECG Testing",
      description: "Computerized electrocardiogram for cardiac function analysis and rhythm assessment.",
      icon: Activity,
      image: serviceImage3,
      href: "https://en.wikipedia.org/wiki/Electrocardiography"
    },
    {
      title: "Ultrasound Scanning",
      description: "Comprehensive ultrasound examinations for abdominal, pelvic, and general diagnostic imaging.",
      icon: Scan,
      image: serviceImage4,
      href: "https://en.wikipedia.org/wiki/Medical_ultrasound"
    },
    {
      title: "TVS Scan",
      description: "Transvaginal sonography for detailed pelvic examination and gynecological assessment.",
      icon: Eye,
      image: serviceImage5,
      href: "https://en.wikipedia.org/wiki/Transvaginal_ultrasound"
    },
    {
      title: "Sono Salpingography",
      description: "Specialized imaging technique to evaluate fallopian tube patency and reproductive health.",
      icon: Activity,
      image: serviceImage6,
      href: "https://en.wikipedia.org/wiki/Sonohysterosalpingography"
    },
    {
      title: "Hystero Salpingography",
      description: "Advanced imaging procedure to assess uterine cavity and fallopian tube structure.",
      icon: UserCheck,
      image: serviceImage7,
      href: "https://en.wikipedia.org/wiki/Hysterosalpingography"
    },
    {
      title: "Level-2 Scan",
      description: "Detailed fetal anomaly screening performed between 18-22 weeks of pregnancy.",
      icon: Baby,
      image: serviceImage8,
      href: "https://en.wikipedia.org/wiki/Fetal_anatomy_ultrasound"
    },
    {
      title: "Ovulation Study",
      description: "Follicular monitoring to track ovulation cycles for fertility assessment and treatment.",
      icon: Activity,
      image: serviceImage9,
      href: "https://en.wikipedia.org/wiki/Ovulation_induction"
    },
    {
      title: "Breast/Testis/Thyroid Scanning",
      description: "Specialized ultrasound examinations for breast, testicular, and thyroid gland assessment.",
      icon: Stethoscope,
      image: serviceImage10,
      href: "https://en.wikipedia.org/wiki/Medical_ultrasonography#Applications"
    },
    
  ];

  const samsungV6Features = [
    {
      icon: Monitor,
      title: "High-Resolution Imaging",
      description: "Crystal-clear 2D, 3D, and 4D imaging with exceptional detail and contrast resolution"
    },
    {
      icon: Heart,
      title: "Advanced Color Doppler",
      description: "Superior blood flow visualization with enhanced sensitivity and accuracy"
    },
    {
      icon: Baby,
      title: "4D Real-Time Imaging",
      description: "Live 3D imaging for fetal development monitoring and detailed anatomical assessment"
    },
    {
      icon: Cpu,
      title: "Advanced Processing",
      description: "Powerful image processing algorithms for enhanced diagnostic accuracy"
    },
    {
      icon: Wifi,
      title: "Digital Connectivity",
      description: "Seamless integration with PACS systems and digital archiving capabilities"
    },
    {
      icon: Shield,
      title: "Patient Safety",
      description: "Low acoustic output with advanced safety features for patient comfort"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Removed top header section per request */}

      {/* Samsung V6 Machine Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-medical-blue to-medical-blue-dark rounded-full mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-medical-blue mb-6">
              Our Flagship Technology
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Samsung V6 Ultrasound System
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the pinnacle of ultrasound technology with our state-of-the-art Samsung V6 system. 
              This advanced diagnostic platform delivers exceptional image quality, enhanced diagnostic capabilities, 
              and superior patient care through cutting-edge innovation.
            </p>
          </div>

          {/* Machine Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Machine Image */}
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-xl w-full max-w-md">
                <div className="relative flex items-center justify-center bg-white h-96 overflow-visible">
                  <img 
                    src={samsungMachineSVG} 
                    alt="Samsung V6 Ultrasound System"
                    className="absolute inset-0 m-auto"
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      transform: 'scale(1.8) translateY(10%)',
                      transformOrigin: 'center center'
                    }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-semibold text-medical-blue">Samsung V6 Ultrasound System</h4>
                  <p className="text-xs text-gray-600 mt-1">Professional diagnostic imaging equipment</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-medical-blue text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Latest Technology
              </div>
            </div>

            {/* Machine Description */}
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-bold text-medical-blue mb-4">
                  Why Samsung V6?
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Samsung V6 represents the latest advancement in ultrasound technology, offering unparalleled 
                  image quality and diagnostic precision. This premium system combines innovative transducer technology, 
                  advanced signal processing, and intuitive user interface to deliver exceptional clinical results.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-medical-blue-light rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-medical-blue">4D</div>
                  <div className="text-sm text-gray-600">Real-time Imaging</div>
                </div>
                <div className="bg-medical-blue-light rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-medical-blue">HD</div>
                  <div className="text-sm text-gray-600">High Definition</div>
                </div>
                <div className="bg-medical-blue-light rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-medical-blue">3D</div>
                  <div className="text-sm text-gray-600">Volume Imaging</div>
                </div>
                <div className="bg-medical-blue-light rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-medical-blue">CD</div>
                  <div className="text-sm text-gray-600">Color Doppler</div>
                </div>
              </div>
            </div>
          </div>

          {/* Machine Gallery */}
          <div className="mb-16 rounded-2xl bg-gradient-to-b from-slate-900 to-black border border-slate-800 p-6 md:p-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Explore Our Samsung V6 System
            </h3>
            <SamsungV6Gallery />
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-medical-blue text-center mb-12">
              Advanced Features & Capabilities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {samsungV6Features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-blue-dark rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-medical-blue mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Applications */}
          <div className="bg-gradient-to-br from-medical-blue-light to-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-medical-blue text-center mb-8">
              Clinical Applications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-medical-blue mb-2">Obstetrics</h4>
                <p className="text-sm text-gray-600">Fetal development monitoring, anomaly screening</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-medical-blue mb-2">Cardiology</h4>
                <p className="text-sm text-gray-600">Echocardiography, vascular studies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-medical-blue mb-2">General</h4>
                <p className="text-sm text-gray-600">Abdominal, pelvic, musculoskeletal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-medical-blue mb-2">Specialized</h4>
                <p className="text-sm text-gray-600">Breast, thyroid, testicular imaging</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-medical-blue text-center mb-8">
              Technical Specifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-medical-blue border-b border-medical-blue-light pb-2">
                  Imaging Capabilities
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    2D, 3D, and 4D real-time imaging
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    High-resolution color Doppler
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    Power Doppler imaging
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    Tissue harmonic imaging
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-medical-blue border-b border-medical-blue-light pb-2">
                  Advanced Features
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    Auto-optimization technology
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    Advanced measurement tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    Multi-frequency transducers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    Real-time image processing
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-medical-blue border-b border-medical-blue-light pb-2">
                  System Features
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    Large HD touchscreen display
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    Wireless connectivity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    Digital archiving system
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-medical-blue mr-2 flex-shrink-0" />
                    Ergonomic design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mb-4">
              Complete Diagnostic Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of diagnostic imaging and testing services for all your healthcare needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-medical-blue-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-medical-blue mb-6">Affordable Pricing</h2>
          <p className="text-lg text-gray-700 mb-8">
            We offer competitive pricing for all our diagnostic services. Contact us for detailed pricing information and package deals.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-medical-blue mb-4">Pricing Available on Inquiry</h3>
            <p className="text-gray-600 mb-6">
              Get personalized quotes for individual tests or comprehensive health packages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="medical" size="lg" asChild>
                <Link to="/contact">
                  <Calendar className="w-5 h-5" />
                  Get Pricing Information
                </Link>
              </Button>
              <Button variant="medical-outline" size="lg" asChild>
                <Link to="/appointments">
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;