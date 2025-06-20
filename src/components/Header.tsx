
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center -space-x-2 group">
              <img 
                src="/lovable-uploads/6f963d4c-07e4-448f-9377-5fee8010d0fc.png" 
                alt="Varak Logo" 
                className="h-16 w-16 transition-transform group-hover:scale-105"
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Varak
              </span>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-rose-600 transition-colors bg-transparent hover:bg-rose-50 font-medium">
                    Fundraise For
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Medical Treatment</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get help with medical expenses and treatments
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Education</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Support students and educational initiatives
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Emergency</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Urgent causes that need immediate help
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Community</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Local community projects and initiatives
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-rose-50 hover:text-rose-600 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    How it Works
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleOpenSignIn}
                className="border-2 border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 font-medium px-6 transition-all duration-200"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              
              <Button 
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 font-medium px-6"
                onClick={handleOpenStartFundraiser}
              >
                Start Fundraiser
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-100 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <div className="space-y-3">
                  <details className="group">
                    <summary className="flex justify-between items-center text-gray-700 hover:text-rose-500 transition-colors cursor-pointer font-medium">
                      Fundraise For
                      <svg className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-3 ml-4 space-y-2">
                      <a href="#" className="block text-sm text-gray-600 hover:text-rose-500 transition-colors">Medical Treatment</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-rose-500 transition-colors">Education</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-rose-500 transition-colors">Emergency</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-rose-500 transition-colors">Community</a>
                    </div>
                  </details>
                  
                  <a href="#" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">How it Works</a>
                </div>
                
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleOpenSignIn}
                    className="border-2 border-rose-200 text-rose-600 hover:bg-rose-50 font-medium"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 font-medium"
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
