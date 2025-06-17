
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Users, DollarSign, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Turn Your 
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Dreams </span>
                Into Reality
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join millions of people who have raised funds for causes they care about. 
                Start your fundraising journey today and make a difference in the world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 text-lg"
              >
                Start Fundraising
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-rose-500 text-rose-500 hover:bg-rose-50 px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-rose-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">2M+</div>
                <div className="text-sm text-gray-600">Happy Donors</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-8 w-8 text-rose-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">$50M+</div>
                <div className="text-sm text-gray-600">Funds Raised</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-rose-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=600" 
                alt="Person using laptop for fundraising"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria's Education</div>
                  <div className="text-sm text-gray-600">95% funded</div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                    <div className="w-23 h-2 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full"></div>
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
