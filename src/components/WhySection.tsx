
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
    title: "Industry's best fundraising success rate",
    description: "Proven track record with highest success rates in the industry"
  },
  {
    icon: Users,
    title: "Supported By 55,00,000+ Contributors",
    description: "Join millions of supporters who trust our platform"
  },
  {
    icon: Clock,
    title: "Easy-To-Manage Tools To Boost Results",
    description: "Simple yet powerful tools to maximize your campaign success"
  },
  {
    icon: DollarSign,
    title: "Receive contributions via all popular payment modes",
    description: "Accept donations through multiple secure payment options"
  },
  {
    icon: Heart,
    title: "Get Expert Support 24/7",
    description: "Round-the-clock assistance from our dedicated support team"
  },
  {
    icon: Award,
    title: "A Dedicated Smart-Dashboard",
    description: "Comprehensive analytics and management in one place"
  },
  {
    icon: Smartphone,
    title: "Withdraw Funds Without Hassle",
    description: "Quick and easy fund withdrawal process"
  },
  {
    icon: Globe,
    title: "International Payment Support",
    description: "Accept donations from supporters worldwide"
  }
];

const WhySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            Why Choose FundHope?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                {/* Icon Circle */}
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-rose-400 flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-rose-500" />
                </div>
                
                {/* Yellow underline */}
                <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-700 mb-3 leading-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
