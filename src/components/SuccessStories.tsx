
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const stories = [
  {
    id: 1,
    name: "Maria Rodriguez",
    title: "Education Fund for Underprivileged Children",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=400",
    raised: "$85,000",
    goal: "$75,000",
    story: "Thanks to FundHope, we were able to provide quality education to over 200 children in rural areas. The support from donors worldwide has been incredible!",
    rating: 5,
    category: "Education",
    fullStory: "Our son's cancer had relapsed after 2.5 years of chemotherapy & we knew we couldn't afford his life-saving treatment. But thanks to your donations & prayers, he underwent successful treatment & is recovering well. May God bless you all for saving his life!"
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    title: "Emergency Medical Equipment for Hospital",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=400",
    raised: "$120,000",
    goal: "$100,000",
    story: "We successfully raised funds for life-saving medical equipment. This platform made it possible to save hundreds of lives in our community hospital.",
    rating: 5,
    category: "Medical",
    fullStory: "We successfully raised funds for life-saving medical equipment. This platform made it possible to save hundreds of lives in our community hospital. The support from the community has been overwhelming."
  },
  {
    id: 3,
    name: "Sarah Thompson",
    title: "Clean Water Initiative",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=400",
    raised: "$65,000",
    goal: "$60,000",
    story: "Our clean water project now serves 5 villages with safe drinking water. The transparency and ease of use of FundHope made all the difference.",
    rating: 5,
    category: "Community",
    fullStory: "Our clean water project now serves 5 villages with safe drinking water. The transparency and ease of use of FundHope made all the difference in reaching our goals."
  }
];

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStoryData = stories[currentStory];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevStory}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 text-rose-500 hover:text-rose-600"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={nextStory}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 text-rose-500 hover:text-rose-600"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Story Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-8">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative">
                <img 
                  src={currentStoryData.image} 
                  alt={currentStoryData.name}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    You are the reason {currentStoryData.name.split(' ')[0]} gets to live his dream
                  </h3>
                </div>

                <div className="mb-4">
                  <Quote className="h-5 w-5 text-rose-500 mb-2" />
                  <p className="text-gray-600 leading-relaxed italic text-sm lg:text-base">
                    "{currentStoryData.fullStory}" -{currentStoryData.name.split(' ')[0]}...
                  </p>
                </div>

                <div className="mb-6">
                  <button className="text-rose-500 hover:text-rose-600 font-medium text-sm">
                    Read more
                  </button>
                </div>

                <div className="mb-4">
                  <p className="text-gray-500 mb-3 text-sm">Subscribe to read such inspiring stories</p>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-colors duration-200 text-sm">
                    💬 Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                  index === currentStory ? 'bg-rose-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Button 
            size="lg" 
            className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-3 text-base rounded-lg"
          >
            START A FUNDRAISER FOR FREE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
