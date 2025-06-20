
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { X, Eye, EyeOff, Mail, Phone, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import MobileVerificationModal from "@/components/MobileVerificationModal";

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoginSuccess?: () => void;
}

const SignInModal = ({ open, onOpenChange, onLoginSuccess }: SignInModalProps) => {
  const [loginMethod, setLoginMethod] = useState<'otp' | 'password'>('otp');
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileVerification, setShowMobileVerification] = useState(false);
  const [errors, setErrors] = useState({
    emailOrMobile: '',
    password: ''
  });
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = {
      emailOrMobile: '',
      password: ''
    };

    // Email/Mobile validation
    if (!emailOrMobile.trim()) {
      newErrors.emailOrMobile = 'Email or mobile number is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrMobile) && !/^\d{10,15}$/.test(emailOrMobile)) {
      newErrors.emailOrMobile = 'Please enter a valid email or mobile number';
    }

    // Password validation (only for password login)
    if (loginMethod === 'password' && !password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleGetOTP = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Check if it's a mobile number
      if (/^\d{10,15}$/.test(emailOrMobile)) {
        setShowMobileVerification(true);
        toast({
          title: "OTP Sent",
          description: `Verification code sent to ${emailOrMobile}`
        });
      } else {
        toast({
          title: "OTP Sent",
          description: `Verification code sent to ${emailOrMobile}`
        });
        // Handle email OTP here
      }
    }, 1500);
  };

  const handlePasswordLogin = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful!",
        description: "Welcome back!"
      });
      onLoginSuccess?.();
      onOpenChange(false);
      resetForm();
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    toast({
      title: "Google Sign In",
      description: "Google authentication integration needed"
    });
  };

  const resetForm = () => {
    setEmailOrMobile('');
    setPassword('');
    setShowPassword(false);
    setErrors({ emailOrMobile: '', password: '' });
    setLoginMethod('otp');
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === 'emailOrMobile') {
      setEmailOrMobile(value);
    } else if (field === 'password') {
      setPassword(value);
    }
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleVerificationComplete = () => {
    setShowMobileVerification(false);
    onOpenChange(false);
    onLoginSuccess?.();
    resetForm();
    toast({
      title: "Login Successful!",
      description: "Your mobile number has been verified successfully"
    });
  };

  const handleBackToLogin = () => {
    setShowMobileVerification(false);
  };

  return (
    <>
      <Dialog open={open && !showMobileVerification} onOpenChange={(isOpen) => {
        onOpenChange(isOpen);
        if (!isOpen) resetForm();
      }}>
        <DialogContent className="sm:max-w-md w-full mx-4 p-0 gap-0 bg-white">
          {/* Header */}
          <DialogHeader className="p-6 pb-4 text-center relative">
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              {loginMethod === 'otp' ? 'Login with OTP' : 'Login with Password'}
            </DialogTitle>
          </DialogHeader>

          {/* Promotional Banner */}
          <div className="mx-6 mb-6 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🎁</div>
              <div>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Save a life with just ₹10 on the Varak App.</span>
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-auto text-rose-600 border-rose-300 hover:bg-rose-50"
              >
                Download Now
              </Button>
            </div>
          </div>

          {/* Form Content */}
          <div className="px-6 pb-6 space-y-6">
            {/* Login Method Toggle */}
            <div className="flex bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setLoginMethod('otp')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  loginMethod === 'otp'
                    ? 'bg-white text-rose-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Login with OTP
              </button>
              <button
                onClick={() => setLoginMethod('password')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  loginMethod === 'password'
                    ? 'bg-white text-rose-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Login with Password
              </button>
            </div>

            {/* Email/Mobile Input */}
            <div className="space-y-2">
              <Label htmlFor="emailOrMobile" className="text-gray-600 text-sm">
                Email / Mobile Number *
              </Label>
              <div className="relative">
                {/^\d/.test(emailOrMobile) || emailOrMobile === '' ? (
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                ) : (
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                )}
                <Input
                  id="emailOrMobile"
                  type="text"
                  value={emailOrMobile}
                  onChange={(e) => handleInputChange('emailOrMobile', e.target.value)}
                  className={`pl-10 w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500 ${errors.emailOrMobile ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="Enter your email or mobile number"
                />
              </div>
              {errors.emailOrMobile && <p className="text-red-500 text-xs mt-1">{errors.emailOrMobile}</p>}
            </div>

            {/* Password Input (only for password login) */}
            {loginMethod === 'password' && (
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-600 text-sm">
                  Password *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`pl-10 pr-12 w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500 ${errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your password"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)} 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
            )}

            {/* Login Button */}
            <Button 
              onClick={loginMethod === 'otp' ? handleGetOTP : handlePasswordLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg"
            >
              {isLoading ? "Please wait..." : (loginMethod === 'otp' ? 'Get OTP' : 'Login')}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>

            <Button
              onClick={handleGoogleSignIn}
              variant="outline"
              className="w-full border-gray-300 hover:bg-gray-50 py-3 rounded-lg flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-700">Continue with Google</span>
            </Button>

            {/* Forgot Password Link (only for password login) */}
            {loginMethod === 'password' && (
              <div className="text-center">
                <button className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Terms */}
            <div className="text-center text-xs text-gray-500">
              By continuing you agree to our{' '}
              <button className="text-rose-600 hover:text-rose-700">Terms of Service</button>
              {' '}and{' '}
              <button className="text-rose-600 hover:text-rose-700">Privacy Policy</button>
            </div>

            {/* Start Fundraiser */}
            <div className="text-center text-sm text-gray-600">
              Want to start a fundraiser?{' '}
              <button className="text-rose-600 hover:text-rose-700 font-medium">
                Click here
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile Verification Modal */}
      <MobileVerificationModal
        open={showMobileVerification}
        onOpenChange={setShowMobileVerification}
        mobileNumber={emailOrMobile}
        countryCode="+91"
        onVerificationComplete={handleVerificationComplete}
        onBack={handleBackToLogin}
      />
    </>
  );
};

export default SignInModal;
