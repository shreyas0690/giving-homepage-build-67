
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Users, TrendingUp } from "lucide-react";

const steps = [{
  icon: PlusCircle,
  title: "Create Your Campaign",
  description: "Set up your fundraiser in minutes with our simple form. Add photos, tell your story, and set your goal.",
  feature: "2-minute setup",
  color: "from-rose-500 to-pink-600"
}, {
  icon: Share2,
  title: "Share & Promote",
  description: "Reach your network through social media, email, and direct sharing. Watch donations pour in from supporters.",
  feature: "Social integration",
  color: "from-pink-500 to-rose-600"
}, {
  icon: DollarSign,
  title: "Receive Funds",
  description: "Get instant access to raised funds with secure, direct bank transfers. No waiting, no hassle.",
  feature: "Instant withdrawal",
  color: "from-rose-600 to-pink-500"
}];

const StartFundraiser = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white border border-rose-200 rounded-full shadow-sm mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
            <span className="text-rose-700 font-medium text-xs sm:text-sm">Simple Process</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-gray-900">Start fundraising in</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
              three simple steps
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Join thousands of successful fundraisers who've raised millions for causes they care about
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-rose-50/50"></div>
                  
                  <CardContent className="relative p-6 sm:p-8 text-center flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-rose-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-rose-200 transition-colors duration-300">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-rose-600" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Feature Badge */}
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full text-xs sm:text-sm font-medium shadow-md mx-auto">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      {step.feature}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Fundraiser Today
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StartFundraiser;
