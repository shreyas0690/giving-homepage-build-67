
import { Card } from "@/components/ui/card";

const mediaLogos = [
  {
    name: "TechCrunch",
    logo: "TC",
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Forbes",
    logo: "FORBES",
    color: "from-blue-600 to-blue-700"
  },
  {
    name: "CNN",
    logo: "CNN",
    color: "from-red-500 to-red-600"
  },
  {
    name: "The Guardian",
    logo: "GUARDIAN",
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "BBC",
    logo: "BBC",
    color: "from-gray-800 to-gray-900"
  },
  {
    name: "Reuters",
    logo: "REUTERS",
    color: "from-orange-500 to-red-500"
  }
];

const testimonials = [
  {
    quote: "FundHope has revolutionized the way people approach charitable giving and fundraising.",
    source: "TechCrunch",
    author: "Sarah Johnson, Tech Reporter"
  },
  {
    quote: "One of the most trusted platforms for crowdfunding with transparent operations.",
    source: "Forbes",
    author: "Michael Chen, Business Analyst"
  },
  {
    quote: "A game-changer in the nonprofit and fundraising space with impressive success rates.",
    source: "The Guardian",
    author: "Emma Davis, Social Impact Editor"
  }
];

const FeaturedIn = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured In Leading Media
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by millions and recognized by top media outlets worldwide 
            for our impact in the fundraising space.
          </p>
        </div>

        {/* Media Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {mediaLogos.map((media, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 group cursor-pointer"
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-lg bg-gradient-to-r ${media.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-xs">
                    {media.logo.length > 6 ? media.logo.substring(0, 6) : media.logo}
                  </span>
                </div>
                <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                  {media.name}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white/90 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="text-4xl text-rose-500 font-serif">"</div>
                <p className="text-gray-700 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-l-4 border-rose-500 pl-4">
                  <div className="font-semibold text-gray-900">{testimonial.source}</div>
                  <div className="text-sm text-gray-600">{testimonial.author}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Award-Winning Platform
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🏆</span>
                </div>
                <div className="font-semibold text-gray-900">Best Crowdfunding Platform</div>
                <div className="text-sm text-gray-600">TechAwards 2023</div>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">⭐</span>
                </div>
                <div className="font-semibold text-gray-900">Innovation in Social Impact</div>
                <div className="text-sm text-gray-600">Social Good Awards</div>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🎖️</span>
                </div>
                <div className="font-semibold text-gray-900">Top Rated Platform</div>
                <div className="text-sm text-gray-600">4.8/5 User Rating</div>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🚀</span>
                </div>
                <div className="font-semibold text-gray-900">Fastest Growing</div>
                <div className="text-sm text-gray-600">Startup Awards 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
