
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Share2, DollarSign, ArrowRight, Clock, Users, Smartphone, CheckCircle, Shield, Zap, Heart, Star } from "lucide-react";

const steps = [{
  number: 1,
  icon: PlusCircle,
  title: "Create Your Campaign",
  description: "Tell your story in just 2 minutes. Share what you're raising funds for and why it matters.",
  highlight: "2 minutes setup",
  color: "text-blue-600",
  bgColor: "bg-blue-50",
  borderColor: "border-blue-200",
  gradientFrom: "from-blue-500",
  gradientTo: "to-cyan-500"
}, {
  number: 2,
  icon: Share2,
  title: "Share & Connect",
  description: "Spread the word through social media, email, and messaging. Watch your community rally behind your cause.",
  highlight: "Easy sharing tools",
  color: "text-emerald-600",
  bgColor: "bg-emerald-50",
  borderColor: "border-emerald-200",
  gradientFrom: "from-emerald-500",
  gradientTo: "to-teal-500"
}, {
  number: 3,
  icon: DollarSign,
  title: "Receive Donations",
  description: "Get instant notifications for every donation and withdraw funds directly to your bank account.",
  highlight: "Instant withdrawals",
  color: "text-purple-600",
  bgColor: "bg-purple-50",
  borderColor: "border-purple-200",
  gradientFrom: "from-purple-500",
  gradientTo: "to-pink-500"
}];

const features = [
  { icon: Shield, text: "Bank-level Security", color: "text-green-600", bg: "bg-green-50" },
  { icon: Zap, text: "Fast Fund Transfer", color: "text-yellow-600", bg: "bg-yellow-50" },
  { icon: Heart, text: "24/7 Expert Support", color: "text-red-500", bg: "bg-red-50" },
  { icon: CheckCircle, text: "Zero Platform Fee", color: "text-blue-600", bg: "bg-blue-50" }
];

const StartFundraiser = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm">
            <Star className="h-4 w-4 text-yellow-500" />
            Trusted by 50,000+ Fundraisers
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Start Your Fundraiser in
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              Three Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands who have successfully raised funds for causes that matter most
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="group relative">
                {/* Connector Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0 transform translate-x-0"></div>
                )}
                
                <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="absolute inset-[1px] bg-white rounded-lg"></div>
                  
                  <CardContent className="relative p-8 text-center">
                    {/* Step Number & Icon */}
                    <div className="flex flex-col items-center mb-6">
                      <div className={`relative w-16 h-16 bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-md">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Highlight Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${step.bgColor} rounded-full`}>
                      <CheckCircle className={`h-4 w-4 ${step.color}`} />
                      <span className={`text-sm font-semibold ${step.color}`}>
                        {step.highlight}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Card */}
          <div className="order-2 lg:order-1">
            <Card className="bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to Change Lives?
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Start your fundraising journey today and watch your community come together for your cause.
                  </p>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                  Start Your Fundraiser Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <div className="flex items-center justify-center gap-2 mt-4 text-gray-500">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">100% Secure & Trusted Platform</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Features Grid */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <p className="text-gray-600 text-lg">
                Everything you need to run a successful fundraising campaign
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center shadow-sm`}>
                          <Icon className={`h-6 w-6 ${feature.color}`} />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">{feature.text}</span>
                          <p className="text-sm text-gray-500 mt-1">Guaranteed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">₹50Cr+</div>
                <div className="text-sm text-gray-600">Raised</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">3L+</div>
                <div className="text-sm text-gray-600">Donors</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">99%</div>
                <div className="text-sm text-gray-600">Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartFundraiser;
