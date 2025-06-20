
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInModal = ({ open, onOpenChange }: SignInModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const { toast } = useToast();

  const handleGetOTP = () => {
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email or mobile number",
        variant: "destructive",
      });
      return;
    }
    
    console.log('Get OTP clicked for:', email);
    toast({
      title: "OTP Sent",
      description: `OTP has been sent to ${email}`,
    });
  };

  const handlePasswordLogin = () => {
    if (!email.trim() || !password.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    console.log('Password login clicked for:', email, password);
    toast({
      title: "Login Successful",
      description: "Welcome back!",
    });
    onOpenChange(false);
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
    toast({
      title: "Google Sign In",
      description: "Redirecting to Google...",
    });
  };

  const handleBackToOTP = () => {
    setShowPasswordLogin(false);
    setPassword('');
  };

  const handleForgotPassword = () => {
    onOpenChange(false);
    setIsForgotPasswordOpen(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
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
            {!showPasswordLogin ? (
              <>
                {/* Email Input for OTP */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-600 text-sm">
                    Email / Mobile Number *
                  </Label>
                  <Input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    placeholder="Enter your email or mobile number"
                  />
                </div>

                {/* OTP Login Button */}
                <Button 
                  onClick={handleGetOTP}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg"
                >
                  Get OTP
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
                    className="text-rose-600 hover:text-rose-700 text-sm font-medium"
                  >
                    Login via Password
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Password Login Form */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-gray-600 text-sm">
                      Email / Mobile Number *
                    </Label>
                    <Input
                      id="login-email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                </div>

                {/* Login Button */}
                <Button 
                  onClick={handlePasswordLogin}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg"
                >
                  Login
                </Button>

                {/* Forgot Password */}
                <div className="text-center">
                  <button 
                    onClick={handleForgotPassword}
                    className="text-rose-600 hover:text-rose-700 text-sm font-medium"
                  >
                    Forgot Password?
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

      {/* Forgot Password Modal */}
      <ForgotPasswordModal 
        open={isForgotPasswordOpen} 
        onOpenChange={setIsForgotPasswordOpen} 
      />
    </>
  );
};

export default SignInModal;
