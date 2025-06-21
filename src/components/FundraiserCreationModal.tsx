import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  DollarSign, 
  Camera, 
  ArrowRight, 
  ArrowLeft, 
  Check,
  Upload,
  Target,
  Users,
  Share2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import StartFundraiserModal from "@/components/StartFundraiserModal";

interface FundraiserCreationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories = [
  { value: 'medical', label: 'Medical & Health', icon: Heart },
  { value: 'education', label: 'Education', icon: Users },
  { value: 'emergency', label: 'Emergency & Accident', icon: Target },
  { value: 'social', label: 'Social Cause', icon: Share2 },
  { value: 'animal', label: 'Animal Welfare', icon: Heart },
  { value: 'disaster', label: 'Disaster Relief', icon: Target },
];

const patientRelationOptions = [
  { value: 'self', label: 'Self' },
  { value: 'father', label: 'Father' },
  { value: 'mother', label: 'Mother' },
  { value: 'grandfather', label: 'Grandfather' },
  { value: 'grandmother', label: 'Grandmother' },
  { value: 'husband', label: 'Husband' },
  { value: 'wife', label: 'Wife' },
  { value: 'son', label: 'Son' },
  { value: 'daughter', label: 'Daughter' },
  { value: 'twins', label: 'Twins' },
  { value: 'grandson', label: 'Grandson' },
  { value: 'brother', label: 'Brother' },
  { value: 'sister', label: 'Sister' },
  { value: 'friend', label: 'Friend' },
  { value: 'friends_family', label: "Friend's Family" },
  { value: 'cousin', label: 'Cousin' },
  { value: 'uncle', label: 'Uncle' },
  { value: 'aunt', label: 'Aunt' },
  { value: 'nephew', label: 'Nephew' },
  { value: 'niece', label: 'Niece' },
  { value: 'colleague', label: 'Colleague' },
  { value: 'relative', label: 'Relative' },
  { value: 'legal_ward', label: 'Legal Ward' },
  { value: 'other', label: 'Other' },
];

const educationOptions = [
  { value: '10th_12th_pass', label: '10th/12th Pass' },
  { value: 'graduate', label: 'Graduate' },
  { value: 'postgraduate', label: 'Postgraduate (Masters, PhD, etc.)' },
  { value: 'below_10th', label: 'Below 10th Pass' },
];

const employmentOptions = [
  { value: 'salaried', label: 'Salaried' },
  { value: 'self_employed', label: 'Self-Employed' },
  { value: 'student', label: 'Student' },
  { value: 'homemaker', label: 'Homemaker' },
  { value: 'unemployed', label: 'Unemployed' },
];

const hearAboutOptions = [
  { value: 'search_engine', label: 'Search Engine (google, etc)' },
  { value: 'facebook', label: 'Facebook, Instagram Ad/Post' },
  { value: 'twitter', label: 'Twitter Ad/Post' },
  { value: 'youtube', label: 'Youtube Ad/Post' },
  { value: 'hospital_brochure', label: 'brochure / Banner in Hospital' },
  { value: 'hospital_staff', label: 'Recommended by Hospital Staff Member' },
  { value: 'friend_family', label: 'Recommended by Friend / Family Member' },
  { value: 'varak_representative', label: 'Varak Representative' },
  { value: 'ngo', label: 'Recommended By NGO' },
  { value: 'whatsapp', label: 'WhatsApp DM/Group' },
  { value: 'influencer', label: 'Influencer / Content Creator' },
  { value: 'media', label: 'Newspaper/TV/Billboard' },
];

