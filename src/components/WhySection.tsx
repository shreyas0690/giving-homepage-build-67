
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Users, 
  DollarSign, 
  Heart,
  Award,
  Smartphone,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Bank-level security with fraud protection and secure payment processing for peace of mind.",
    stats: "99.9% secure transactions"
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Launch your fundraiser in under 5 minutes with our intuitive campaign builder.",
    stats: "5 minutes to start"
  },
  {
    icon: Users,
    title: "Global Reach",
    description: "Connect with supporters worldwide through our platform used in 50+ countries.",
    stats: "50+ countries"
  },
  {
    icon: DollarSign,
    title: "Low Fees",
    description: "Keep more of what you raise with our transparent, low-cost fee structure.",
    stats: "Only 2.9% + $0.30 per donation"
  },
  {
    icon: Heart,
    title: "24/7 Support",
    description: "Our dedicated support team is here to help you succeed every step of the way.",
    stats: "24/7 customer support"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Join millions who have successfully raised funds for their causes on our platform.",
    stats: "$50M+ raised successfully"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Manage your campaign and engage supporters on-the-go with our mobile-friendly platform.",
    stats: "Mobile-first design"
  },
  {
    icon: Globe,
    title: "Social Integration",
    description: "Seamlessly share across all social platforms to maximize your campaign's reach.",
    stats: "All major platforms"
  }
];

const WhySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose FundHope?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're the trusted platform for fundraising success. Here's why millions of people 
            choose us to bring their causes to life.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 hover:bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-rose-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <div className="text-xs font-semibold text-rose-600 bg-rose-50 rounded-full px-3 py-1 inline-block">
                    {feature.stats}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2M+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$50M+</div>
              <div className="text-gray-600">Total Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">15K+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
