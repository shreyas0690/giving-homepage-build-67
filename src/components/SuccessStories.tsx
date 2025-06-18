
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4">
            Success Stories
          </h2>
        </div>

        {/* Mobile View - Stack layout */}
        <div className="lg:hidden">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            {/* Image Section */}
            <div className="relative">
              <img 
                src={currentStoryData.image} 
                alt={currentStoryData.name}
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-6">
              <div className="mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
                  <strong>You are the reason {currentStoryData.name.split(' ')[0]} gets to live his dream</strong>
                </h3>
              </div>

              <div className="mb-3">
                <Quote className="h-4 w-4 text-rose-500 mb-2" />
                <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
                  "{currentStoryData.fullStory}" -{currentStoryData.name.split(' ')[0]}...
                </p>
              </div>

              <div className="mb-4">
                <button className="text-rose-500 hover:text-rose-600 font-bold text-sm">
                  <strong>Read more</strong>
                </button>
              </div>

              <div className="mb-4">
                <p className="text-gray-500 mb-3 text-sm font-semibold">
                  <strong>Subscribe to read such inspiring stories</strong>
                </p>
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full font-bold transition-colors duration-200 text-sm w-full sm:w-auto">
                  <strong>Subscribe</strong>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevStory}
              className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-rose-300"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 hover:text-rose-500 transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
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

            <button
              onClick={nextStory}
              className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-rose-300"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 hover:text-rose-500 transition-colors" />
            </button>
          </div>
        </div>

        {/* Desktop View - Original layout */}
        <div className="hidden lg:flex items-center justify-center gap-6 max-w-6xl mx-auto">
          {/* Left Navigation Arrow */}
          <button
            onClick={prevStory}
            className="flex-shrink-0 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-rose-300 group"
          >
            <ChevronLeft className="h-8 w-8 text-gray-600 group-hover:text-rose-500 transition-colors" />
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
                    <strong>You are the reason {currentStoryData.name.split(' ')[0]} gets to live his dream</strong>
                  </h3>
                </div>

                <div className="mb-2">
                  <Quote className="h-4 w-4 text-rose-500 mb-2" />
                  <p className="text-gray-600 leading-relaxed italic text-xs">
                    "{currentStoryData.fullStory}" -{currentStoryData.name.split(' ')[0]}...
                  </p>
                </div>

                <div className="mb-3">
                  <button className="text-rose-500 hover:text-rose-600 font-bold text-sm">
                    <strong>Read more</strong>
                  </button>
                </div>

                <div className="mb-2">
                  <p className="text-gray-500 mb-2 text-sm font-semibold"><strong>Subscribe to read such inspiring stories</strong></p>
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1.5 rounded-full font-bold transition-colors duration-200 text-sm">
                    <strong>Subscribe</strong>
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
            <ChevronRight className="h-8 w-8 text-gray-600 group-hover:text-rose-500 transition-colors" />
          </button>
        </div>

        {/* Desktop Dots Indicator */}
        <div className="hidden lg:flex justify-center mt-6 space-x-2">
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
        <div className="text-center mt-6 sm:mt-8">
          <Button 
            size="lg" 
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 sm:px-8 py-2.5 text-sm sm:text-base rounded-lg font-bold w-full sm:w-auto"
          >
            <strong>START A FUNDRAISER FOR FREE</strong>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
