
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, User, Mail, Eye, EyeOff, Phone } from "lucide-react";

interface StartFundraiserModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StartFundraiserModal = ({ open, onOpenChange }: StartFundraiserModalProps) => {
  const [language, setLanguage] = useState('english');
  const [purpose, setPurpose] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [country, setCountry] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isHindi = language === 'hindi';

  const translations = {
    english: {
      title: "Start your fundraiser",
      purpose: "Purpose of raising funds",
      medicalTreatment: "Medical Treatment",
      cancer: "Cancer",
      name: "Name",
      namePlaceholder: "Name as mentioned in your Aadhar card",
      email: "Email Address",
      fieldRequired: "Field Required",
      createPassword: "Create a Password",
      mobile: "Mobile",
      validNumber: "Please enter a valid number",
      country: "Country",
      selectCountry: "Select Country",
      alreadyAccount: "Already have an account?",
      login: "Login",
      next: "Next"
    },
    hindi: {
      title: "अपना फंडरेज़र शुरू करें",
      purpose: "फंड जुटाने का उद्देश्य",
      medicalTreatment: "चिकित्सा उपचार",
      cancer: "कैंसर",
      name: "नाम",
      namePlaceholder: "आधार कार्ड में उल्लिखित नाम",
      email: "ईमेल पता",
      fieldRequired: "फील्ड आवश्यक",
      createPassword: "पासवर्ड बनाएं",
      mobile: "मोबाइल",
      validNumber: "कृपया एक वैध नंबर दर्ज करें",
      country: "देश",
      selectCountry: "देश चुनें",
      alreadyAccount: "क्या आपका पहले से खाता है?",
      login: "लॉगिन",
      next: "अगला"
    }
  };

  const t = translations[language as keyof typeof translations];

  const countries = [
    { value: 'in', label: 'India', flag: '🇮🇳' },
    { value: 'us', label: 'United States', flag: '🇺🇸' },
    { value: 'uk', label: 'United Kingdom', flag: '🇬🇧' },
    { value: 'ca', label: 'Canada', flag: '🇨🇦' },
    { value: 'au', label: 'Australia', flag: '🇦🇺' },
    { value: 'de', label: 'Germany', flag: '🇩🇪' },
    { value: 'fr', label: 'France', flag: '🇫🇷' },
    { value: 'jp', label: 'Japan', flag: '🇯🇵' },
    { value: 'br', label: 'Brazil', flag: '🇧🇷' },
    { value: 'mx', label: 'Mexico', flag: '🇲🇽' }
  ];

  const handleNext = () => {
    console.log('Form submitted:', { purpose, name, email, password, mobile, country });
    // Handle form submission
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md w-full mx-4 p-0 gap-0 bg-white max-h-[90vh] overflow-y-auto rounded-2xl">
        {/* Header with Language Toggle */}
        <DialogHeader className="p-6 pb-4 text-center relative">
          <div className="absolute left-6 top-6">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-24 h-8 text-xs border border-gray-300 rounded-md bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">हिंदी</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          
          <DialogTitle className="text-xl font-semibold text-gray-900 pt-2">
            {t.title}
          </DialogTitle>
        </DialogHeader>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-200"></div>

        {/* Form Content */}
        <div className="px-6 py-6 space-y-5">
          {/* Purpose Dropdown */}
          <div className="space-y-2">
            <Label className="text-gray-700 text-sm font-medium">
              {t.purpose}
            </Label>
            <Select value={purpose} onValueChange={setPurpose}>
              <SelectTrigger className="w-full border border-gray-300 rounded-md focus:border-rose-500 focus:ring-1 focus:ring-rose-500 bg-gray-50 h-11">
                <SelectValue placeholder={t.medicalTreatment} />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <SelectItem value="medical-treatment">{t.medicalTreatment}</SelectItem>
                <SelectItem value="cancer">{t.cancer}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 text-sm font-medium">
              {t.name} *
            </Label>
            <div className="relative">
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md focus:border-rose-500 focus:ring-1 focus:ring-rose-500 pr-10 h-11"
                placeholder=""
              />
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500">{t.namePlaceholder}</p>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-rose-500 text-sm font-medium">
              {t.email} *
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md focus:border-rose-500 focus:ring-1 focus:ring-rose-500 pr-10 h-11"
                placeholder=""
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-rose-500" />
            </div>
            <p className="text-xs text-rose-500">{t.fieldRequired}</p>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-rose-500 text-sm font-medium">
              {t.createPassword} *
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md focus:border-rose-500 focus:ring-1 focus:ring-rose-500 pr-10 h-11"
                placeholder=""
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-rose-500" />
                ) : (
                  <Eye className="h-4 w-4 text-rose-500" />
                )}
              </button>
            </div>
            <p className="text-xs text-rose-500">{t.fieldRequired}</p>
          </div>

          {/* Mobile Field */}
          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-rose-500 text-sm font-medium">
              🇮🇳 {t.mobile} *
            </Label>
            <div className="relative">
              <Input
                id="mobile"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border border-gray-300 rounded-md focus:border-rose-500 focus:ring-1 focus:ring-rose-500 pr-10 h-11"
                placeholder=""
              />
              <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-rose-500" />
            </div>
            <p className="text-xs text-rose-500">{t.validNumber}</p>
          </div>

          {/* Country Field */}
          <div className="space-y-2">
            <Label className="text-gray-700 text-sm font-medium">
              {t.country}
            </Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="w-full border border-gray-300 rounded-md focus:border-rose-500 focus:ring-1 focus:ring-rose-500 bg-gray-50 h-11">
                <SelectValue placeholder={t.selectCountry} />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 rounded-md shadow-lg z-50">
                {countries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    <span className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span>{country.label}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Login Link */}
          <div className="text-center text-sm text-gray-600 pt-4">
            {t.alreadyAccount}{' '}
            <button className="text-rose-500 hover:text-rose-600 font-medium">
              {t.login}
            </button>
          </div>

          {/* Next Button */}
          <Button 
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg mt-6 h-12"
          >
            {t.next}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StartFundraiserModal;
