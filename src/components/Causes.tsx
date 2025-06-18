
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  GraduationCap, 
  Home, 
  Stethoscope, 
  Leaf, 
  Users,
  Baby,
  Flower2
} from "lucide-react";

const causes = [
  {
    icon: Stethoscope,
    title: "MEDICAL",
    color: "text-white",
    bgColor: "bg-gradient-to-br from-rose-400 to-rose-500"
  },
  {
    icon: Flower2,
    title: "MEMORIAL",
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-rose-400 to-rose-500"
  },
  {
    icon: Baby,
    title: "CHILDREN",
    color: "text-white",
    bgColor: "bg-gradient-to-br from-rose-400 to-rose-500"
  },
  {
    icon: GraduationCap,
    title: "EDUCATION",
    color: "text-white",
    bgColor: "bg-gradient-to-br from-rose-400 to-rose-500"
  },
  {
    icon: Leaf,
    title: "ANIMAL",
    color: "text-white",
    bgColor: "bg-gradient-to-br from-rose-400 to-rose-500"
  },
  {
    icon: Home,
    title: "OTHERS",
    color: "text-white",
    bgColor: "bg-gradient-to-br from-rose-400 to-rose-500"
  }
];

const Causes = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Causes you can raise funds for
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Be it for a personal need, social cause or a creative idea - you can count on us for
            the project that you want to raise funds for.
          </p>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {causes.map((cause, index) => {
            const Icon = cause.icon;
            return (
              <div 
                key={index} 
                className="group cursor-pointer"
              >
                <div className={`${cause.bgColor} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden`}>
                  {/* Decorative stars */}
                  <div className="absolute top-3 right-3 text-white/30 text-xs">✦</div>
                  <div className="absolute bottom-3 left-3 text-white/20 text-xs">✦</div>
                  
                  <div className="flex flex-col items-center space-y-3">
                    <Icon className={`h-8 w-8 ${cause.color}`} />
                    <h3 className={`text-sm font-bold ${cause.color} tracking-wide`}>
                      {cause.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Don't see your cause? No problem! You can create a fundraiser for any legitimate cause.
          </p>
          <button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Start Your Fundraiser
          </button>
        </div>
      </div>
    </section>
  );
};

export default Causes;
