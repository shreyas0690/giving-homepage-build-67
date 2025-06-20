
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User } from "lucide-react";
import SignInModal from "@/components/SignInModal";
import StartFundraiserModal from "@/components/StartFundraiserModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isStartFundraiserModalOpen, setIsStartFundraiserModalOpen] = useState(false);

  const handleOpenSignIn = () => {
    setIsSignInModalOpen(true);
  };

  const handleOpenStartFundraiser = () => {
    setIsStartFundraiserModalOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center -space-x-2">
              <img 
                src="/lovable-uploads/6f963d4c-07e4-448f-9377-5fee8010d0fc.png" 
                alt="Varak Logo" 
                className="h-16 w-16"
              />
              <span className="text-2xl font-bold text-gray-900">Varak</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">Browse Fundraisers</a>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">Browse Causes</a>
              <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">How it Works</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleOpenSignIn}
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button 
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                onClick={handleOpenStartFundraiser}
              >
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
                <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">Browse Fundraisers</a>
                <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">Browse Causes</a>
                <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors">How it Works</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleOpenSignIn}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-rose-500 to-pink-600"
                    onClick={handleOpenStartFundraiser}
                  >
                    Start Fundraiser
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sign In Modal */}
      <SignInModal 
        open={isSignInModalOpen} 
        onOpenChange={setIsSignInModalOpen}
        onOpenStartFundraiser={handleOpenStartFundraiser}
      />

      {/* Start Fundraiser Modal */}
      <StartFundraiserModal 
        open={isStartFundraiserModalOpen} 
        onOpenChange={setIsStartFundraiserModalOpen}
        onOpenSignIn={handleOpenSignIn}
      />
    </>
  );
};

export default Header;
