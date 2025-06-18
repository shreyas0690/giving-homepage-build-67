
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&h=200",
    title: "Industry's best fundraising success rate",
    description: "Proven track record with highest success rates in the industry"
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&h=200",
    title: "Supported By 55,00,000+ Contributors",
    description: "Join millions of supporters who trust our platform"
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=200",
    title: "Easy-To-Manage Tools To Boost Results",
    description: "Simple yet powerful tools to maximize your campaign success"
  },
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=200&h=200",
    title: "Receive contributions via all popular payment modes",
    description: "Accept donations through multiple secure payment options"
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=200",
    title: "Get Expert Support 24/7",
    description: "Round-the-clock assistance from our dedicated support team"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&h=200",
    title: "A Dedicated Smart-Dashboard",
    description: "Comprehensive analytics and management in one place"
  },
  {
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=200&h=200",
    title: "Withdraw Funds Without Hassle",
    description: "Quick and easy fund withdrawal process"
  },
  {
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=200&h=200",
    title: "International Payment Support",
    description: "Accept donations from supporters worldwide"
  }
];

const WhySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            Why Choose FundHope?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            return (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                {/* Image Circle with gradient overlay */}
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-rose-400 flex items-center justify-center mb-4 overflow-hidden relative bg-gradient-to-br from-rose-100 to-pink-100">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent"></div>
                </div>
                
                {/* Yellow underline */}
                <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-700 mb-3 leading-tight group-hover:text-rose-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
