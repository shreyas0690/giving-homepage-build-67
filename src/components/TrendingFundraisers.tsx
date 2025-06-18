import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Clock, Facebook, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fundraisers = [
  {
    id: 1,
    title: "Support My Dad's Brain Injury Recovery – Urgent Help Needed",
    organizer: "Alok Ramayan Chaurasia",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=250", // Medical care/helping hands for brain injury recovery
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=250", // Theater/performance
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
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=250", // Medical hands/helping hand for treatment
    raised: 1941544,
    goal: 2000000,
    supporters: 1228,
    daysLeft: 76,
    category: "TR"
  },
  {
    id: 4,
    title: "Help Priya Fight Cancer - Emergency Medical Support",
    organizer: "Amit Sharma",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=400&h=250", // Hospital/medical emergency for cancer support
    raised: 1523000,
    goal: 2800000,
    supporters: 892,
    daysLeft: 23,
    category: "AS"
  },
  {
    id: 5,
    title: "Support Ravi's Heart Surgery - Save a Life",
    organizer: "Meera Patel",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=400&h=250", // Heart/medical surgery
    raised: 3200000,
    goal: 4500000,
    supporters: 2156,
    daysLeft: 12,
    category: "MP"
  },
  {
    id: 6,
    title: "Help Build Clean Water Wells in Rural Villages",
    organizer: "NGO Green Earth",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250", // Water wells/rural development
    raised: 876500,
    goal: 1500000,
    supporters: 567,
    daysLeft: 45,
    category: "GE"
  },
  {
    id: 7,
    title: "Emergency Fund for Accident Victim Recovery",
    organizer: "Deepak Kumar",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=250", // Emergency/ambulance
    raised: 425000,
    goal: 800000,
    supporters: 234,
    daysLeft: 8,
    category: "DK"
  },
  {
    id: 8,
    title: "Support Education for Underprivileged Children",
    organizer: "Sunita Foundation",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=400&h=250", // Children education
    raised: 654000,
    goal: 1200000,
    supporters: 789,
    daysLeft: 67,
    category: "SF"
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

        {/* Carousel */}
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {fundraisers.map((fundraiser) => {
                const progressPercentage = (fundraiser.raised / fundraiser.goal) * 100;
                
                return (
                  <CarouselItem key={fundraiser.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white h-full">
                      {fundraiser.image && (
                        <div className="relative overflow-hidden">
                          <img 
                            src={fundraiser.image} 
                            alt={fundraiser.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
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
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
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
