import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ArrowLeft, Phone, Clock, RotateCcw, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MobileVerificationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mobileNumber: string;
  countryCode: string;
  onVerificationComplete: () => void;
  onBack: () => void;
}

const MobileVerificationModal = ({
  open,
  onOpenChange,
  mobileNumber,
  countryCode,
  onVerificationComplete,
  onBack
}: MobileVerificationModalProps) => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (open && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setCanResend(true);
    }
  }, [timeLeft, open]);

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the complete 6-digit OTP",
        variant: "destructive"
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate API call
    setTimeout(() => {
      if (otp === '123456') {
        toast({
          title: "Mobile Verified!",
          description: "Your mobile number has been successfully verified"
        });
        onVerificationComplete();
      } else {
        toast({
          title: "Invalid OTP",
          description: "The OTP you entered is incorrect. Please try again.",
          variant: "destructive"
        });
      }
      setIsVerifying(false);
    }, 2000);
  };

  const handleResendOTP = () => {
    setTimeLeft(60);
    setCanResend(false);
    setOtp('');
    toast({
      title: "OTP Sent",
      description: "A new OTP has been sent to your mobile number"
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-sm mx-auto my-4 rounded-2xl border-0 shadow-2xl bg-white max-h-[90vh] overflow-hidden p-0" hideCloseButton>
        <div className="gradient-header-fix"></div>
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-6 relative rounded-gradient-header">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="absolute left-3 top-3 p-2 hover:bg-white/20 text-white rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <button 
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-1.5 backdrop-blur-sm transition-colors hover:bg-white/30 focus:outline-none"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-white" />
          </button>
          
          <DialogHeader className="text-center pb-0 pt-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            
            <DialogTitle className="text-xl sm:text-2xl font-bold text-white">
              Verify Mobile Number
            </DialogTitle>
            
            <DialogDescription className="text-white/90 text-sm mt-2">
              We've sent a 6-digit verification code to<br />
              <span className="font-medium text-white">
                {countryCode} {mobileNumber}
              </span>
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 bg-white relative z-10 shadow-inner">
          <div className="space-y-5">
            {/* OTP Input */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700 text-center block">
                Enter verification code
              </Label>
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="w-9 h-12 sm:w-12 sm:h-14 text-base sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                    <InputOTPSlot index={1} className="w-9 h-12 sm:w-12 sm:h-14 text-base sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                    <InputOTPSlot index={2} className="w-9 h-12 sm:w-12 sm:h-14 text-base sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                    <InputOTPSlot index={3} className="w-9 h-12 sm:w-12 sm:h-14 text-base sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                    <InputOTPSlot index={4} className="w-9 h-12 sm:w-12 sm:h-14 text-base sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                    <InputOTPSlot index={5} className="w-9 h-12 sm:w-12 sm:h-14 text-base sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>

            {/* Timer and Resend */}
            <div className="text-center py-1">
              {!canResend ? (
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Resend code in {timeLeft}s</span>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  onClick={handleResendOTP}
                  className="text-rose-600 hover:text-rose-700 font-medium hover:bg-rose-50 text-sm"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Resend Code
                </Button>
              )}
            </div>

            {/* Verify Button */}
            <Button
              onClick={handleVerifyOTP}
              disabled={otp.length !== 6 || isVerifying}
              className="w-full h-12 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-base"
            >
              {isVerifying ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </div>
              ) : "Verify & Continue"}
            </Button>

            {/* Help Text */}
            <div className="text-center">
              <p className="text-xs text-gray-500">
                Didn't receive the code? Check your messages or try resending it.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileVerificationModal;
