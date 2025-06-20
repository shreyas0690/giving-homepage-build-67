import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import MobileVerificationModal from "@/components/MobileVerificationModal";
import EmailVerificationModal from "@/components/EmailVerificationModal";

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenStartFundraiser?: () => void;
}

const SignInModal = ({ open, onOpenChange, onOpenStartFundraiser }: SignInModalProps) => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isMobileVerificationOpen, setIsMobileVerificationOpen] = useState(false);
  const [isEmailVerificationOpen, setIsEmailVerificationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const { toast } = useToast();

  // Function to detect if input is mobile number
  const isMobileNumber = (input: string) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(input.replace(/\s+/g, ''));
  };

  // Function to detect if input is email
  const isEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleGetOTP = async () => {
    if (!emailOrMobile.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email or mobile number",
        variant: "destructive",
      });
      return;
    }

    const cleanInput = emailOrMobile.trim();
    
    if (!isEmail(cleanInput) && !isMobileNumber(cleanInput)) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid email address or 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      
      if (isMobileNumber(cleanInput)) {
        // Mobile number - open mobile verification modal
        console.log('OTP requested for mobile:', cleanInput);
        onOpenChange(false);
        setIsMobileVerificationOpen(true);
        toast({
          title: "OTP Sent",
          description: `Verification code sent to ${countryCode} ${cleanInput}`,
        });
      } else {
        // Email - open email verification modal
        console.log('OTP requested for email:', cleanInput);
        onOpenChange(false);
        setIsEmailVerificationOpen(true);
        toast({
          title: "OTP Sent",
          description: `Verification code sent to ${cleanInput}. Please check your email.`,
        });
      }
    }, 1500);
  };

  const handlePasswordLogin = async () => {
    if (!emailOrMobile.trim() || !password.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const cleanInput = emailOrMobile.trim();
    
    if (!isEmail(cleanInput) && !isMobileNumber(cleanInput)) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid email address or mobile number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate login validation
    setTimeout(() => {
      setIsLoading(false);
      
      // Demo credentials for testing
      const validCredentials = [
        { user: 'demo@example.com', pass: 'password123' },
        { user: '9876543210', pass: 'mobile123' }
      ];
      
      const isValidLogin = validCredentials.some(
        cred => cred.user === cleanInput && cred.pass === password
      );
      
      if (isValidLogin) {
        console.log('Password login successful for:', cleanInput);
        toast({
          title: "Login Successful",
          description: `Welcome back! Logged in as ${cleanInput}`,
        });
        onOpenChange(false);
        resetForm();
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Try demo@example.com / password123 or 9876543210 / mobile123",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
    toast({
      title: "Google Sign In",
      description: "Redirecting to Google OAuth...",
    });
    
    // Simulate Google OAuth flow
    setTimeout(() => {
      toast({
        title: "Google Login Successful",
        description: "Successfully signed in with Google account",
      });
      onOpenChange(false);
      resetForm();
    }, 2000);
  };

  const handleBackToOTP = () => {
    setShowPasswordLogin(false);
    setPassword('');
  };

  const handleForgotPassword = () => {
    onOpenChange(false);
    setIsForgotPasswordOpen(true);
  };

  const handleLoginViaOTP = () => {
    setShowPasswordLogin(false);
    setPassword('');
  };

  const handleMobileVerificationComplete = () => {
    setIsMobileVerificationOpen(false);
    toast({
      title: "Login Successful",
      description: "Mobile number verified successfully! You are now logged in.",
    });
    resetForm();
  };

  const handleEmailVerificationComplete = () => {
    setIsEmailVerificationOpen(false);
    toast({
      title: "Login Successful",
      description: "Email verified successfully! You are now logged in.",
    });
    resetForm();
  };

  const handleMobileVerificationBack = () => {
    setIsMobileVerificationOpen(false);
    onOpenChange(true);
  };

  const handleEmailVerificationBack = () => {
    setIsEmailVerificationOpen(false);
    onOpenChange(true);
  };

  const resetForm = () => {
    setEmailOrMobile('');
    setPassword('');
    setShowPasswordLogin(false);
  };

  const handleStartFundraiser = () => {
    onOpenChange(false);
    if (onOpenStartFundraiser) {
      onOpenStartFundraiser();
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md w-full mx-4 p-0 gap-0 bg-white">
          {/* Header */}
          <DialogHeader className="p-6 pb-4 text-center relative">
            {/* ... keep existing code (close button and back button) */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
            {showPasswordLogin && (
              <button
                onClick={handleBackToOTP}
                className="absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </button>
            )}
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              {showPasswordLogin ? 'Login with Password' : 'Login'}
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-sm mt-2">
              {showPasswordLogin 
                ? 'Enter your credentials to continue' 
                : 'Enter your email or mobile number to get started'
              }
            </DialogDescription>
          </DialogHeader>

          {/* Promotional Banner */}
          <div className="mx-6 mb-6 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-lg p-4">
            {/* ... keep existing code (promotional banner content) */}
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
            {!showPasswordLogin ? (
              <>
                {/* Email/Mobile Input for OTP */}
                <div className="space-y-2">
                  {/* ... keep existing code (email/mobile input fields and validation) */}
                  <Label htmlFor="email" className="text-gray-600 text-sm">
                    Email / Mobile Number *
                  </Label>
                  <div className="flex gap-2">
                    {/* Country Code Selector (shown only when typing mobile) */}
                    {isMobileNumber(emailOrMobile) && (
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-20 px-2 py-2 border border-gray-300 rounded-md focus:border-rose-500 focus:ring-rose-500 text-sm"
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                    )}
                    <Input
                      id="email"
                      type="text"
                      value={emailOrMobile}
                      onChange={(e) => setEmailOrMobile(e.target.value)}
                      className="flex-1 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                      placeholder="Enter email or 10-digit mobile number"
                    />
                  </div>
                  {emailOrMobile && (
                    <p className="text-xs text-gray-500">
                      {isMobileNumber(emailOrMobile) 
                        ? '📱 Mobile number detected - OTP will be sent via SMS'
                        : isEmail(emailOrMobile)
                        ? '📧 Email detected - OTP will be sent to your inbox'
                        : '⚠️ Please enter a valid email or 10-digit mobile number'
                      }
                    </p>
                  )}
                </div>

                {/* OTP Login Button */}
                <Button 
                  onClick={handleGetOTP}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg"
                >
                  {isLoading ? 'Sending OTP...' : 'Get OTP'}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">OR</span>
                  </div>
                </div>

                {/* Google Sign In */}
                <Button
                  onClick={handleGoogleSignIn}
                  variant="outline"
                  className="w-full border-gray-300 hover:bg-gray-50 py-3 rounded-lg flex items-center justify-center gap-3"
                >
                  {/* ... keep existing code (Google icon SVG) */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-gray-700">Sign in with Google</span>
                </Button>

                {/* Login via Password Link */}
                <div className="text-center">
                  <button 
                    onClick={() => setShowPasswordLogin(true)}
                    className="text-rose-600 hover:text-rose-700 hover:underline text-sm font-medium"
                  >
                    Login via Password
                  </button>
                </div>

                {/* Start Fundraiser Link */}
                <div className="text-center text-sm text-gray-600">
                  Want to start a fundraiser?{' '}
                  <button 
                    className="text-rose-600 hover:text-rose-700 font-medium hover:underline transition-colors"
                    onClick={handleStartFundraiser}
                  >
                    Click here
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Password Login Form */}
                <div className="space-y-4">
                  {/* ... keep existing code (password login form fields) */}
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-gray-600 text-sm">
                      Email / Mobile Number *
                    </Label>
                    <Input
                      id="login-email"
                      type="text"
                      value={emailOrMobile}
                      onChange={(e) => setEmailOrMobile(e.target.value)}
                      className="w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                      placeholder="Enter your email or mobile number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-600 text-sm">
                      Password *
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                      placeholder="Enter your password"
                    />
                  </div>
                  
                  {/* Demo Credentials Hint */}
                  <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                    <strong>Demo Credentials:</strong><br />
                    Email: demo@example.com / password123<br />
                    Mobile: 9876543210 / mobile123
                  </div>
                </div>

                {/* Login Button */}
                <Button 
                  onClick={handlePasswordLogin}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg"
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>

                {/* Forgot Password and Login via OTP */}
                <div className="flex justify-center items-center gap-4 text-center">
                  <button 
                    onClick={handleForgotPassword}
                    className="text-rose-600 hover:text-rose-700 hover:underline text-sm font-medium"
                  >
                    Forgot Password?
                  </button>
                  <span className="text-gray-400">|</span>
                  <button 
                    onClick={handleLoginViaOTP}
                    className="text-rose-600 hover:text-rose-700 hover:underline text-sm font-medium"
                  >
                    Login via OTP
                  </button>
                </div>

                {/* Start Fundraiser Link for Password Login */}
                <div className="text-center text-sm text-gray-600">
                  Want to start a fundraiser?{' '}
                  <button 
                    className="text-rose-600 hover:text-rose-700 font-medium hover:underline transition-colors"
                    onClick={handleStartFundraiser}
                  >
                    Click here
                  </button>
                </div>
              </>
            )}

            {/* Terms */}
            <div className="text-center text-xs text-gray-500">
              By continuing you agree to our{' '}
              <button className="text-rose-600 hover:text-rose-700">Terms of Service</button>
              {' '}and{' '}
              <button className="text-rose-600 hover:text-rose-700">Privacy Policy</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal 
        open={isForgotPasswordOpen} 
        onOpenChange={setIsForgotPasswordOpen} 
      />

      {/* Mobile Verification Modal */}
      <MobileVerificationModal
        open={isMobileVerificationOpen}
        onOpenChange={setIsMobileVerificationOpen}
        mobileNumber={emailOrMobile}
        countryCode={countryCode}
        onVerificationComplete={handleMobileVerificationComplete}
        onBack={handleMobileVerificationBack}
      />

      {/* Email Verification Modal */}
      <EmailVerificationModal
        open={isEmailVerificationOpen}
        onOpenChange={setIsEmailVerificationOpen}
        email={emailOrMobile}
        onVerificationComplete={handleEmailVerificationComplete}
        onBack={handleEmailVerificationBack}
      />
    </>
  );
};

export default SignInModal;
