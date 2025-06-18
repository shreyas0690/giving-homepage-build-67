
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const companyLogos = [
  {
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    bgColor: "bg-white"
  },
  {
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    bgColor: "bg-white"
  },
  {
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    bgColor: "bg-white"
  },
  {
    name: "Amazon",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    bgColor: "bg-white"
  },
  {
    name: "Meta",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    bgColor: "bg-white"
  },
  {
    name: "Netflix",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
    bgColor: "bg-white"
  },
  {
    name: "Tesla",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/tesla-vector-logo.png",
    bgColor: "bg-white"
  },
  {
    name: "Spotify",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg",
    bgColor: "bg-white"
  },
  {
    name: "Uber",
    logo: "https://logoeps.com/wp-content/uploads/2014/05/uber-vector-logo.png",
    bgColor: "bg-white"
  },
  {
    name: "Airbnb",
    logo: "https://logoeps.com/wp-content/uploads/2014/09/airbnb-vector-logo.png",
    bgColor: "bg-white"
  }
];

const FeaturedIn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;
  const maxIndex = Math.max(0, companyLogos.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600">Join thousands of companies who trust our platform</p>
        </div>

        {/* Logo Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 hover:border-rose-300 group"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-rose-500 transition-colors" />
          </button>

          {/* Logos Container */}
          <div className="overflow-hidden max-w-4xl mx-auto">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(companyLogos.length / itemsPerView) * 100}%`
              }}
            >
              {companyLogos.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: `${100 / companyLogos.length}%` }}
                >
                  <Card className="bg-white hover:shadow-lg transition-all duration-300 border-0 p-6 group cursor-pointer">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md border border-gray-100">
                        <img 
                          src={company.logo} 
                          alt={`${company.name} logo`}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg hidden items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {company.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                        {company.name}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 hover:border-rose-300 group"
          >
            <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-rose-500 transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-rose-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-rose-500">500+</div>
                <div className="text-gray-600">Companies Trust Us</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-rose-500">$50M+</div>
                <div className="text-gray-600">Funds Raised</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-rose-500">1M+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
