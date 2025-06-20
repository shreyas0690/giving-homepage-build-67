
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ArrowLeft, Phone, Clock, RotateCcw } from "lucide-react";
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
      <DialogContent className="w-[95vw] max-w-sm mx-auto my-4 rounded-2xl border-0 shadow-2xl bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-2">
          <div className="flex items-center justify-between mb-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex-1" />
          </div>
          
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-rose-600" />
          </div>
          
          <DialogTitle className="text-lg sm:text-xl font-bold text-gray-900">
            Verify Mobile Number
          </DialogTitle>
          
          <DialogDescription className="text-gray-600 text-xs sm:text-sm px-2">
            We've sent a 6-digit verification code to<br />
            <span className="font-medium text-gray-900">
              {countryCode} {mobileNumber}
            </span>
          </DialogDescription>
        </DialogHeader>

        <Separator className="mb-4" />

        <div className="space-y-4 px-1">
          {/* OTP Input */}
          <div className="space-y-2">
            <Label className="text-xs sm:text-sm font-medium text-gray-700 text-center block">
              Enter verification code
            </Label>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="w-8 h-8 sm:w-12 sm:h-12 text-sm sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                  <InputOTPSlot index={1} className="w-8 h-8 sm:w-12 sm:h-12 text-sm sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                  <InputOTPSlot index={2} className="w-8 h-8 sm:w-12 sm:h-12 text-sm sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                  <InputOTPSlot index={3} className="w-8 h-8 sm:w-12 sm:h-12 text-sm sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                  <InputOTPSlot index={4} className="w-8 h-8 sm:w-12 sm:h-12 text-sm sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                  <InputOTPSlot index={5} className="w-8 h-8 sm:w-12 sm:h-12 text-sm sm:text-lg border-gray-200 focus:border-rose-500 focus:ring-rose-500" />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          {/* Timer and Resend */}
          <div className="text-center">
            {!canResend ? (
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Resend code in {timeLeft}s</span>
              </div>
            ) : (
              <Button
                variant="ghost"
                onClick={handleResendOTP}
                className="text-rose-600 hover:text-rose-700 font-medium hover:bg-rose-50 text-xs sm:text-sm"
              >
                <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Resend Code
              </Button>
            )}
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerifyOTP}
            disabled={otp.length !== 6 || isVerifying}
            className="w-full h-10 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-xs sm:text-sm"
          >
            {isVerifying ? "Verifying..." : "Verify & Continue"}
          </Button>

          {/* Help Text */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Didn't receive the code? Check your messages or try resending it.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileVerificationModal;
