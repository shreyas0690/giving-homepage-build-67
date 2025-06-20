
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { Eye, EyeOff } from "lucide-react";

interface StartFundraiserModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StartFundraiserModal = ({ open, onOpenChange }: StartFundraiserModalProps) => {
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');
  const [purpose, setPurpose] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ language, purpose, name, email, password, mobile });
  };

  const content = {
    english: {
      title: "Start your fundraiser",
      purpose: "Purpose of raising funds",
      medicalTreatment: "Medical Treatment",
      cancer: "Cancer",
      name: "Name",
      namePlaceholder: "Manish Singh",
      emailRegistered: "Email as mentioned in your Aadhaar card",
      emailPlaceholder: "manishsinghdevas@gmail.com",
      createPassword: "Create a Password",
      mobile: "Mobile",
      alreadyHaveAccount: "Already have an account?",
      login: "Login",
      next: "Next"
    },
    hindi: {
      title: "अपना फंडरेज़र शुरू करें",
      purpose: "फंड जुटाने का उद्देश्य",
      medicalTreatment: "चिकित्सा उपचार",
      cancer: "कैंसर",
      name: "नाम",
      namePlaceholder: "मनीष सिंह",
      emailRegistered: "आपके आधार कार्ड में उल्लिखित ईमेल",
      emailPlaceholder: "manishsinghdevas@gmail.com",
      createPassword: "पासवर्ड बनाएं",
      mobile: "मोबाइल",
      alreadyHaveAccount: "पहले से खाता है?",
      login: "लॉगिन",
      next: "अगला"
    }
  };

  const t = content[language];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl p-0 overflow-hidden">
        {/* Language Selection Header */}
        <div className="bg-gray-600 p-4">
          <div className="flex gap-2 mb-4">
            <Toggle
              pressed={language === 'english'}
              onPressedChange={() => setLanguage('english')}
              className="bg-white text-gray-800 border border-gray-300 px-3 py-1 text-sm data-[state=on]:bg-white data-[state=on]:text-gray-800"
            >
              English
            </Toggle>
            <Toggle
              pressed={language === 'hindi'}
              onPressedChange={() => setLanguage('hindi')}
              className="bg-transparent text-white border border-white px-3 py-1 text-sm hover:bg-white hover:text-gray-800 data-[state=on]:bg-white data-[state=on]:text-gray-800"
            >
              हिंदी
            </Toggle>
          </div>
          
          <DialogHeader>
            <DialogTitle className="text-white text-center text-lg font-medium">
              {t.title}
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Purpose Selection */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">{t.purpose}</Label>
              <Select value={purpose} onValueChange={setPurpose}>
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder={t.medicalTreatment} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medical-treatment">{t.medicalTreatment}</SelectItem>
                  <SelectItem value="cancer">{t.cancer}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name Field */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">{t.name} *</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.namePlaceholder}
                className="border-gray-300"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium text-sm">{t.emailRegistered}</Label>
              <div className="relative">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="border-gray-300 pr-10"
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 bg-rose-500 rounded text-white flex items-center justify-center text-xs">
                    ✓
                  </div>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">{t.createPassword} *</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="border-gray-300 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Mobile Field */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">{t.mobile} *</Label>
              <div className="flex">
                <div className="flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md">
                  <span className="text-orange-500 mr-1">🇮🇳</span>
                  <span className="text-gray-600">+91</span>
                </div>
                <Input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="7000169166"
                  className="border-gray-300 rounded-l-none flex-1"
                  required
                />
              </div>
            </div>

            {/* Login Link */}
            <div className="text-center py-2">
              <span className="text-gray-600 text-sm">{t.alreadyHaveAccount} </span>
              <button
                type="button"
                className="text-rose-500 text-sm font-medium hover:underline"
                onClick={() => {/* Handle login */}}
              >
                {t.login}
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-3 rounded-md font-medium"
            >
              {t.next}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StartFundraiserModal;
