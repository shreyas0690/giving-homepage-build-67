
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Hero Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Surgeons performing surgery in hospital"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Patient Image - Floating */}
            <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&h=300&q=80" 
                alt="Patient receiving care"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Patient Card - Bottom Left */}
            <div className="absolute -bottom-2 -left-4 bg-white rounded-lg shadow-lg p-3 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&h=150&q=80" 
                    alt="Recovered patient"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">Rahul Kumar</p>
                  <p className="text-xs text-green-600">✓ Fully Recovered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Need Funds to Pay For a 
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Medical Emergency </span>
                or Social Cause?
              </h1>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-2">0%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-bold">Platform Fee*</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-2">72 Lakh+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-bold">Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-2">3.2 Lakh+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-bold">Fundraisers</div>
              </div>
            </div>

            {/* Key Message */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-rose-100">
              <p className="text-lg text-gray-700 mb-4">
                FundHope's <span className="text-rose-600 font-bold">0% Platform fees*</span> ensures maximum funds for you
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 text-lg w-full sm:w-auto"
              >
                Start a Fundraiser for FREE
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                नि: शुल्क फंडरेजर शुरू करें <ArrowRight className="inline h-4 w-4 ml-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
