
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
    icon: Users,
    title: "Global Reach", 
    description: "Connect with supporters worldwide through our platform used in 50+ countries.",
    stats: "50+ countries"
  },
  {
    icon: Award,
    title: "Easy-To-Manage Tools",
    description: "Intuitive dashboard and management tools to boost your fundraising results.",
    stats: "User-friendly interface"
  },
  {
    icon: DollarSign,
    title: "Multiple Payment Options",
    description: "Receive contributions via all popular payment modes for maximum convenience.",
    stats: "All major payment methods"
  },
  {
    icon: Heart,
    title: "Get Expert Support 24/7",
    description: "Our dedicated support team is here to help you succeed every step of the way.",
    stats: "24/7 customer support"
  },
  {
    icon: Smartphone,
    title: "Smart Dashboard",
    description: "A dedicated smart dashboard to manage your campaign and track progress efficiently.",
    stats: "Real-time analytics"
  },
  {
    icon: Globe,
    title: "Withdraw Funds Easily",
    description: "Hassle-free fund withdrawal process with quick processing times.",
    stats: "Quick withdrawals"
  },
  {
    icon: Clock,
    title: "International Payment Support",
    description: "Accept donations from supporters worldwide with full international payment support.",
    stats: "Global payment processing"
  }
];

const WhySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose FundHope?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide the tools and support you need to run successful fundraising campaigns
          </p>
        </div>

        {/* Features Grid - exactly matching the image layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                {/* White card background with shadow */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Icon with teal circular background */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats - matching the image style */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-12 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">2M+</div>
              <div className="text-white/90 text-lg">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">$50M+</div>
              <div className="text-white/90 text-lg">Total Raised</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">15K+</div>
              <div className="text-white/90 text-lg">Success Stories</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90 text-lg">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
