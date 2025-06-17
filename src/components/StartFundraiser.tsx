
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
    color: "bg-blue-500",
  },
  {
    number: 2,
    icon: Share2,
    title: "Share your fundraiser",
    description: "All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.",
    subtext: "Share your fundraiser directly from dashboard on social media.",
    highlight: "Easy sharing",
    color: "bg-green-500",
  },
  {
    number: 3,
    icon: DollarSign,
    title: "Withdraw Funds",
    description: "The funds raised can be withdrawn without any hassle directly to your bank account.",
    subtext: "It takes only 5 minutes to withdraw funds on ketto.",
    highlight: "5 minutes withdrawal",
    color: "bg-purple-500",
  }
];

const StartFundraiser = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
            <Clock className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium text-sm">GET STARTED IN MINUTES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start a Fundraiser in
            <span className="block text-blue-600">Three Simple Steps</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is easy and free. Launch your campaign today and 
            start making a difference in just minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200">
                  <CardContent className="p-8 text-center">
                    {/* Step number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-full ${step.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Highlight badge */}
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                        {step.highlight}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                      {step.subtext && (
                        <p className="text-gray-500 text-sm pt-2 border-t border-gray-100">
                          {step.subtext}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Connecting arrows */}
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
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-200">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">2 min</div>
              <div className="text-gray-600 font-medium">Setup Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">5 min</div>
              <div className="text-gray-600 font-medium">Withdrawal Time</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Make a Difference?</h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Join thousands of successful fundraisers who have raised millions for causes that matter.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Fundraiser Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center justify-center mt-4 space-x-6 text-blue-100">
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
