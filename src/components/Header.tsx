
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Search, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="text-2xl font-bold text-gray-900">FundHope</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">Fundraisers</a>
            <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">Browse Causes</a>
            <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">How it Works</a>
            <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">Success Stories</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
              Start Fundraiser
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">Fundraisers</a>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">Browse Causes</a>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">How it Works</a>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">Success Stories</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">Sign In</Button>
                <Button className="bg-gradient-to-r from-rose-500 to-pink-600">Start Fundraiser</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
