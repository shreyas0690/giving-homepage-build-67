import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Users, TrendingUp } from "lucide-react";
const steps = [{
  number: 1,
  icon: PlusCircle,
  title: "Create Your Campaign",
  description: "Set up your fundraiser in minutes with our simple form. Add photos, tell your story, and set your goal.",
  feature: "2-minute setup",
  color: "from-rose-500 to-pink-600"
}, {
  number: 2,
  icon: Share2,
  title: "Share & Promote",
  description: "Reach your network through social media, email, and direct sharing. Watch donations pour in from supporters.",
  feature: "Social integration",
  color: "from-pink-500 to-rose-600"
}, {
  number: 3,
  icon: DollarSign,
  title: "Receive Funds",
  description: "Get instant access to raised funds with secure, direct bank transfers. No waiting, no hassle.",
  feature: "Instant withdrawal",
  color: "from-rose-600 to-pink-500"
}];
const StartFundraiser = () => {
  return <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-rose-200 rounded-full shadow-sm mb-8">
            <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
            <span className="text-rose-700 font-medium text-sm">Simple Process</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Start fundraising in</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
              three simple steps
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful fundraisers who've raised millions for causes they care about
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
          const Icon = step.icon;
          return <div key={step.number} className="relative group">
                {/* Connecting Line */}
                {index < steps.length - 1}
                
                <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-rose-50/50"></div>
                  
                  <CardContent className="relative p-8 text-center">
                    {/* Step Number with Gradient */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-rose-600" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-base">
                      {step.description}
                    </p>
                    
                    {/* Feature Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full text-sm font-medium shadow-md">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      {step.feature}
                    </div>
                  </CardContent>
                </Card>
              </div>;
        })}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-rose-600 mr-2" />
              <span className="text-3xl font-bold text-gray-900">50K+</span>
            </div>
            <p className="text-gray-600">Active Fundraisers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <DollarSign className="h-6 w-6 text-rose-600 mr-2" />
              <span className="text-3xl font-bold text-gray-900">$10M+</span>
            </div>
            <p className="text-gray-600">Funds Raised</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="h-6 w-6 text-rose-600 mr-2" />
              <span className="text-3xl font-bold text-gray-900">98%</span>
            </div>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to make a difference?
            </h3>
            <p className="text-rose-100 mb-8 text-lg max-w-md mx-auto">
              Start your fundraising journey today and watch your community rally behind your cause
            </p>
            <Button className="bg-white text-rose-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <PlusCircle className="h-5 w-5 mr-2" />
              Start Your Fundraiser Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default StartFundraiser;