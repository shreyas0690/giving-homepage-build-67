
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Clock, Users, Smartphone, CheckCircle, Heart, Shield, Zap, Star } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: PlusCircle,
    title: "Start your fundraiser",
    description: "It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.",
    highlight: "Only 2 minutes"
  },
  {
    number: 2,
    icon: Share2,
    title: "Share your fundraiser",
    description: "All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.",
    subtext: "Share your fundraiser directly from dashboard on social media.",
    highlight: "Easy sharing"
  },
  {
    number: 3,
    icon: DollarSign,
    title: "Withdraw Funds",
    description: "The funds raised can be withdrawn without any hassle directly to your bank account.",
    subtext: "It takes only 5 minutes to withdraw funds on FundHope.",
    highlight: "5 minutes withdrawal"
  }
];

const StartFundraiser = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start a Fundraiser in
            <span className="text-rose-600"> three simple steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful fundraisers and make a difference in just minutes
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gray-200 z-10 transform translate-x-4"></div>
                )}
                
                {/* Step Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-rose-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {step.subtext && (
                    <p className="text-gray-500 text-sm mb-4">
                      {step.subtext}
                    </p>
                  )}
                  
                  {/* Highlight Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
                    <CheckCircle className="h-4 w-4" />
                    {step.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - CTA */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join 3.2 Lakh+ successful fundraisers who have raised millions for their causes
            </p>
            
            <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 text-lg font-semibold rounded-xl">
              Start Your Fundraiser Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-gray-500 mt-4 text-sm">
              ✨ No hidden fees • 100% secure • 24/7 support
            </p>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Why Choose FundHope?</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h5 className="font-semibold text-gray-900 mb-1">0% Platform Fee</h5>
                <p className="text-gray-600 text-sm">Keep 100% of donations</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <h5 className="font-semibold text-gray-900 mb-1">100% Secure</h5>
                <p className="text-gray-600 text-sm">Bank-level security</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="h-5 w-5 text-purple-600" />
                </div>
                <h5 className="font-semibold text-gray-900 mb-1">Quick Setup</h5>
                <p className="text-gray-600 text-sm">Get started in 2 minutes</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-orange-600" />
                </div>
                <h5 className="font-semibold text-gray-900 mb-1">24/7 Support</h5>
                <p className="text-gray-600 text-sm">We're here to help</p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-rose-600 rounded-xl p-6 text-white mt-6">
              <h5 className="font-bold mb-4">Trusted by millions</h5>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">72L+</div>
                  <div className="text-rose-100 text-xs">Contributors</div>
                </div>
                <div>
                  <div className="text-xl font-bold">3.2L+</div>
                  <div className="text-rose-100 text-xs">Fundraisers</div>
                </div>
                <div>
                  <div className="text-xl font-bold">₹500Cr+</div>
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
