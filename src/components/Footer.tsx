
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="text-2xl font-bold">FundHope</span>
            </div>
            
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

            {/* Contact Info */}
            <div className="space-y-3">
              <div>
                <div className="text-white font-semibold mb-2">For any queries</div>
                <div className="text-gray-300">Email: support@fundhope.com</div>
                <div className="text-gray-300">Contact No: +1 (555) 123-4567</div>
              </div>
              
              <div>
                <div className="text-white font-semibold mb-2">For any Media & PR queries</div>
                <div className="text-gray-300">Email: pr@fundhope.com</div>
                <div className="text-gray-300">Contact No: +1 (555) 123-4568</div>
              </div>
            </div>
          </div>

          {/* Causes */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Causes</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Medical crowdfunding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Cancer Crowdfunding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Transplant Crowdfunding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Education Crowdfunding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Sports Crowdfunding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Child Welfare</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Animal Fundraisers</a></li>
            </ul>
          </div>

          {/* How it works */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">How it works?</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Fundraising for NGOs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Sponsor A Child</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Fundraising Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">What is Crowdfunding?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Corporates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Withdraw Funds</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Browse Fundraiser</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Find Hospitals</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">About Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Team FundHope</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">In The News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Web Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">FundHope Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Is FundHope Genuine?</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Medical Finance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">FAQs & Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Are FundHope Campaigns Genuine?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Fundraiser Video</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Plans & Pricing*</a></li>
              <li><a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
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

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
              <span>Copyright © 2024 FundHope Online Ventures Pvt Ltd. All Rights Reserved.</span>
              <a href="#" className="hover:text-rose-400 transition-colors">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-rose-400 transition-colors">AML Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-rose-400 transition-colors">Use of cookies</a>
            </div>
            <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
              FundHope is a private limited company operating an online intermediary platform providing crowdfunding services for medical, social and charitable causes. We facilitate transactions between contributors and campaigners. FundHope does not provide any financial benefits in any form whatsoever to any person making contributions on its platform.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
