
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import StartFundraiserModal from "@/components/StartFundraiserModal";
import CompleteFundraiserForm from "@/components/fundraiser/CompleteFundraiserForm";

interface FundraiserCreationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FundraiserCreationModal = ({ open, onOpenChange }: FundraiserCreationModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    goalAmount: '',
    patientRelation: '',
    educationQualification: '',
    employmentStatus: '',
    hearAbout: '',
    fundraiserImage: '',
    patientName: '',
    patientAge: '',
    medicalCondition: '',
    hospitalizationStatus: '',
    hospital: '',
    city: '',
    fullStory: '',
    fundraiserTitle: '',
    briefDescription: '',
    urgencyLevel: '',
    contactNumber: '',
    medicalDocuments: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.goalAmount) newErrors.goalAmount = 'Goal amount is required';
    else if (Number(formData.goalAmount) < 2000) {
      newErrors.goalAmount = 'Minimum ₹2,000 required';
    }
    if (!formData.patientRelation) newErrors.patientRelation = 'Patient relationship is required';
    if (!formData.educationQualification) newErrors.educationQualification = 'Education qualification is required';
    if (!formData.employmentStatus) newErrors.employmentStatus = 'Employment status is required';
    if (!formData.hearAbout) newErrors.hearAbout = 'Please tell us how you heard about us';
    if (!formData.patientName?.trim()) newErrors.patientName = 'Patient name is required';
    if (!formData.patientAge) newErrors.patientAge = 'Patient age is required';
    if (!formData.medicalCondition) newErrors.medicalCondition = 'Medical condition is required';
    if (!formData.hospitalizationStatus) newErrors.hospitalizationStatus = 'Hospitalization status is required';
    if (!formData.hospital) newErrors.hospital = 'Hospital is required';
    if (!formData.city?.trim()) newErrors.city = 'City is required';
    if (!formData.fullStory.trim()) newErrors.fullStory = 'Story is required';
    else if (formData.fullStory.length < 200) {
      newErrors.fullStory = 'Story must be at least 200 characters';
    }
    if (!formData.fundraiserTitle?.trim()) newErrors.fundraiserTitle = 'Fundraiser title is required';
    if (!formData.briefDescription?.trim()) newErrors.briefDescription = 'Brief description is required';
    if (!formData.urgencyLevel) newErrors.urgencyLevel = 'Urgency level is required';
    if (!formData.contactNumber?.trim()) newErrors.contactNumber = 'Contact number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

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
      
      setFormData({
        goalAmount: '',
        patientRelation: '',
        educationQualification: '',
        employmentStatus: '',
        hearAbout: '',
        fundraiserImage: '',
        patientName: '',
        patientAge: '',
        medicalCondition: '',
        hospitalizationStatus: '',
        hospital: '',
        city: '',
        fullStory: '',
        fundraiserTitle: '',
        briefDescription: '',
        urgencyLevel: '',
        contactNumber: '',
        medicalDocuments: '',
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

  return (
    <>
      <Dialog open={open && !showSignUp} onOpenChange={onOpenChange}>
        <DialogContent className="w-[95vw] max-w-lg mx-auto rounded-2xl border-0 shadow-xl bg-white max-h-[90vh] overflow-y-auto">
          <DialogHeader className="text-center pb-4">
            <DialogTitle className="text-xl font-bold text-gray-900">
              Tell the story about why you are running a Fundraiser
            </DialogTitle>
          </DialogHeader>

          <Separator className="mb-6" />

          <div className="px-1">
            <CompleteFundraiserForm
              formData={formData}
              onInputChange={handleInputChange}
              errors={errors}
            />
          </div>

          <Separator className="mt-6" />

          {/* Footer */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="h-12 px-8 bg-rose-500 hover:bg-rose-600 text-white font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2 w-full"
            >
              {isSubmitting ? (
                "Creating..."
              ) : isAuthenticated ? (
                <>
                  <Zap className="h-4 w-4" />
                  Submit
                </>
              ) : (
                "Sign Up & Submit"
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
