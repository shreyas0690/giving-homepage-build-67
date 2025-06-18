
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info - Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="text-2xl font-bold">FundHope</span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              FundHope is a private limited company operating an online intermediary platform providing crowdfunding services for medical, social and charitable causes.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>

            {/* Followers Count */}
            <div>
              <div className="text-2xl font-bold text-white">2.5M +</div>
              <div className="text-rose-400 text-sm">Followers</div>
            </div>
          </div>

          {/* Three Columns for Links */}
          <div className="lg:col-span-3">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
              
              {/* Popular Causes */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Popular Causes</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">Medical crowdfunding</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">Cancer Crowdfunding</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">Transplant Crowdfunding</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">Education Crowdfunding</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">Sports Crowdfunding</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">Child Welfare</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">Animal Fundraisers</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">How it works?</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">Fundraising Tips</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">What is Crowdfunding?</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">Browse Fundraiser</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">Success Stories</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">FAQs & Help Center</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">Contact Us</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-rose-500 mt-1 flex-shrink-0" />
                    <div className="text-gray-300 text-sm">
                      123 Crowdfunding Street<br />
                      Hope City, HC 12345<br />
                      United States
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-rose-500" />
                    <div className="text-gray-300 text-sm">+1 (555) 123-4567</div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-rose-500" />
                    <div className="text-gray-300 text-sm">support@fundhope.com</div>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="mt-6">
                  <h4 className="text-white font-semibold mb-3">Newsletter</h4>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-rose-500"
                    />
                    <Button className="bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-r-md text-sm">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center mb-6">
            <h4 className="text-white font-semibold mb-4">We Accept</h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="bg-white px-3 py-2 rounded">
                <span className="text-blue-600 font-bold text-sm">VISA</span>
              </div>
              <div className="bg-white px-3 py-2 rounded">
                <span className="text-red-600 font-bold text-sm">MasterCard</span>
              </div>
              <div className="bg-white px-3 py-2 rounded">
                <span className="text-blue-600 font-bold text-sm">American Express</span>
              </div>
              <div className="bg-white px-3 py-2 rounded">
                <span className="text-blue-600 font-bold text-sm">RuPay</span>
              </div>
              <div className="bg-white px-3 py-2 rounded">
                <span className="text-gray-800 font-bold text-sm">UPI</span>
              </div>
              <div className="bg-green-600 px-3 py-2 rounded flex items-center">
                <span className="text-white font-bold text-sm">🔒 100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              Copyright © 2024 FundHope Online Ventures Pvt Ltd. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-rose-400 transition-colors">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-rose-400 transition-colors">AML Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-rose-400 transition-colors">Use of cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
