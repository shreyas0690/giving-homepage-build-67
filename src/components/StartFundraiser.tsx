import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Users, TrendingUp } from "lucide-react";
import FundraiserCreationModal from "@/components/FundraiserCreationModal";
import StartFundraiserModal from "@/components/StartFundraiserModal";
import { useAuth } from "@/contexts/AuthContext";

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
  const [isFundraiserCreationModalOpen, setIsFundraiserCreationModalOpen] = useState(false);
  const [isStartFundraiserModalOpen, setIsStartFundraiserModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleStartFundraiser = () => {
    if (isAuthenticated) {
      setIsFundraiserCreationModalOpen(true);
    } else {
      setIsStartFundraiserModalOpen(true);
    }
  };

  return (
    <>
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 opacity-50"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-600">Join 50,000+ fundraisers</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      ))}
                      <span className="text-sm text-gray-600 ml-1">4.9/5 rating</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to make a difference?
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Start your fundraiser today and turn your cause into a movement. It takes less than 5 minutes to get started.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-lg h-14"
                    onClick={handleStartFundraiser}
                  >
                    <PlusCircle className="h-5 w-5 mr-2" />
                    Start Your Fundraiser
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">₹2.5 Cr+ raised this month</span>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    No platform fees
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Instant withdrawals
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    24/7 support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraiser Creation Modal - for authenticated users */}
      <FundraiserCreationModal 
        open={isFundraiserCreationModalOpen} 
        onOpenChange={setIsFundraiserCreationModalOpen} 
      />

      {/* Start Fundraiser Modal - for non-authenticated users */}
      <StartFundraiserModal 
        open={isStartFundraiserModalOpen} 
        onOpenChange={setIsStartFundraiserModalOpen} 
      />
    </>
  );
};

export default StartFundraiser;
