
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Clock, Users, Smartphone, CheckCircle, Heart, Shield, Zap, Star, TrendingUp, Award, Target, Sparkles } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: PlusCircle,
    title: "Start your fundraiser",
    description: "It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.",
    highlight: "Only 2 minutes",
    features: ["Quick Setup", "Easy Form", "Instant Approval"],
    bgGradient: "from-rose-500/10 via-pink-500/5 to-rose-400/10"
  },
  {
    number: 2,
    icon: Share2,
    title: "Share your fundraiser",
    description: "All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.",
    subtext: "Share your fundraiser directly from dashboard on social media.",
    highlight: "Easy sharing",
    features: ["Social Media", "WhatsApp", "Direct Links"],
    bgGradient: "from-pink-500/10 via-rose-500/5 to-pink-400/10"
  },
  {
    number: 3,
    icon: DollarSign,
    title: "Withdraw Funds",
    description: "The funds raised can be withdrawn without any hassle directly to your bank account.",
    subtext: "It takes only 5 minutes to withdraw funds on FundHope.",
    highlight: "5 minutes withdrawal",
    features: ["Direct Bank Transfer", "No Hidden Fees", "Instant Process"],
    bgGradient: "from-rose-400/10 via-pink-400/5 to-rose-500/10"
  }
];

const StartFundraiser = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-rose-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-rose-300/20 to-pink-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-16 left-16 h-6 w-6 text-rose-300/40 animate-bounce" style={{ animationDelay: '0s' }} />
        <Star className="absolute top-24 right-24 h-5 w-5 text-pink-300/40 animate-bounce" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-32 left-32 h-6 w-6 text-rose-400/40 animate-bounce" style={{ animationDelay: '2s' }} />
        <TrendingUp className="absolute top-1/3 right-16 h-5 w-5 text-pink-400/40 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Target className="absolute bottom-20 right-40 h-6 w-6 text-rose-300/40 animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm border border-rose-200/50">
            <Zap className="h-5 w-5 animate-pulse" />
            Simple & Fast Process
            <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Start a Fundraiser in{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                three simple steps
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-pink-100 transform rotate-1 scale-110 rounded-lg opacity-60"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
            Join thousands of successful fundraisers and make a difference in just minutes with our streamlined, secure process
          </p>

          {/* Animated Progress Dots */}
          <div className="flex justify-center items-center gap-4 mb-8">
            {[1, 2, 3].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="relative">
                  <div 
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg animate-pulse"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  ></div>
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 animate-ping opacity-30"></div>
                </div>
                {step < 3 && (
                  <div className="w-12 h-0.5 bg-gradient-to-r from-rose-300 to-pink-300 mx-3 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 animate-pulse"
                      style={{ animationDelay: `${index * 0.5 + 0.25}s` }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative group">
                {/* Connection Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-12 h-0.5 bg-gradient-to-r from-rose-200 to-pink-200 z-10 transform translate-x-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  </div>
                )}
                
                {/* Enhanced Step Card */}
                <Card className={`relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 transform bg-gradient-to-br ${step.bgGradient} backdrop-blur-sm`}>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/20 to-transparent rounded-tr-full"></div>
                  
                  <CardContent className="p-10 text-center relative">
                    {/* Step Number with Enhanced Design */}
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-rose-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl relative overflow-hidden group-hover:shadow-3xl transition-all duration-500 group-hover:rotate-6 transform">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="text-3xl font-bold text-white relative z-10">{step.number}</span>
                        
                        {/* Animated Rings */}
                        <div className="absolute inset-2 border-2 border-white/30 rounded-2xl animate-pulse"></div>
                        <div className="absolute -inset-1 border border-white/20 rounded-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg animate-bounce">
                        {step.number}
                      </div>
                    </div>

                    {/* Enhanced Icon */}
                    <div className="relative mb-8">
                      <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12 transform border border-rose-100">
                        <Icon className="h-10 w-10 text-rose-600 group-hover:scale-125 transition-transform duration-500" />
                      </div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-rose-700 transition-colors duration-500">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {step.description}
                    </p>
                    
                    {step.subtext && (
                      <p className="text-gray-600 text-base mb-8 italic font-medium">
                        {step.subtext}
                      </p>
                    )}

                    {/* Feature Pills */}
                    <div className="mb-8">
                      <div className="flex flex-wrap justify-center gap-3">
                        {step.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex} 
                            className="px-4 py-2 bg-white/90 backdrop-blur-sm text-rose-600 rounded-full text-sm font-semibold shadow-md border border-rose-100 hover:shadow-lg transition-shadow duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced Highlight Badge */}
                    <div className="relative">
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-base font-bold shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:from-rose-600 hover:to-pink-600">
                        <CheckCircle className="h-5 w-5 animate-pulse" />
                        {step.highlight}
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-b-lg">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-1000 ease-out rounded-b-lg"
                        style={{ width: `${(index + 1) * 33.33}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call-to-Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:from-rose-700 hover:to-pink-700 transform hover:scale-105 cursor-pointer">
            <PlusCircle className="h-6 w-6" />
            Start Your Fundraiser Now
            <ArrowRight className="h-6 w-6 animate-pulse" />
          </div>
          <p className="text-gray-600 mt-6 text-lg">
            Join <span className="font-bold text-rose-600">50,000+</span> successful fundraisers
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartFundraiser;
