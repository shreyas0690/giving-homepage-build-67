

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
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Success Stories
          </h2>
        </div>

        {/* Carousel Container with Side Navigation */}
        <div className="flex items-center justify-center gap-6 max-w-6xl mx-auto">
          {/* Left Navigation Arrow */}
          <button
            onClick={prevStory}
            className="flex-shrink-0 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-rose-300 group"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600 group-hover:text-rose-500 transition-colors" />
          </button>

          {/* Story Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex-1">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative">
                <img 
                  src={currentStoryData.image} 
                  alt={currentStoryData.name}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 lg:p-5 flex flex-col justify-center">
                <div className="mb-2">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                    You are the reason {currentStoryData.name.split(' ')[0]} gets to live his dream
                  </h3>
                </div>

                <div className="mb-2">
                  <Quote className="h-4 w-4 text-rose-500 mb-2" />
                  <p className="text-gray-600 leading-relaxed italic text-sm">
                    "{currentStoryData.fullStory}" -{currentStoryData.name.split(' ')[0]}...
                  </p>
                </div>

                <div className="mb-3">
                  <button className="text-rose-500 hover:text-rose-600 font-medium text-sm">
                    Read more
                  </button>
                </div>

                <div className="mb-2">
                  <p className="text-gray-500 mb-2 text-sm">Subscribe to read such inspiring stories</p>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-full font-medium transition-colors duration-200 text-sm">
                    💬 Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextStory}
            className="flex-shrink-0 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-rose-300 group"
          >
            <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-rose-500 transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStory(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentStory ? 'bg-rose-500' : 'bg-rose-300'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-5">
          <Button 
            size="lg" 
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-2.5 text-sm rounded-lg"
          >
            START A FUNDRAISER FOR FREE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

