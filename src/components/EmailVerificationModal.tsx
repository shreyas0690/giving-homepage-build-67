
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmailVerificationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
  onVerificationComplete: () => void;
  onBack: () => void;
}

const EmailVerificationModal = ({
  open,
  onOpenChange,
  email,
  onVerificationComplete,
  onBack
}: EmailVerificationModalProps) => {
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (open && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setCanResend(true);
    }
  }, [open, timeLeft]);

  useEffect(() => {
    if (open) {
      setTimeLeft(60);
      setCanResend(false);
      setOtp('');
    }
  }, [open]);

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsVerifying(false);
      
      // Demo OTP for testing
      if (otp === '123456') {
        console.log('Email OTP verification successful for:', email);
        onVerificationComplete();
        toast({
          title: "Verification Successful",
          description: "Email verified successfully!",
        });
      } else {
        toast({
          title: "Invalid OTP",
          description: "Please enter the correct OTP sent to your email",
          variant: "destructive",
        });
        setOtp('');
      }
    }, 1500);
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      setTimeLeft(60);
      setCanResend(false);
      toast({
        title: "OTP Resent",
        description: `New verification code sent to ${email}`,
      });
      
      // Show demo OTP for testing
      setTimeout(() => {
        toast({
          title: "Demo OTP",
          description: "For demo: Your new OTP is 123456",
        });
      }, 2000);
    }, 1500);
  };

  const handleBackToLogin = () => {
    onOpenChange(false);
    onBack();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md w-full mx-4 p-0 gap-0 bg-white">
        {/* Header */}
        <DialogHeader className="p-6 pb-4 text-center relative">
          <button
            onClick={handleBackToLogin}
            className="absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </button>
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            Verify Email
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm mt-2">
            We've sent a 6-digit code to {email}
          </DialogDescription>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 pb-6 space-y-6">
          {/* Demo Info */}
          <div className="text-center text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
            <strong>Demo:</strong> Use OTP <strong>123456</strong> to verify
          </div>

          {/* OTP Input */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <InputOTP
                value={otp}
                onChange={setOtp}
                maxLength={6}
                className="gap-2"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="w-12 h-12 text-lg border-2 border-gray-300 rounded-lg focus:border-rose-500" />
                  <InputOTPSlot index={1} className="w-12 h-12 text-lg border-2 border-gray-300 rounded-lg focus:border-rose-500" />
                  <InputOTPSlot index={2} className="w-12 h-12 text-lg border-2 border-gray-300 rounded-lg focus:border-rose-500" />
                  <InputOTPSlot index={3} className="w-12 h-12 text-lg border-2 border-gray-300 rounded-lg focus:border-rose-500" />
                  <InputOTPSlot index={4} className="w-12 h-12 text-lg border-2 border-gray-300 rounded-lg focus:border-rose-500" />
                  <InputOTPSlot index={5} className="w-12 h-12 text-lg border-2 border-gray-300 rounded-lg focus:border-rose-500" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* Timer and Resend */}
            <div className="text-center text-sm text-gray-600">
              {!canResend ? (
                <p>Resend OTP in {timeLeft} seconds</p>
              ) : (
                <button
                  onClick={handleResendOTP}
                  disabled={isResending}
                  className="text-rose-600 hover:text-rose-700 font-medium hover:underline disabled:opacity-50"
                >
                  {isResending ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin inline mr-1" />
                      Resending...
                    </>
                  ) : (
                    'Resend OTP'
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerifyOTP}
            disabled={otp.length !== 6 || isVerifying}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg disabled:opacity-50"
          >
            {isVerifying ? 'Verifying...' : 'Verify Email'}
          </Button>

          {/* Help Text */}
          <div className="text-center text-xs text-gray-500">
            Didn't receive the code? Check your spam folder or try resending.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailVerificationModal;
