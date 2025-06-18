
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const companyLogos = [{
  name: "Google",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
}, {
  name: "Microsoft",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
}, {
  name: "Apple",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
}, {
  name: "Amazon",
  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
}, {
  name: "Meta",
  logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
}, {
  name: "Netflix",
  logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
}, {
  name: "Tesla",
  logo: "https://logoeps.com/wp-content/uploads/2013/03/tesla-vector-logo.png"
}, {
  name: "IBM",
  logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
}, {
  name: "Oracle",
  logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
}, {
  name: "Samsung",
  logo: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png"
}, {
  name: "Intel",
  logo: "https://logos-world.net/wp-content/uploads/2020/03/Intel-Logo.png"
}, {
  name: "Adobe",
  logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg"
}, {
  name: "Spotify",
  logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
}, {
  name: "Uber",
  logo: "https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"
}, {
  name: "Airbnb",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
}, {
  name: "Twitter",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
}, {
  name: "LinkedIn",
  logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
}, {
  name: "Dropbox",
  logo: "https://logos-world.net/wp-content/uploads/2020/03/Dropbox-Logo.png"
}, {
  name: "Slack",
  logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
}, {
  name: "Zoom",
  logo: "https://logos-world.net/wp-content/uploads/2020/12/Zoom-Logo.png"
}];

const FeaturedIn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(8);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2); // Mobile: 2 logos
      } else if (window.innerWidth < 768) {
        setItemsPerView(3); // Small tablet: 3 logos
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4); // Tablet: 4 logos
      } else if (window.innerWidth < 1280) {
        setItemsPerView(6); // Desktop: 6 logos
      } else {
        setItemsPerView(8); // Large desktop: 8 logos
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, companyLogos.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const visibleLogos = companyLogos.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Trusted by Leading Companies
          </h2>
          <p className="text-sm sm:text-base text-gray-600">Join thousands of companies who trust our platform</p>
        </div>

        {/* Logo Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide} 
            disabled={currentIndex === 0} 
            className="absolute left-0 sm:left-2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 hover:border-rose-300 group"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gray-600 group-hover:text-rose-500 transition-colors" />
          </button>

          {/* Logos Container */}
          <div className="overflow-hidden max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 py-4">
              {visibleLogos.map((company, index) => (
                <div 
                  key={currentIndex + index} 
                  className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 flex items-center justify-center">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="w-full h-full object-contain transition-all duration-300" 
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }} 
                    />
                    <div className="w-full h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg hidden items-center justify-center">
                      <span className="text-white font-bold text-lg sm:text-xl">
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
            className="absolute right-0 sm:right-2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 hover:border-rose-300 group"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-gray-600 group-hover:text-rose-500 transition-colors" />
          </button>
        </div>

        {/* Pagination dots for mobile */}
        <div className="flex justify-center mt-4 sm:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(companyLogos.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-rose-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
