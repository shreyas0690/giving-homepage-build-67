
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Clock, Users, Smartphone, CheckCircle, Heart, Shield, Zap, Star } from "lucide-react";

const steps = [{
  number: 1,
  icon: PlusCircle,
  title: "Start your fundraiser",
  description: "It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.",
  highlight: "Only 2 minutes",
  color: "text-rose-500",
  bgColor: "bg-rose-50",
  borderColor: "border-rose-200"
}, {
  number: 2,
  icon: Share2,
  title: "Share your fundraiser",
  description: "All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.",
  subtext: "Share your fundraiser directly from dashboard on social media.",
  highlight: "Easy sharing",
  color: "text-rose-500",
  bgColor: "bg-rose-50",
  borderColor: "border-rose-200"
}, {
  number: 3,
  icon: DollarSign,
  title: "Withdraw Funds",
  description: "The funds raised can be withdrawn without any hassle directly to your bank account.",
  subtext: "It takes only 5 minutes to withdraw funds on FundHope.",
  highlight: "5 minutes withdrawal",
  color: "text-rose-500",
  bgColor: "bg-rose-50",
  borderColor: "border-rose-200"
}];

const StartFundraiser = () => {
  return <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start a Fundraiser in three simple steps
          </h2>
        </div>

        {/* Steps Layout - Left side steps, Right side content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Enhanced Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
            const Icon = step.icon;
            return <div key={step.number} className="group">
                  {/* Step Card */}
                  <div className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${step.borderColor} hover:scale-105`}>
                    {/* Connector Line */}
                    {index < steps.length - 1 && <div className="absolute left-12 top-full w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-200 z-10"></div>}
                    
                    <div className="flex gap-4">
                      {/* Step Number with Enhanced Design */}
                      <div className="flex flex-col items-center">
                        <div className={`relative w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <span className={`text-2xl font-bold ${step.color}`}>
                            {step.number}
                          </span>
                          {/* Subtle glow effect */}
                          <div className={`absolute inset-0 ${step.bgColor} rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-300`}></div>
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 ${step.bgColor} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                            <Icon className={`h-5 w-5 ${step.color}`} />
                          </div>
                          <h3 className={`text-xl font-bold ${step.color} group-hover:text-opacity-80 transition-colors duration-300`}>
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-700 mb-3 leading-relaxed font-medium">
                          {step.description}
                        </p>
                        
                        {step.subtext && <p className="text-sm text-gray-500 leading-relaxed mb-3">
                            {step.subtext}
                          </p>}
                        
                        {/* Highlight Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 ${step.bgColor} ${step.color} rounded-full text-sm font-semibold border ${step.borderColor}`}>
                          <CheckCircle className="h-4 w-4" />
                          {step.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>;
          })}
          </div>

          {/* Right Side - Enhanced Content */}
          <div className="lg:pl-8 space-y-8">
            {/* Main Feature Card with Gradient Background */}
            <div className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">
                    Join 3.2 Lakh+ Fundraisers
                  </h3>
                  <p className="text-pink-100 text-lg leading-relaxed">
                    Start your fundraiser and reach thousands of supporters ready to help your cause make a real difference.
                  </p>
                </div>
                
                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-1">0%</div>
                    <div className="text-xs text-pink-100 font-semibold uppercase tracking-wide">Platform Fee</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs text-pink-100 font-semibold uppercase tracking-wide">Support</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-1">2 min</div>
                    <div className="text-xs text-pink-100 font-semibold uppercase tracking-wide">Setup</div>
                  </div>
                </div>

                <Button className="w-full bg-white text-rose-600 hover:bg-gray-50 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Start Your Fundraiser Now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="flex justify-center items-center gap-2 mb-4">
                  <Shield className="h-6 w-6 text-green-500" />
                  <h4 className="text-xl font-bold text-gray-900">Trusted & Secure Platform</h4>
                </div>
                <p className="text-gray-600">Your fundraiser is protected with bank-level security</p>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl border border-green-100">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-semibold text-sm">SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 font-semibold text-sm">Bank Grade Security</span>
                </div>
              </div>
              
              {/* Success Rate */}
              <div className="text-center p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
                <div className="flex justify-center items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                </div>
                <div className="text-2xl font-bold text-emerald-700 mb-1">95% Success Rate</div>
                <div className="text-sm text-emerald-600">Average fundraiser reaches 85% of goal</div>
              </div>
            </div>

            {/* Enhanced Benefits List */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Why Choose FundHope?</h4>
              
              <div className="grid gap-4">
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Free to start</div>
                    <div className="text-sm text-gray-500">No upfront costs or hidden fees</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Secure & trusted platform</div>
                    <div className="text-sm text-gray-500">Bank-level encryption & security</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Share2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Share across all social platforms</div>
                    <div className="text-sm text-gray-500">One-click sharing to maximize reach</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Quick fund withdrawal</div>
                    <div className="text-sm text-gray-500">Get your funds in 5 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Make a Difference?</h3>
            <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful fundraisers who have raised millions for causes that matter.
            </p>
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};

export default StartFundraiser;
