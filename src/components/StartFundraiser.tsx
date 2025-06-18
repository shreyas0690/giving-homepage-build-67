
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Clock, CheckCircle } from "lucide-react";

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
    highlight: "Easy sharing"
  },
  {
    number: 3,
    icon: DollarSign,
    title: "Withdraw Funds",
    description: "The funds raised can be withdrawn without any hassle directly to your bank account.",
    highlight: "5 minutes withdrawal"
  }
];

const StartFundraiser = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-6">
            <Clock className="h-4 w-4" />
            Simple & Fast Process
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start a Fundraiser in{' '}
            <span className="text-rose-600">three simple steps</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful fundraisers and make a difference in just minutes
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-rose-200 z-10 transform translate-x-4"></div>
                )}
                
                <Card className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                  <CardContent className="p-8 text-center">
                    {/* Step number */}
                    <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-rose-600" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Highlight */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-full text-sm font-semibold">
                      <CheckCircle className="h-4 w-4" />
                      {step.highlight}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <PlusCircle className="h-5 w-5 mr-2" />
            Start Your Fundraiser Now
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          <p className="text-gray-500 mt-4">
            Join <span className="font-semibold text-rose-600">50,000+</span> successful fundraisers
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartFundraiser;
