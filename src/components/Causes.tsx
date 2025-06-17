
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  GraduationCap, 
  Home, 
  Stethoscope, 
  Leaf, 
  Users,
  Zap,
  Globe
} from "lucide-react";

const causes = [
  {
    icon: Stethoscope,
    title: "Medical & Health",
    description: "Support medical treatments, surgeries, and health emergencies",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    campaigns: "2,450+ campaigns"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Fund scholarships, school supplies, and educational programs",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    campaigns: "1,890+ campaigns"
  },
  {
    icon: Home,
    title: "Community",
    description: "Build infrastructure, community centers, and local projects",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    campaigns: "1,670+ campaigns"
  },
  {
    icon: Leaf,
    title: "Environment",
    description: "Protect nature, fight climate change, and preserve wildlife",
    color: "from-green-600 to-teal-500",
    bgColor: "bg-green-50",
    campaigns: "980+ campaigns"
  },
  {
    icon: Users,
    title: "Social Causes",
    description: "Support human rights, equality, and social justice initiatives",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    campaigns: "1,340+ campaigns"
  },
  {
    icon: Zap,
    title: "Emergency Relief",
    description: "Provide disaster relief and emergency assistance",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    campaigns: "750+ campaigns"
  },
  {
    icon: Heart,
    title: "Personal",
    description: "Help individuals and families in times of need",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    campaigns: "3,200+ campaigns"
  },
  {
    icon: Globe,
    title: "International",
    description: "Support global causes and international development",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    campaigns: "620+ campaigns"
  }
];

const Causes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Causes You Can Raise Funds For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whatever cause is close to your heart, you can create a fundraiser for it. 
            Join thousands of campaigns making a real difference.
          </p>
        </div>

        {/* Causes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {causes.map((cause, index) => {
            const Icon = cause.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-rose-200"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full ${cause.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`p-3 rounded-full bg-gradient-to-r ${cause.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                    {cause.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {cause.description}
                  </p>
                  <div className="text-xs text-gray-500 font-medium">
                    {cause.campaigns}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see your cause? No problem! You can create a fundraiser for any legitimate cause.
          </p>
          <button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Explore All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Causes;
