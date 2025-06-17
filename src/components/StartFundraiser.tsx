
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: PlusCircle,
    title: "Create Your Campaign",
    description: "Set up your fundraiser in just 5 minutes. Add photos, write your story, and set your goal.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: 2,
    icon: Share2,
    title: "Share with Your Network",
    description: "Spread the word through social media, email, and messaging. We provide easy sharing tools.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: 3,
    icon: DollarSign,
    title: "Start Receiving Donations",
    description: "Watch donations come in from friends, family, and supporters. Track your progress in real-time.",
    color: "from-rose-500 to-orange-500"
  }
];

const StartFundraiser = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start a Fundraiser in Three Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-gray-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-12 py-4 text-lg"
          >
            Start Your Fundraiser Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Free to start • No platform fees for personal campaigns
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartFundraiser;
