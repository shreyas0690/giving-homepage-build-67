
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, ArrowRight } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Maria Rodriguez",
    title: "Education Fund for Underprivileged Children",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&h=150",
    raised: "$85,000",
    goal: "$75,000",
    story: "Thanks to FundHope, we were able to provide quality education to over 200 children in rural areas. The support from donors worldwide has been incredible!",
    rating: 5,
    category: "Education"
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    title: "Emergency Medical Equipment for Hospital",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&h=150",
    raised: "$120,000",
    goal: "$100,000",
    story: "We successfully raised funds for life-saving medical equipment. This platform made it possible to save hundreds of lives in our community hospital.",
    rating: 5,
    category: "Medical"
  },
  {
    id: 3,
    name: "Sarah Thompson",
    title: "Clean Water Initiative",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&h=150",
    raised: "$65,000",
    goal: "$60,000",
    story: "Our clean water project now serves 5 villages with safe drinking water. The transparency and ease of use of FundHope made all the difference.",
    rating: 5,
    category: "Community"
  }
];

const SuccessStories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real impact. Discover how our community has transformed lives 
            and created positive change around the world.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story) => (
            <Card key={story.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Header with Image and Category */}
                <div className="relative bg-gradient-to-r from-rose-500 to-pink-600 p-6 text-white">
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {story.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-16 h-16 rounded-full border-4 border-white/20 object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{story.name}</h3>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-300" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2">
                    {story.title}
                  </h4>
                  
                  {/* Quote */}
                  <div className="relative mb-4">
                    <Quote className="h-6 w-6 text-rose-500 mb-2" />
                    <p className="text-gray-600 italic leading-relaxed">
                      "{story.story}"
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Amount Raised</span>
                      <span className="font-bold text-rose-600">{story.raised}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Goal</span>
                      <span className="text-sm text-gray-600">{story.goal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-rose-500 to-pink-600 h-2 rounded-full w-full"></div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-semibold text-green-600">Goal Exceeded! ✓</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to create your own success story?
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-12 py-4 text-lg mr-4"
          >
            Start Your Campaign
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-rose-500 text-rose-500 hover:bg-rose-50 px-8 py-4 text-lg"
          >
            Read More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
