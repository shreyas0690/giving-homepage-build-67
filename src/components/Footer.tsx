
import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#111827" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info - Left Column */}
          <div className="lg:col-span-1 space-y-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start -space-x-2">
              <img 
                src="/lovable-uploads/6f963d4c-07e4-448f-9377-5fee8010d0fc.png" 
                alt="Varak Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16"
              />
              <span className="text-xl sm:text-2xl font-bold">Varak</span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>

            {/* Followers Count */}
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-bold text-white">2.5M +</div>
              <div className="text-gray-300 text-sm">Followers</div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 text-center sm:text-left">
              <div>
                <div className="text-white font-semibold mb-2">For any queries</div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>Email: info@varak.org</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm mt-1">
                  <Phone className="h-4 w-4" />
                  <span>Contact No: +91 9930088522</span>
                </div>
              </div>

              <div>
                <div className="text-white font-semibold mb-2">For any Media & PR queries</div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>Email: pr@varak.org</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm mt-1">
                  <Phone className="h-4 w-4" />
                  <span>Contact No: +91 9930088551</span>
                </div>
              </div>
            </div>
          </div>

          {/* Causes */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-6 text-white">Causes</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Medical crowdfunding</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Cancer Crowdfunding</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Transplant Crowdfunding</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Education Crowdfunding</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Sports Crowdfunding</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Child Welfare</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Animal Fundraisers</a></li>
            </ul>
          </div>

          {/* How it works? */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-6 text-white">How it works?</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Fundraising for NGOs</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Sponsor A Child</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Fundraising Tips</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">What is Crowdfunding?</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Corporates</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Withdraw Funds</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Browse Fundraiser</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Find Hospitals</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-6 text-white">About Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Team Varak</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">In The News</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Web Stories</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Varak Blog</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Success Stories</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Is Varak Genuine?</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Medical Finance</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">FAQs & Help Center</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Are Varak Campaigns Genuine?</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Fundraiser Video</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Trust & Safety</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Plans & Pricing*</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 sm:h-8 bg-white px-2 py-1 rounded" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="MasterCard" className="h-6 sm:h-8 bg-white px-2 py-1 rounded" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/1200px-American_Express_logo.svg.png" alt="American Express" className="h-5 sm:h-7 bg-white px-2 py-1 rounded" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6 sm:h-8 bg-white px-2 py-1 rounded" />
            <div className="bg-white px-2 sm:px-3 py-1 sm:py-2 rounded">
              <span className="text-blue-600 font-bold text-xs sm:text-sm">NET BANKING</span>
            </div>
            <div className="bg-orange-500 px-2 sm:px-3 py-1 sm:py-2 rounded flex items-center">
              <span className="text-white font-bold text-xs sm:text-sm">🔒 100% Secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center space-y-3">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
              <span className="block sm:inline">Copyright © 2025 Varak Online Ventures Pvt Ltd. All Rights Reserved.</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-white transition-colors">AML Policy</a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-white transition-colors">Use of cookies</a>
            </div>
            <div className="text-xs sm:text-sm text-gray-300 max-w-4xl mx-auto px-4">
              Varak is a private limited company operating an online intermediary platform providing crowdfunding services for medical, social and charitable causes. We facilitate transactions between contributors and campaigners. Varak does not provide any financial benefits in any form whatsoever to any person making contributions on its platform.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
