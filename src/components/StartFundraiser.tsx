
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Clock, Users, Smartphone, CheckCircle, Shield, Zap, Heart } from "lucide-react";

const steps = [{
  number: 1,
  icon: PlusCircle,
  title: "Start your fundraiser",
  description: "It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.",
  highlight: "Only 2 minutes",
  color: "text-emerald-600",
  bgColor: "bg-emerald-50",
  borderColor: "border-emerald-200"
}, {
  number: 2,
  icon: Share2,
  title: "Share your fundraiser",
  description: "All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.",
  subtext: "Share your fundraiser directly from dashboard on social media.",
  highlight: "Easy sharing",
  color: "text-blue-600",
  bgColor: "bg-blue-50",
  borderColor: "border-blue-200"
}, {
  number: 3,
  icon: DollarSign,
  title: "Withdraw Funds",
  description: "The funds raised can be withdrawn without any hassle directly to your bank account.",
  subtext: "It takes only 5 minutes to withdraw funds on FundHope.",
  highlight: "5 minutes withdrawal",
  color: "text-purple-600",
  bgColor: "bg-purple-50",
  borderColor: "border-purple-200"
}];

const features = [
  { icon: Shield, text: "100% Secure & Trusted", color: "text-green-600" },
  { icon: Zap, text: "Quick Fund Withdrawal", color: "text-yellow-600" },
  { icon: Heart, text: "24/7 Customer Support", color: "text-red-500" },
  { icon: CheckCircle, text: "Zero Platform Fee*", color: "text-blue-600" }
];

const StartFundraiser = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-rose-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-rose-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="h-4 w-4" />
            Simple • Fast • Secure
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Start a Fundraiser in 
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> three simple steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful fundraisers who have raised millions for causes that matter
          </p>
        </div>

        {/* Enhanced Steps Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          {/* Left Side - Enhanced Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="group relative">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                  )}
                  
                  <div className="flex gap-6 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                    {/* Enhanced Step Number */}
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 ${step.bgColor} ${step.borderColor} border-2 rounded-full flex items-center justify-center text-lg font-bold ${step.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Enhanced Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 ${step.bgColor} rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                          <Icon className={`h-5 w-5 ${step.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-3 leading-relaxed text-lg">
                        {step.description}
                      </p>
                      {step.subtext && (
                        <p className="text-gray-500 leading-relaxed">
                          {step.subtext}
                        </p>
                      )}
                      <div className={`inline-flex items-center gap-2 mt-3 px-3 py-1 ${step.bgColor} rounded-full`}>
                        <CheckCircle className={`h-4 w-4 ${step.color}`} />
                        <span className={`text-sm font-semibold ${step.color}`}>
                          {step.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Enhanced Content */}
          <div className="lg:pl-8 space-y-8">
            {/* Enhanced Feature Card */}
            <div className="bg-gradient-to-br from-white to-rose-50/50 rounded-3xl shadow-2xl p-8 border border-rose-100/50 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Join 3.2 Lakh+ Fundraisers
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Start your fundraiser and reach thousands of supporters ready to help your cause.
                </p>
              </div>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">0%</div>
                  <div className="text-sm text-gray-600 font-semibold">Platform Fee</div>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-600 font-semibold">Support</div>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">2 min</div>
                  <div className="text-sm text-gray-600 font-semibold">Setup</div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:via-pink-600 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                Start Your Fundraiser Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Enhanced Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                    <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                      <Icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <span className="text-gray-700 font-semibold text-sm">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-rose-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Join thousands of successful fundraisers who have raised millions for causes that matter. 
                Your journey to making an impact starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-50 px-10 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2 text-rose-100">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Free to start • No hidden fees</span>
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
