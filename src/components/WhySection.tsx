
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Ketto?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                {/* Icon Circle */}
                <div className="w-20 h-20 mx-auto rounded-full border-4 border-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-10 w-10 text-teal-500" />
                </div>
                
                {/* Yellow Line */}
                <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
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
