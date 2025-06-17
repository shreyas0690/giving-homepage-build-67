
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Clock, Users, Facebook, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const fundraisers = [
  {
    id: 1,
    title: "Support My Dad's Brain Injury Recovery – Urgent Help Needed",
    organizer: "Alok Ramayan Chaurasia",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=250",
    raised: 2825498,
    goal: 3000000,
    supporters: 3563,
    daysLeft: 14
  },
  {
    id: 2,
    title: "Offer Support To Me, Varun Kulkarni, An Actor & Theatre Artist",
    organizer: "Rhea Rai",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&h=250",
    raised: 2087837,
    goal: 2500000,
    supporters: 1148,
    daysLeft: 4
  },
  {
    id: 3,
    title: "Offer A Helping Hand To Support Sahil Jadhav's Treatment",
    organizer: "Tanu Rajan",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=250",
    raised: 1941544,
    goal: 2000000,
    supporters: 1228,
    daysLeft: 76
  },
  {
    id: 4,
    title: "Help Rahul Fight Cancer - Medical Treatment Support",
    organizer: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=250",
    raised: 1650000,
    goal: 2200000,
    supporters: 892,
    daysLeft: 25
  },
  {
    id: 5,
    title: "Support Meera's Education - Engineering Dreams",
    organizer: "Amit Kumar",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=250",
    raised: 850000,
    goal: 1500000,
    supporters: 567,
    daysLeft: 45
  },
  {
    id: 6,
    title: "Emergency Surgery Fund for Little Arjun",
    organizer: "Sita Devi",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=250",
    raised: 750000,
    goal: 1200000,
    supporters: 423,
    daysLeft: 18
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            Trending Fundraisers
          </h2>
          <p className="text-xl text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed">
            View the fundraisers that are most active right now
          </p>
        </div>

        {/* Navigation Arrows and Cards Container */}
        <div className="relative">
          {/* Left Arrow - with more space */}
          <button className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-5 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-110 transition-all duration-300 group">
            <ChevronLeft className="h-7 w-7 text-gray-700 group-hover:text-rose-500 transition-colors" />
          </button>

          {/* Right Arrow - with more space */}
          <button className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-5 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-110 transition-all duration-300 group">
            <ChevronRight className="h-7 w-7 text-gray-700 group-hover:text-rose-500 transition-colors" />
          </button>

          {/* Fundraiser Cards - with more padding */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-24">
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
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 leading-tight tracking-tight">
                          {fundraiser.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium tracking-wide">by {fundraiser.organizer}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-gray-900 tracking-tight">
                            {formatCurrency(fundraiser.raised)}
                          </span>
                          <span className="text-sm text-gray-500 font-medium">
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
                          <span className="font-bold tracking-wide">{fundraiser.daysLeft}</span>
                          <span className="font-medium">Days Left</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Heart className="h-4 w-4 text-red-500" />
                          <span className="font-bold tracking-wide">{fundraiser.supporters}</span>
                          <span className="font-medium">Supporters</span>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button 
                          variant="outline" 
                          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold tracking-wide"
                        >
                          <Facebook className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                        <Button className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold tracking-wide">
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
          <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-3 font-semibold tracking-wide">
            View More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingFundraisers;