const FundraiserCreationModal = ({ open, onOpenChange }: FundraiserCreationModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    // Step 1: Enhanced Basic Info
    purpose: 'Medical Treatment',
    goalAmount: '',
    patientRelation: '',
    education: '',
    employment: '',
    hearAbout: '',
    images: [] as File[],
    
    // Step 2: Details
    title: '',
    fullStory: '',
    beneficiary: '',
    urgency: '',
    
    // Step 3: Personal Info (only for non-authenticated users)
    organizer: user?.name || '',
    email: user?.email || '',
    phone: '',
    city: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.goalAmount) newErrors.goalAmount = 'Goal amount is required';
    else if (isNaN(Number(formData.goalAmount)) || Number(formData.goalAmount) < 2000) {
      newErrors.goalAmount = 'Goal amount must be at least ₹2,000';
    }
    if (!formData.patientRelation) newErrors.patientRelation = 'Patient relationship is required';
    if (!formData.education) newErrors.education = 'Education qualification is required';
    if (!formData.employment) newErrors.employment = 'Employment status is required';
    if (!formData.hearAbout) newErrors.hearAbout = 'Please tell us how you heard about Varak';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) newErrors.title = 'Fundraiser title is required';
    if (!formData.fullStory.trim()) newErrors.fullStory = 'Full story is required';
    else if (formData.fullStory.length < 200) {
      newErrors.fullStory = 'Story must be at least 200 characters';
    }
    if (!formData.beneficiary.trim()) newErrors.beneficiary = 'Beneficiary information is required';
    if (!formData.urgency) newErrors.urgency = 'Please select urgency level';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    if (isAuthenticated) return true;
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.organizer.trim()) newErrors.organizer = 'Your name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    
    if (currentStep === 1) isValid = validateStep1();
    else if (currentStep === 2) isValid = validateStep2();
    else if (currentStep === 3) isValid = validateStep3();
    
    if (isValid) {
      if (currentStep === 3) {
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onOpenChange(false);
      toast({
        title: "Fundraiser Created Successfully! 🎉",
        description: "Your fundraiser is now live and ready to receive donations."
      });
      
      // Reset form
      setCurrentStep(1);
      setFormData({
        purpose: 'Medical Treatment',
        goalAmount: '',
        patientRelation: '',
        education: '',
        employment: '',
        hearAbout: '',
        images: [],
        title: '',
        fullStory: '',
        beneficiary: '',
        urgency: '',
        organizer: user?.name || '',
        email: user?.email || '',
        phone: '',
        city: '',
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files].slice(0, 5) }));
  };

  const getStepProgress = () => (currentStep / 3) * 100;

  const renderStep1 = () => (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Tell us more about your Fundraiser</h3>
      </div>
      
      <div className="space-y-4">
        {/* Purpose Section */}
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <Heart className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">
              Raising funds for <span className="font-bold text-red-600">Medical Treatment</span> purpose
            </span>
          </div>
          <button className="text-xs text-blue-600 hover:underline">Change purpose?</button>
        </div>

        {/* Goal Amount */}
        <div>
          <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            How much do you want to raise? *
            <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs">?</div>
          </Label>
          <div className="relative mt-1">
            <Input
              type="number"
              placeholder="Should be minimum ₹ 2000"
              value={formData.goalAmount}
              onChange={(e) => handleInputChange('goalAmount', e.target.value)}
              className={`${errors.goalAmount ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Should be minimum ₹ 2000</p>
          {errors.goalAmount && <p className="text-red-500 text-xs mt-1">{errors.goalAmount}</p>}
        </div>

        {/* Patient Relationship */}
        <div>
          <Label className="text-sm font-medium text-gray-700">The Patient is my... *</Label>
          <Select value={formData.patientRelation} onValueChange={(value) => handleInputChange('patientRelation', value)}>
            <SelectTrigger className={`mt-1 ${errors.patientRelation ? 'border-red-500' : 'border-gray-300'}`}>
              <SelectValue placeholder="Select relationship" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
              {patientRelationOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.patientRelation && <p className="text-red-500 text-xs mt-1">{errors.patientRelation}</p>}
        </div>

        {/* Education */}
        <div>
          <Label className="text-sm font-medium text-gray-700">Your Education Qualification *</Label>
          <Select value={formData.education} onValueChange={(value) => handleInputChange('education', value)}>
            <SelectTrigger className={`mt-1 ${errors.education ? 'border-red-500' : 'border-gray-300'}`}>
              <SelectValue placeholder="Select education" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
              {educationOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
        </div>

        {/* Employment */}
        <div>
          <Label className="text-sm font-medium text-gray-700">Your Employment Status *</Label>
          <Select value={formData.employment} onValueChange={(value) => handleInputChange('employment', value)}>
            <SelectTrigger className={`mt-1 ${errors.employment ? 'border-red-500' : 'border-gray-300'}`}>
              <SelectValue placeholder="Select employment status" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
              {employmentOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.employment && <p className="text-red-500 text-xs mt-1">{errors.employment}</p>}
        </div>

        {/* How did you hear about */}
        <div>
          <Label className="text-sm font-medium text-gray-700">How did you first hear about Varak? *</Label>
          <Select value={formData.hearAbout} onValueChange={(value) => handleInputChange('hearAbout', value)}>
            <SelectTrigger className={`mt-1 ${errors.hearAbout ? 'border-red-500' : 'border-gray-300'}`}>
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
              {hearAboutOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.hearAbout && <p className="text-red-500 text-xs mt-1">{errors.hearAbout}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <Label className="text-sm font-medium text-gray-700">Add fundraiser image / video <span className="text-gray-400">(Optional)</span></Label>
          <div className="mt-2">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <Button variant="outline" asChild className="w-full">
              <label htmlFor="image-upload" className="cursor-pointer flex items-center justify-center gap-2">
                Upload
              </label>
            </Button>
          </div>
          {formData.images.length > 0 && (
            <div className="mt-2">
              <p className="text-xs text-gray-600">{formData.images.length} image(s) selected</p>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-1">You can easily make changes to your fundraiser at any time</p>
        </div>

        {/* Platform fee note */}
        <div className="bg-teal-50 p-3 rounded-lg text-center">
          <p className="text-xs text-teal-700">Varak's zero platform fee policy will ensure more funds for you...</p>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Information</h3>
        <p className="text-gray-600">Provide more details to build trust</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="title" className="text-sm font-medium">Fundraiser Title *</Label>
          <Input
            id="title"
            placeholder="e.g., Help Save Little Arya's Life"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className={errors.title ? 'border-red-500' : ''}
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        <div>
          <Label htmlFor="fullStory" className="text-sm font-medium">Full Story *</Label>
          <Textarea
            id="fullStory"
            placeholder="Tell the complete story. Include background, current situation, how funds will be used, and impact of donations..."
            value={formData.fullStory}
            onChange={(e) => handleInputChange('fullStory', e.target.value)}
            className={`min-h-[150px] ${errors.fullStory ? 'border-red-500' : ''}`}
          />
          <p className="text-xs text-gray-500 mt-1">{formData.fullStory.length}/2000 characters</p>
          {errors.fullStory && <p className="text-red-500 text-xs mt-1">{errors.fullStory}</p>}
        </div>

        <div>
          <Label htmlFor="beneficiary" className="text-sm font-medium">Beneficiary Details *</Label>
          <Textarea
            id="beneficiary"
            placeholder="Who will benefit from this fundraiser? Include their relationship to you..."
            value={formData.beneficiary}
            onChange={(e) => handleInputChange('beneficiary', e.target.value)}
            className={errors.beneficiary ? 'border-red-500' : ''}
          />
          {errors.beneficiary && <p className="text-red-500 text-xs mt-1">{errors.beneficiary}</p>}
        </div>

        <div>
          <Label htmlFor="urgency" className="text-sm font-medium">Urgency Level *</Label>
          <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
            <SelectTrigger className={errors.urgency ? 'border-red-500' : ''}>
              <SelectValue placeholder="How urgent is this?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="critical">🔴 Critical - Immediate action needed</SelectItem>
              <SelectItem value="urgent">🟡 Urgent - Within few weeks</SelectItem>
              <SelectItem value="moderate">🟢 Moderate - Within few months</SelectItem>
            </SelectContent>
          </Select>
          {errors.urgency && <p className="text-red-500 text-xs mt-1">{errors.urgency}</p>}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => {
    if (isAuthenticated) {
      return (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Launch!</h3>
            <p className="text-gray-600">Review your fundraiser details and publish</p>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Fundraiser Summary</h4>
              <div className="space-y-3 text-sm">
                <div><span className="font-medium">Purpose:</span> {formData.purpose}</div>
                <div><span className="font-medium">Goal:</span> ₹{Number(formData.goalAmount).toLocaleString()}</div>
                <div><span className="font-medium">Patient:</span> {patientRelationOptions.find(r => r.value === formData.patientRelation)?.label}</div>
                <div><span className="font-medium">Organizer:</span> {user?.name}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Information</h3>
          <p className="text-gray-600">We need your details to create the fundraiser</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="organizer" className="text-sm font-medium">Your Full Name *</Label>
            <Input
              id="organizer"
              placeholder="Enter your full name"
              value={formData.organizer}
              onChange={(e) => handleInputChange('organizer', e.target.value)}
              className={errors.organizer ? 'border-red-500' : ''}
            />
            {errors.organizer && <p className="text-red-500 text-xs mt-1">{errors.organizer}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="city" className="text-sm font-medium">City *</Label>
            <Input
              id="city"
              placeholder="Your city"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={errors.city ? 'border-red-500' : ''}
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Dialog open={open && !showSignUp} onOpenChange={onOpenChange}>
        <DialogContent className="w-[95vw] max-w-2xl mx-auto my-4 rounded-2xl border-0 shadow-2xl bg-white max-h-[90vh] overflow-y-auto">
          <DialogHeader className="text-center pb-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step === currentStep
                        ? 'bg-teal-500 text-white'
                        : step < currentStep
                        ? 'bg-teal-200 text-teal-800'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Create Your Fundraiser
            </DialogTitle>
            <div className="mt-2">
              <Progress value={getStepProgress()} className="w-full h-2" />
            </div>
          </DialogHeader>

          <Separator className="mb-6" />

          <div className="px-1">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </div>

          <Separator className="mt-6" />

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={isSubmitting}
              className={`${
                currentStep === 1 
                  ? 'bg-teal-500 hover:bg-teal-600' 
                  : 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700'
              } text-white flex items-center gap-2`}
            >
              {currentStep === 1 ? (
                'Save and continue'
              ) : currentStep === 3 ? (
                isSubmitting ? (
                  "Creating..."
                ) : isAuthenticated ? (
                  "Launch Fundraiser"
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

      {/* Sign Up Modal for non-authenticated users */}
      <StartFundraiserModal
        open={showSignUp}
        onOpenChange={setShowSignUp}
      />
    </>
  );
};

export default FundraiserCreationModal;
