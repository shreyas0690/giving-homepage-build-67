
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image Section */}
          <div className="relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/5e700af3-0b9b-4680-827f-91471a218a64.png"
                alt="Child needing medical help"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            {/* Bottom overlay card */}
            <div className="absolute -bottom-6 left-4 right-4 bg-white rounded-lg shadow-xl p-6 border">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Start Monthly Contribution to Save Lives</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    With your support, countless children will receive health care and a happy life. Start your monthly contribution today.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Contribute Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100" 
                    alt="Child"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text Section */}
          <div className="space-y-8">
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Need Funds to Pay For a 
                <span className="text-gray-700"> Medical Emergency </span>
                or Social Cause?
              </h1>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-left">
                <div className="text-4xl font-bold text-cyan-500 mb-2">0%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Platform Fee*</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-cyan-500 mb-2">72 Lakh+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Contributors</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-cyan-500 mb-2">3.2 Lakh+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Fundraisers</div>
              </div>
            </div>

            {/* Key message and CTA */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Ketto's <span className="text-cyan-500 font-bold text-xl">0% Platform fees*</span> ensures maximum funds for you
              </p>
              
              <Button 
                size="lg" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg"
              >
                Start a Fundraiser for FREE
              </Button>
              
              <p className="text-sm text-gray-600 flex items-center">
                नि: शुल्क फंडरेजर शुरू करें <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
