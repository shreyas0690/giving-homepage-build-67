import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Clock, Users, Smartphone, CheckCircle, Heart, Shield, Zap, Star, TrendingUp, Award, Target } from "lucide-react";
const steps = [{
  number: 1,
  icon: PlusCircle,
  title: "Start your fundraiser",
  description: "It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.",
  highlight: "Only 2 minutes",
  features: ["Quick Setup", "Easy Form", "Instant Approval"],
  bgPattern: "bg-gradient-to-br from-rose-50 to-pink-50"
}, {
  number: 2,
  icon: Share2,
  title: "Share your fundraiser",
  description: "All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.",
  subtext: "Share your fundraiser directly from dashboard on social media.",
  highlight: "Easy sharing",
  features: ["Social Media", "WhatsApp", "Direct Links"],
  bgPattern: "bg-gradient-to-br from-rose-50 to-purple-50"
}, {
  number: 3,
  icon: DollarSign,
  title: "Withdraw Funds",
  description: "The funds raised can be withdrawn without any hassle directly to your bank account.",
  subtext: "It takes only 5 minutes to withdraw funds on FundHope.",
  highlight: "5 minutes withdrawal",
  features: ["Direct Bank Transfer", "No Hidden Fees", "Instant Process"],
  bgPattern: "bg-gradient-to-br from-pink-50 to-rose-50"
}];
const floatingElements = [{
  icon: Heart,
  position: "top-10 left-10",
  delay: "0s",
  color: "text-rose-400"
}, {
  icon: Star,
  position: "top-20 right-20",
  delay: "1s",
  color: "text-pink-400"
}, {
  icon: TrendingUp,
  position: "bottom-20 left-20",
  delay: "2s",
  color: "text-rose-300"
}, {
  icon: Award,
  position: "top-1/2 right-10",
  delay: "0.5s",
  color: "text-pink-300"
}, {
  icon: Target,
  position: "bottom-10 right-32",
  delay: "1.5s",
  color: "text-rose-400"
}];
const StartFundraiser = () => {
  return <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return <div key={index} className={`absolute ${element.position} opacity-20 animate-pulse`} style={{
          animationDelay: element.delay,
          animationDuration: "3s"
        }}>
              <Icon className={`h-8 w-8 ${element.color}`} />
            </div>;
      })}
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full opacity-20 blur-3xl animate-pulse" style={{
        animationDelay: "1s"
      }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Zap className="h-4 w-4" />
            Simple & Fast Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Start a Fundraiser in
            <span className="text-rose-600 relative">
              <span className="relative z-10"> three simple steps</span>
              <div className="absolute inset-0 bg-rose-100 transform -skew-x-12 scale-110 opacity-30"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful fundraisers and make a difference in just minutes with our streamlined process
          </p>
          
          {/* Progress indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              {[1, 2, 3].map(step => <div key={step} className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-rose-600 animate-pulse" style={{
                animationDelay: `${step * 0.3}s`
              }}></div>
                  {step < 3 && <div className="w-8 h-0.5 bg-rose-200 mx-2"></div>}
                </div>)}
            </div>
          </div>
        </div>

        {/* Enhanced Steps with Advanced Design */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
          const Icon = step.icon;
          return <div key={step.number} className="relative group">
                {/* Enhanced Connector Line with Animation */}
                {index < steps.length - 1 && <div className="hidden md:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-rose-300 to-pink-300 z-10 transform translate-x-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>}
                
                {/* Advanced Step Card */}
                <div className={`${step.bgPattern} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 text-center relative overflow-hidden group-hover:scale-105 transform`}>
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-tr-full"></div>
                  
                  {/* Animated Step Number */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg relative overflow-hidden group-hover:shadow-xl transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-2xl font-bold text-white relative z-10">{step.number}</span>
                      
                      {/* Animated Ring */}
                      <div className="absolute inset-0 border-2 border-white opacity-30 rounded-2xl animate-pulse"></div>
                    </div>
                    
                    {/* Floating Step Indicator */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
                      {step.number}
                    </div>
                  </div>

                  {/* Enhanced Icon with Animation */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12 transform">
                      <Icon className="h-8 w-8 text-rose-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-rose-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-base">
                    {step.description}
                  </p>
                  
                  {step.subtext && <p className="text-gray-500 text-sm mb-6 italic">
                      {step.subtext}
                    </p>}

                  {/* Feature List */}
                  <div className="mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {step.features.map((feature, featureIndex) => <span key={featureIndex} className="px-3 py-1 bg-white text-rose-600 rounded-full text-xs font-medium shadow-sm">
                          {feature}
                        </span>)}
                    </div>
                  </div>
                  
                  {/* Enhanced Highlight Badge */}
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-sm font-bold shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <CheckCircle className="h-4 w-4 animate-pulse" />
                      {step.highlight}
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-200 to-pink-200">
                    <div className="h-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-1000 ease-out" style={{
                  width: `${(index + 1) * 33.33}%`
                }}></div>
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* Enhanced CTA Section */}
        
      </div>
    </section>;
};
export default StartFundraiser;