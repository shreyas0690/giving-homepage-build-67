
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Clock, Users, Smartphone } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: PlusCircle,
    title: "Start your fundraiser",
    description: "It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.",
    highlight: "Only 2 minutes",
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    number: 2,
    icon: Share2,
    title: "Share your fundraiser",
    description: "All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.",
    subtext: "Share your fundraiser directly from dashboard on social media.",
    highlight: "Easy sharing",
    color: "bg-green-600",
    lightColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    number: 3,
    icon: DollarSign,
    title: "Withdraw Funds",
    description: "The funds raised can be withdrawn without any hassle directly to your bank account.",
    subtext: "It takes only 5 minutes to withdraw funds on ketto.",
    highlight: "5 minutes withdrawal",
    color: "bg-purple-600",
    lightColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const StartFundraiser = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
            <Clock className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium text-sm">GET STARTED IN MINUTES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start a Fundraiser in
            <span className="block text-blue-600 mt-2">Three Simple Steps</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is easy and free. Launch your campaign today and start making a difference.
          </p>
        </div>

        {/* Enhanced Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative group">
                <Card className={`h-full ${step.lightColor} ${step.borderColor} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                  <CardContent className="p-8 text-center relative">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-10 h-10 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-lg font-bold text-gray-700">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6 mt-4">
                      <div className={`w-20 h-20 mx-auto ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                      {step.subtext && (
                        <p className="text-gray-500 text-xs italic pt-2 border-t border-gray-200">
                          {step.subtext}
                        </p>
                      )}
                      
                      {/* Highlight badge */}
                      <div className="pt-3">
                        <span className={`inline-flex items-center ${step.color} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                          {step.highlight}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">2 min</div>
              <div className="text-gray-600 text-sm">Setup Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">5 min</div>
              <div className="text-gray-600 text-sm">Withdrawal Time</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Join thousands of successful fundraisers who have raised millions for causes that matter.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Fundraiser Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center justify-center mt-6 space-x-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4" />
                <span className="text-sm">Mobile friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartFundraiser;
