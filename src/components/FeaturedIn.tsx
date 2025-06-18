
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const companyLogos = [
  {
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  {
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  },
  {
    name: "Amazon",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "Meta",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
  },
  {
    name: "Netflix",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
  },
  {
    name: "Tesla",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/tesla-vector-logo.png",
  }
];

const FeaturedIn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 7;
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

        {/* Logo Container */}
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
          <div className="overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-8 py-4">
              {companyLogos.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-white rounded-lg shadow-md border border-gray-100 p-4">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          e.currentTarget.style.display = 'none';
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg hidden items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                  </div>
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
