
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f472b6%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&h=600" 
                alt="Community helping each other"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Floating stats */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-scale-in animation-delay-300">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="text-lg font-bold text-gray-900">₹2.5Cr+</div>
                    <div className="text-xs text-gray-600">Raised Today</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Bottom Card */}
            <div className="absolute -bottom-8 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white/20 animate-slide-up animation-delay-500">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">शुरू करें मासिक योगदान जीवन बचाने के लिए</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    आपके सहयोग से अनगिनत बच्चों को स्वास्थ्य सेवा और खुशहाल जीवन मिलेगा। आज ही अपना मासिक योगदान शुरू करें।
                  </p>
                  <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    अभी योगदान करें
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-fade-in animation-delay-200">
            <div className="space-y-6">
              {/* Trust indicators */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">100% Secure</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">2M+ Trust Us</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Need Funds to Pay For a{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Medical Emergency
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 rounded-full transform scale-x-0 animate-expand-width animation-delay-1000"></div>
                </span>
                {" "}or Social Cause?
              </h1>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">0%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Platform Fee*</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold text-cyan-500 mb-2 group-hover:scale-110 transition-transform duration-300">72L+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Contributors</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold text-cyan-500 mb-2 group-hover:scale-110 transition-transform duration-300">3.2L+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Fundraisers</div>
              </div>
            </div>

            {/* Enhanced Key Message */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-rose-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/90">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Play className="h-6 w-6 text-white ml-1" />
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-2">
                    FundHope's <span className="text-rose-600 font-bold text-xl">0% Platform fees*</span> ensures maximum funds for you
                  </p>
                  <p className="text-sm text-gray-600">*For personal medical emergencies and social causes</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start a Fundraiser for FREE
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    नि: शुल्क फंडरेजर शुरू करें <ArrowRight className="inline h-4 w-4 ml-1" />
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
