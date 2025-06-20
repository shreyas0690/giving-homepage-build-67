
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, User, Mail, Lock, Phone } from "lucide-react";

interface StartFundraiserModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const countries = [{
  code: '+1',
  name: 'US',
  flag: '🇺🇸'
}, {
  code: '+44',
  name: 'UK',
  flag: '🇬🇧'
}, {
  code: '+91',
  name: 'IN',
  flag: '🇮🇳'
}, {
  code: '+86',
  name: 'CN',
  flag: '🇨🇳'
}, {
  code: '+81',
  name: 'JP',
  flag: '🇯🇵'
}, {
  code: '+49',
  name: 'DE',
  flag: '🇩🇪'
}, {
  code: '+33',
  name: 'FR',
  flag: '🇫🇷'
}, {
  code: '+39',
  name: 'IT',
  flag: '🇮🇹'
}, {
  code: '+34',
  name: 'ES',
  flag: '🇪🇸'
}, {
  code: '+61',
  name: 'AU',
  flag: '🇦🇺'
}, {
  code: '+55',
  name: 'BR',
  flag: '🇧🇷'
}, {
  code: '+7',
  name: 'RU',
  flag: '🇷🇺'
}, {
  code: '+82',
  name: 'KR',
  flag: '🇰🇷'
}, {
  code: '+92',
  name: 'PK',
  flag: '🇵🇰'
}, {
  code: '+880',
  name: 'BD',
  flag: '🇧🇩'
}];

const StartFundraiserModal = ({
  open,
  onOpenChange
}: StartFundraiserModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
  const [language, setLanguage] = useState('english');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'Language:', language);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm w-full mx-4 rounded-2xl border-0 shadow-2xl bg-white">
        <DialogHeader className="text-center pb-2">
          <DialogTitle className="text-xl font-bold text-gray-900">
            Start Your Fundraiser
          </DialogTitle>
        </DialogHeader>

        {/* Language Selection */}
        <div className="flex justify-center mb-2">
          <RadioGroup
            value={language}
            onValueChange={setLanguage}
            className="flex flex-row gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="english" id="english" />
              <Label htmlFor="english" className="text-sm font-medium text-gray-700 cursor-pointer">
                English
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hindi" id="hindi" />
              <Label htmlFor="hindi" className="text-sm font-medium text-gray-700 cursor-pointer">
                हिंदी
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Separator className="mb-4" />

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-1">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your full name" 
                value={formData.name} 
                onChange={e => handleInputChange('name', e.target.value)} 
                className="pl-10 h-10 border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200" 
                required 
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email address" 
                value={formData.email} 
                onChange={e => handleInputChange('email', e.target.value)} 
                className="pl-10 h-10 border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200" 
                required 
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Create Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"} 
                placeholder="Create a strong password" 
                value={formData.password} 
                onChange={e => handleInputChange('password', e.target.value)} 
                className="pl-10 pr-12 h-10 border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200" 
                required 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Field with Country Code */}
          <div className="space-y-1">
            <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">
              Mobile Number
            </Label>
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-24 h-10 border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(country => (
                    <SelectItem key={country.code} value={country.code}>
                      <div className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.code}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="relative flex-1">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  id="mobile" 
                  type="tel" 
                  placeholder="Enter mobile number" 
                  value={formData.mobile} 
                  onChange={e => handleInputChange('mobile', e.target.value)} 
                  className="pl-10 h-10 border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200" 
                  required 
                />
              </div>
            </div>
          </div>

          {/* Already have account link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button 
                type="button" 
                className="text-rose-600 hover:text-rose-700 font-medium hover:underline transition-colors" 
                onClick={() => {
                  // Handle login modal opening
                  console.log('Open login modal');
                }}
              >
                Login
              </button>
            </p>
          </div>

          {/* Next Button */}
          <Button 
            type="submit" 
            className="w-full h-10 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
          >
            Next
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StartFundraiserModal;
