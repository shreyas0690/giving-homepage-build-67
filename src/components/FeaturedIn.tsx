
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
  const itemsPerView = 8;
  const maxIndex = Math.max(0, companyLogos.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const visibleLogos = companyLogos.slice(currentIndex, currentIndex + itemsPerView);

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
            className="absolute left-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 hover:border-rose-300 group"
          >
            <ChevronLeft className="h-8 w-8 text-gray-600 group-hover:text-rose-500 transition-colors" />
          </button>

          {/* Logos Container */}
          <div className="overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-8 py-4">
              {visibleLogos.map((company, index) => (
                <div 
                  key={currentIndex + index} 
                  className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-20 h-20 flex items-center justify-center">
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
            className="absolute right-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 hover:border-rose-300 group"
          >
            <ChevronRight className="h-8 w-8 text-gray-600 group-hover:text-rose-500 transition-colors" />
          </button>
        </div>

        {/* Additional Stats Section */}
        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
