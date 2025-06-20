
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";

const stories = [
  {
    id: 1,
    name: "Maria Rodriguez",
    title: "Education Fund for Underprivileged Children",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=400&h=400",
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
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400",
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
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=400",
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
    <section className="py-16 bg-gradient-to-br from-rose-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-rose-500 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
              Success Stories
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from real people whose lives were transformed through the power of community support
          </p>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-100">
            {/* Image Section */}
            <div className="relative">
              <img 
                src={currentStoryData.image} 
                alt={currentStoryData.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                <span className="text-sm font-bold text-rose-600">{currentStoryData.category}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  You are the reason <span className="text-rose-600">{currentStoryData.name.split(' ')[0]}</span> gets to live his dream
                </h3>
              </div>

              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <Quote className="h-5 w-5 text-rose-400 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{currentStoryData.fullStory}"
                  </p>
                </div>
                <p className="text-right text-sm font-semibold text-gray-600">
                  - {currentStoryData.name.split(' ')[0]}
                </p>
              </div>

              <div className="mb-6">
                <button className="text-rose-600 hover:text-rose-700 font-bold text-sm transition-colors">
                  Read full story →
                </button>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-4">
                <p className="text-gray-700 mb-3 text-sm font-semibold text-center">
                  Subscribe to read more inspiring stories like this
                </p>
                <button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 text-sm w-full shadow-lg">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevStory}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-rose-300 hover:scale-105"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 hover:text-rose-500 transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentStory ? 'bg-rose-500 scale-125' : 'bg-rose-300 hover:bg-rose-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-rose-300 hover:scale-105"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 hover:text-rose-500 transition-colors" />
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Left Navigation Arrow */}
          <button
            onClick={prevStory}
            className="flex-shrink-0 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-rose-300 group hover:scale-105"
          >
            <ChevronLeft className="h-8 w-8 text-gray-600 group-hover:text-rose-500 transition-colors" />
          </button>

          {/* Story Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-1 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative">
                <img 
                  src={currentStoryData.image} 
                  alt={currentStoryData.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-6 right-6 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-bold text-rose-600">{currentStoryData.category}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    You are the reason <span className="text-rose-600">{currentStoryData.name.split(' ')[0]}</span> gets to live his dream
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <Quote className="h-6 w-6 text-rose-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed italic text-lg">
                      "{currentStoryData.fullStory}"
                    </p>
                  </div>
                  <p className="text-right text-base font-semibold text-gray-600">
                    - {currentStoryData.name.split(' ')[0]}
                  </p>
                </div>

                <div className="mb-6">
                  <button className="text-rose-600 hover:text-rose-700 font-bold transition-colors">
                    Read full story →
                  </button>
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4 font-semibold text-center">
                    Subscribe to read more inspiring stories like this
                  </p>
                  <button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 w-full shadow-lg">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextStory}
            className="flex-shrink-0 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-rose-300 group hover:scale-105"
          >
            <ChevronRight className="h-8 w-8 text-gray-600 group-hover:text-rose-500 transition-colors" />
          </button>
        </div>

        {/* Desktop Dots Indicator */}
        <div className="hidden lg:flex justify-center mt-8 space-x-3">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentStory ? 'bg-rose-500 scale-125' : 'bg-rose-300 hover:bg-rose-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-4 text-lg rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            START A FUNDRAISER FOR FREE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
