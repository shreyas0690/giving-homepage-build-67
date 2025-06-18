
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Clock, Users, Smartphone, CheckCircle, Heart, Shield, Zap, Star, Sparkles } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: PlusCircle,
    title: "Start your fundraiser",
    description: "It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.",
    highlight: "Only 2 minutes",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-500",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300"
  },
  {
    number: 2,
    icon: Share2,
    title: "Share your fundraiser",
    description: "All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.",
    subtext: "Share your fundraiser directly from dashboard on social media.",
    highlight: "Easy sharing",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&h=300"
  },
  {
    number: 3,
    icon: DollarSign,
    title: "Withdraw Funds",
    description: "The funds raised can be withdrawn without any hassle directly to your bank account.",
    subtext: "It takes only 5 minutes to withdraw funds on FundHope.",
    highlight: "5 minutes withdrawal",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&h=300"
  }
];

const StartFundraiser = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-rose-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full text-rose-600 font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Simple & Fast Process
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Start a Fundraiser in
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"> three simple steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful fundraisers and make a difference in just minutes
          </p>
        </div>

        {/* Modern Steps Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="group relative">
                {/* Connector Line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-10 transform translate-x-4"></div>
                )}
                
                {/* Step Card */}
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:scale-105 overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${step.gradientFrom} ${step.gradientTo} opacity-80`}></div>
                    
                    {/* Step Number - Floating */}
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                        <span className={`text-2xl font-bold bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} bg-clip-text text-transparent`}>
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Icon - Floating */}
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} bg-clip-text text-transparent`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                      {step.description}
                    </p>
                    
                    {step.subtext && (
                      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                        {step.subtext}
                      </p>
                    )}
                    
                    {/* Highlight Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} text-white rounded-full text-sm font-semibold shadow-lg`}>
                      <CheckCircle className="h-4 w-4" />
                      {step.highlight}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Join 3.2 Lakh+ successful fundraisers who have raised millions for their causes
              </p>
              
              <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                Start Your Fundraiser Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-gray-500 mt-4 text-sm">
                ✨ No hidden fees • 100% secure • 24/7 support
              </p>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-8">Why Choose FundHope?</h4>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-bold text-gray-900 mb-2">0% Platform Fee</h5>
                <p className="text-gray-600 text-sm">Keep 100% of your donations</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-bold text-gray-900 mb-2">100% Secure</h5>
                <p className="text-gray-600 text-sm">Bank-level security</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-bold text-gray-900 mb-2">Quick Setup</h5>
                <p className="text-gray-600 text-sm">Get started in 2 minutes</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-bold text-gray-900 mb-2">24/7 Support</h5>
                <p className="text-gray-600 text-sm">We're here to help</p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-6 text-white">
              <h5 className="font-bold mb-4 text-lg">Trusted by millions</h5>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">72L+</div>
                  <div className="text-rose-100 text-xs">Contributors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">3.2L+</div>
                  <div className="text-rose-100 text-xs">Fundraisers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">₹500Cr+</div>
                  <div className="text-rose-100 text-xs">Raised</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartFundraiser;
