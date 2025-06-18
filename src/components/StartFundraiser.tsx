
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Clock, Users, Smartphone } from "lucide-react";

const steps = [{
  number: 1,
  icon: PlusCircle,
  title: "Start your fundraiser",
  description: "It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.",
  highlight: "Only 2 minutes",
  color: "text-rose-500",
  bgColor: "bg-rose-50"
}, {
  number: 2,
  icon: Share2,
  title: "Share your fundraiser",
  description: "All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.",
  subtext: "Share your fundraiser directly from dashboard on social media.",
  highlight: "Easy sharing",
  color: "text-rose-500",
  bgColor: "bg-rose-50"
}, {
  number: 3,
  icon: DollarSign,
  title: "Withdraw Funds",
  description: "The funds raised can be withdrawn without any hassle directly to your bank account.",
  subtext: "It takes only 5 minutes to withdraw funds on FundHope.",
  highlight: "5 minutes withdrawal",
  color: "text-rose-500",
  bgColor: "bg-rose-50"
}];

const StartFundraiser = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start a Fundraiser in three simple steps
          </h2>
        </div>

        {/* Steps Layout - Left side steps, Right side content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex gap-6">
                  {/* Step Number and Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600 shadow-sm">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-200 mt-4"></div>
                    )}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 ${step.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${step.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-rose-500">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-2 leading-relaxed">
                      {step.description}
                    </p>
                    {step.subtext && (
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {step.subtext}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Enhanced Content */}
          <div className="lg:pl-8">
            {/* Feature Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Join 3.2 Lakh+ Fundraisers
                </h3>
                <p className="text-gray-600">
                  Start your fundraiser and reach thousands of supporters ready to help your cause.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-500">0%</div>
                  <div className="text-xs text-gray-500">Platform Fee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-500">24/7</div>
                  <div className="text-xs text-gray-500">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-500">2 min</div>
                  <div className="text-xs text-gray-500">Setup</div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-3">
                Start Your Fundraiser Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Free to start</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Secure & trusted platform</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Share across all social platforms</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Quick fund withdrawal</span>
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
    </section>
  );
};

export default StartFundraiser;
