
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Text Section */}
          <div className="space-y-8">
            {/* Trust badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Trusted by 2M+</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Need Funds to Pay For a 
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Medical Emergency </span>
                or Social Cause?
              </h1>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-2">0%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Platform Fee*</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-500 mb-2">72 Lakh+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-500 mb-2">3.2 Lakh+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Fundraisers</div>
              </div>
            </div>

            {/* CTA section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-rose-100 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Play className="h-6 w-6 text-white ml-1" />
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-1">
                    FundHope's <span className="text-rose-600 font-bold">0% Platform fees*</span> ensures maximum funds for you
                  </p>
                  <p className="text-sm text-gray-500">*For personal medical emergencies and social causes</p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 text-lg w-full sm:w-auto mb-4"
              >
                Start a Fundraiser for FREE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-gray-500">
                नि: शुल्क फंडरेजर शुरू करें <ArrowRight className="inline h-4 w-4 ml-1" />
              </p>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&h=600" 
                alt="Community helping each other"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Bottom overlay card */}
            <div className="absolute -bottom-6 left-4 right-4 bg-white rounded-lg shadow-xl p-6 border">
              <h3 className="text-lg font-bold text-gray-800 mb-2">शुरू करें मासिक योगदान जीवन बचाने के लिए</h3>
              <p className="text-sm text-gray-600 mb-4">
                आपके सहयोग से अनगिनत बच्चों को स्वास्थ्य सेवा और खुशहाल जीवन मिलेगा। आज ही अपना मासिक योगदान शुरू करें।
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                अभी योगदान करें
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
