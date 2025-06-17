
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Clock, Users } from "lucide-react";

const fundraisers = [
  {
    id: 1,
    title: "Help Build Clean Water Wells in Rural Communities",
    organizer: "WaterAid Foundation",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&h=250",
    raised: 45000,
    goal: 60000,
    donors: 1250,
    daysLeft: 12,
    category: "Community"
  },
  {
    id: 2,
    title: "Emergency Medical Treatment for Children",
    organizer: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=250",
    raised: 23500,
    goal: 35000,
    donors: 890,
    daysLeft: 8,
    category: "Medical"
  },
  {
    id: 3,
    title: "Education Scholarships for Underprivileged Students",
    organizer: "Education First NGO",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=250",
    raised: 78000,
    goal: 100000,
    donors: 2100,
    daysLeft: 25,
    category: "Education"
  }
];

const TrendingFundraisers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trending Fundraisers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most impactful campaigns that are making a difference right now. 
            Join thousands of supporters in creating positive change.
          </p>
        </div>

        {/* Fundraiser Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {fundraisers.map((fundraiser) => {
            const progressPercentage = (fundraiser.raised / fundraiser.goal) * 100;
            
            return (
              <Card key={fundraiser.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={fundraiser.image} 
                    alt={fundraiser.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {fundraiser.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                      <Heart className="h-4 w-4 text-gray-600 hover:text-rose-500" />
                    </button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-2">
                        {fundraiser.title}
                      </h3>
                      <p className="text-sm text-gray-600">by {fundraiser.organizer}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-900">
                          ${fundraiser.raised.toLocaleString()} raised
                        </span>
                        <span className="text-gray-600">
                          of ${fundraiser.goal.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{fundraiser.donors} donors</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{fundraiser.daysLeft} days left</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                      Donate Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-2 border-rose-500 text-rose-500 hover:bg-rose-50">
            View All Fundraisers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingFundraisers;
