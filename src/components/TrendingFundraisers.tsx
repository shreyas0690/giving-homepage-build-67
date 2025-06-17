
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Clock, Users, Share, ArrowRight } from "lucide-react";

const fundraisers = [
  {
    id: 1,
    title: "Support My Dad's Brain Injury Recovery – Urgent Help Needed",
    organizer: "Alok Ramayan Chaurasia",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=250",
    raised: 2825498,
    goal: 3000000,
    supporters: 3563,
    daysLeft: 14,
    category: "AR"
  },
  {
    id: 2,
    title: "Offer Support To Me, Varun Kulkarni, An Actor & Theatre Artist",
    organizer: "Rhea Rai",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&h=250",
    raised: 2087837,
    goal: 2500000,
    supporters: 1148,
    daysLeft: 4,
    category: "RR"
  },
  {
    id: 3,
    title: "Offer A Helping Hand To Support Sahil Jadhav's Treatment",
    organizer: "Tanu Rajan",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=250",
    raised: 1941544,
    goal: 2000000,
    supporters: 1228,
    daysLeft: 76,
    category: "TR"
  }
];

const TrendingFundraisers = () => {
  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)}L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trending Fundraisers
          </h2>
          <p className="text-lg text-gray-600">
            View the fundraisers that are most active right now
          </p>
        </div>

        {/* Navigation Arrows and Cards Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
            <ArrowRight className="h-6 w-6 text-gray-600 rotate-180" />
          </button>

          {/* Right Arrow */}
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
            <ArrowRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Fundraiser Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-16">
            {fundraisers.map((fundraiser) => {
              const progressPercentage = (fundraiser.raised / fundraiser.goal) * 100;
              
              return (
                <Card key={fundraiser.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                  <div className="relative overflow-hidden">
                    <img 
                      src={fundraiser.image} 
                      alt={fundraiser.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-rose-500 text-white px-3 py-1 rounded text-sm font-bold">
                        {fundraiser.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2">
                          {fundraiser.title}
                        </h3>
                        <p className="text-sm text-gray-600">by {fundraiser.organizer}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-gray-900">
                            {formatCurrency(fundraiser.raised)}
                          </span>
                          <span className="text-sm text-gray-500">
                            raised out of {formatCurrency(fundraiser.goal)}
                          </span>
                        </div>
                        <Progress value={progressPercentage} className="h-2 bg-gray-200">
                          <div 
                            className="h-full bg-gradient-to-r from-rose-500 to-pink-600 transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                          />
                        </Progress>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span className="font-bold">{fundraiser.daysLeft}</span>
                          <span>Days Left</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Heart className="h-4 w-4 text-red-500" />
                          <span className="font-bold">{fundraiser.supporters}</span>
                          <span>Supporters</span>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button 
                          variant="outline" 
                          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          <Share className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                        <Button className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white">
                          Contribute
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-3">
            View More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingFundraisers;
