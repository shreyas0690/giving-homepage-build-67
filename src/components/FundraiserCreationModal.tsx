import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ArrowLeft, Check, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import StartFundraiserModal from "@/components/StartFundraiserModal";
import FundraiserBasicForm from "@/components/fundraiser/FundraiserBasicForm";
import FundraiserStoryForm from "@/components/fundraiser/FundraiserStoryForm";

interface FundraiserCreationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FundraiserCreationModal = ({ open, onOpenChange }: FundraiserCreationModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    patientRelation: '',
    hospitalCity: '',
    goalAmount: '',
    title: '',
    briefDescription: '',
    urgency: '',
    contactNumber: '',
    fullStory: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.patientName.trim()) newErrors.patientName = 'Patient name is required';
    if (!formData.patientAge) newErrors.patientAge = 'Patient age is required';
    else if (Number(formData.patientAge) < 1 || Number(formData.patientAge) > 120) {
      newErrors.patientAge = 'Please enter a valid age';
    }
    if (!formData.patientRelation) newErrors.patientRelation = 'Patient relationship is required';
    if (!formData.hospitalCity.trim()) newErrors.hospitalCity = 'Hospital/City is required';
    if (!formData.goalAmount) newErrors.goalAmount = 'Goal amount is required';
    else if (Number(formData.goalAmount) < 2000) {
      newErrors.goalAmount = 'Minimum ₹2,000 required';
    }
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.briefDescription.trim()) newErrors.briefDescription = 'Brief description is required';
    else if (formData.briefDescription.length < 50) {
      newErrors.briefDescription = 'Description must be at least 50 characters';
    }
    if (!formData.urgency) newErrors.urgency = 'Urgency level is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
    else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\D/g, ''))) {
      newErrors.contactNumber = 'Please enter a valid 10-digit mobile number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullStory.trim()) newErrors.fullStory = 'Story is required';
    else if (formData.fullStory.length < 200) {
      newErrors.fullStory = 'Story must be at least 200 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    
    if (currentStep === 1) isValid = validateStep1();
    else if (currentStep === 2) isValid = validateStep2();
    
    if (isValid) {
      if (currentStep === 2) {
        handleSubmit();
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleSubmit = async () => {
    if (!isAuthenticated) {
      setShowSignUp(true);
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      onOpenChange(false);
      toast({
        title: "Fundraiser Created! 🎉",
        description: "Your fundraiser is now live and ready to receive donations."
      });
      
      setCurrentStep(1);
      setFormData({
        patientName: '',
        patientAge: '',
        patientRelation: '',
        hospitalCity: '',
        goalAmount: '',
        title: '',
        briefDescription: '',
        urgency: '',
        contactNumber: '',
        fullStory: '',
      });
      setErrors({});
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const getStepProgress = () => (currentStep / 2) * 100;

  return (
    <>
      <Dialog open={open && !showSignUp} onOpenChange={onOpenChange}>
        <DialogContent className="w-[95vw] max-w-lg mx-auto rounded-2xl border-0 shadow-xl bg-white max-h-[85vh] overflow-y-auto">
          <DialogHeader className="text-center pb-4">
            {/* Progress */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      step === currentStep
                        ? 'bg-rose-500 text-white'
                        : step < currentStep
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step < currentStep ? <Check className="h-4 w-4" /> : step}
                  </div>
                  {step < 2 && (
                    <div className={`w-8 h-1 mx-1 rounded ${
                      step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            <DialogTitle className="text-xl font-bold text-gray-900">
              {currentStep === 1 ? "Fundraiser Details" : "Your Story"}
            </DialogTitle>
            
            <Progress value={getStepProgress()} className="w-full h-2 mt-3" />
          </DialogHeader>

          <Separator className="mb-6" />

          <div className="px-1">
            {currentStep === 1 && (
              <FundraiserBasicForm
                formData={formData}
                onInputChange={handleInputChange}
                errors={errors}
              />
            )}
            {currentStep === 2 && (
              <FundraiserStoryForm
                formData={formData}
                onInputChange={handleInputChange}
                errors={errors}
              />
            )}
          </div>

          <Separator className="mt-6" />

          {/* Footer */}
          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="flex items-center gap-2 h-10 px-4 border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={isSubmitting}
              className="h-10 px-6 bg-rose-500 hover:bg-rose-600 text-white font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              {currentStep === 2 ? (
                isSubmitting ? (
                  "Creating..."
                ) : isAuthenticated ? (
                  <>
                    <Zap className="h-4 w-4" />
                    Launch
                  </>
                ) : (
                  "Sign Up & Launch"
                )
              ) : (
                <>
                  Next
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <StartFundraiserModal
        open={showSignUp}
        onOpenChange={setShowSignUp}
      />
    </>
  );
};

export default FundraiserCreationModal;
