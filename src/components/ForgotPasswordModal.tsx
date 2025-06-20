
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ForgotPasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ForgotPasswordModal = ({ open, onOpenChange }: ForgotPasswordModalProps) => {
  const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const { toast } = useToast();

  const handleSendOTP = async () => {
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
      setResendTimer(60);
      const countdown = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      toast({
        title: "OTP Sent",
        description: `Password reset OTP has been sent to ${email}`,
      });
    }, 1500);
  };

  const handleVerifyOTP = async () => {
    if (!otp.trim()) {
      toast({
        title: "Error",
        description: "Please enter the OTP",
        variant: "destructive",
      });
      return;
    }

    if (otp !== '123456') {
      toast({
        title: "Invalid OTP",
        description: "Please enter the correct OTP",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('reset');
      toast({
        title: "OTP Verified",
        description: "Please set your new password",
      });
    }, 1000);
  };

  const handleResetPassword = async () => {
    if (!newPassword.trim() || !confirmPassword.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both password fields",
        variant: "destructive",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Your password has been reset successfully",
      });
      handleClose();
    }, 1500);
  };

  const handleResendOTP = () => {
    if (resendTimer > 0) return;
    
    setResendTimer(60);
    const countdown = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    toast({
      title: "OTP Resent",
      description: `New OTP has been sent to ${email}`,
    });
  };

  const handleClose = () => {
    setStep('email');
    setEmail('');
    setOtp('');
    setNewPassword('');
    setConfirmPassword('');
    setResendTimer(0);
    onOpenChange(false);
  };

  const handleBack = () => {
    if (step === 'otp') {
      setStep('email');
      setOtp('');
    } else if (step === 'reset') {
      setStep('otp');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md w-full mx-4 p-0 gap-0 bg-white">
        {/* Header */}
        <DialogHeader className="p-6 pb-4 text-center relative">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          {step !== 'email' && (
            <button
              onClick={handleBack}
              className="absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </button>
          )}
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            {step === 'email' && 'Forgot Password'}
            {step === 'otp' && 'Verify OTP'}
            {step === 'reset' && 'Reset Password'}
          </DialogTitle>
        </DialogHeader>

        {/* Form Content */}
        <div className="px-6 pb-6 space-y-6">
          {step === 'email' && (
            <>
              <div className="text-center text-gray-600 text-sm">
                Enter your email address and we'll send you an OTP to reset your password.
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reset-email" className="text-gray-600 text-sm">
                  Email Address *
                </Label>
                <Input
                  id="reset-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                  placeholder="Enter your email address"
                />
              </div>

              <Button 
                onClick={handleSendOTP}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg"
              >
                {isLoading ? 'Sending OTP...' : 'Send OTP'}
              </Button>
            </>
          )}

          {step === 'otp' && (
            <>
              <div className="text-center text-gray-600 text-sm">
                We've sent a 6-digit OTP to <span className="font-medium">{email}</span>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-gray-600 text-sm">
                  Enter OTP *
                </Label>
                <Input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500 text-center text-lg tracking-widest"
                  placeholder="123456"
                  maxLength={6}
                />
              </div>

              <Button 
                onClick={handleVerifyOTP}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg"
              >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </Button>

              <div className="text-center">
                <button 
                  onClick={handleResendOTP}
                  disabled={resendTimer > 0}
                  className="text-rose-600 hover:text-rose-700 text-sm font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}
                </button>
              </div>
            </>
          )}

          {step === 'reset' && (
            <>
              <div className="text-center text-gray-600 text-sm">
                Create a new password for your account.
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-gray-600 text-sm">
                    New Password *
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    placeholder="Enter new password"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-gray-600 text-sm">
                    Confirm Password *
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>

              <Button 
                onClick={handleResetPassword}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-3 rounded-lg"
              >
                {isLoading ? 'Resetting Password...' : 'Reset Password'}
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
