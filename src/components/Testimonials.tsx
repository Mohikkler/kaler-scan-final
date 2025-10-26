import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Expecting Mother",
      rating: 5,
      content: "The 3D/4D ultrasound experience at Kaler Scan Centre was absolutely amazing! The staff was so caring and professional. Seeing our baby's face in such detail was an unforgettable moment. Highly recommend!",
      avatar: "PS",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Patient",
      rating: 5,
      content: "Excellent service and very professional staff. The Color Doppler test was painless and the results were explained clearly. The facility is clean and modern. Thank you for the great care!",
      avatar: "RK",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Patient",
      rating: 5,
      content: "I was nervous about my ultrasound, but the team at Kaler Scan Centre made me feel so comfortable. The Samsung V6 technology provided crystal clear images. Dr. Kaler explained everything thoroughly.",
      avatar: "AP",
      date: "3 weeks ago"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from patients who trust us with their diagnostic care
          </p>
          <div className="w-24 h-1 bg-medical-blue mx-auto mt-4"></div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="text-2xl font-bold text-medical-blue mb-2">4.9/5</div>
          <div className="text-gray-600">Based on 500+ patient reviews</div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <CardContent className="p-4 md:p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-medical-blue/20" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.content}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 bg-medical-blue-light">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-medical-blue font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-medical-blue">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600 mb-4">
            Join thousands of satisfied patients who trust Kaler Scan Centre
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-medical-blue font-semibold">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>500+ Happy Patients</span>
            </div>
            <div className="flex items-center gap-2 text-medical-blue font-semibold">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>98% Satisfaction Rate</span>
            </div>
            <div className="flex items-center gap-2 text-medical-blue font-semibold">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>25+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 