import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Clock, Users, Smartphone } from "lucide-react";
const steps = [{
  number: 1,
  icon: PlusCircle,
  title: "Start your fundraiser",
  description: "It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.",
  highlight: "Only 2 minutes",
  color: "from-rose-500 to-pink-500",
  bgGradient: "from-rose-50 to-pink-50"
}, {
  number: 2,
  icon: Share2,
  title: "Share your fundraiser",
  description: "All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.",
  subtext: "Share your fundraiser directly from dashboard on social media.",
  highlight: "Easy sharing",
  color: "from-purple-500 to-indigo-500",
  bgGradient: "from-purple-50 to-indigo-50"
}, {
  number: 3,
  icon: DollarSign,
  title: "Withdraw Funds",
  description: "The funds raised can be withdrawn without any hassle directly to your bank account.",
  subtext: "It takes only 5 minutes to withdraw funds on ketto.",
  highlight: "5 minutes withdrawal",
  color: "from-emerald-500 to-teal-500",
  bgGradient: "from-emerald-50 to-teal-50"
}];
const StartFundraiser = () => {
  return <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-rose-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-rose-100 to-pink-100 rounded-full px-6 py-2 mb-6">
            <Clock className="h-4 w-4 text-rose-600 mr-2" />
            <span className="text-rose-700 font-semibold text-sm tracking-wide">GET STARTED IN MINUTES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Start a Fundraiser in
            <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Three Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Getting started is easy and free. Launch your campaign today and 
            start making a difference in just minutes.
          </p>
        </div>

        {/* Enhanced Steps with Advanced Design */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
          const Icon = step.icon;
          return <div key={step.number} className="relative group">
                <Card className={`h-full hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br ${step.bgGradient} border-0 group-hover:scale-105`}>
                  <CardContent className="p-8 text-center relative">
                    {/* Step number badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-xl">
                      {step.number}
                    </div>
                    
                    {/* Icon with enhanced styling */}
                    <div className="relative mb-8">
                      <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-300`}>
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                      
                      {/* Highlight badge */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-medium text-base">
                        {step.description}
                      </p>
                      {step.subtext && <p className="text-gray-600 text-sm leading-relaxed italic border-t border-gray-200 pt-3 mt-4">
                          {step.subtext}
                        </p>}
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced connecting arrows */}
                {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    
                  </div>}
              </div>;
        })}
        </div>

        {/* Enhanced Statistics Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">2 min</div>
              <div className="text-gray-600 font-medium">Setup Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">5 min</div>
              <div className="text-gray-600 font-medium">Withdrawal Time</div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-rose-100 mb-8 text-lg max-w-2xl mx-auto">
                Join thousands of successful fundraisers who have raised millions for causes that matter.
              </p>
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-50 px-12 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Start Your Fundraiser Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <div className="flex items-center justify-center mt-6 space-x-6 text-rose-100">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">Free to start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-4 w-4" />
                  <span className="text-sm font-medium">Mobile friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StartFundraiser;