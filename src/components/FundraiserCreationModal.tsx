
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
  Share2,
  Star,
  Shield,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import StartFundraiserModal from "@/components/StartFundraiserModal";

interface FundraiserCreationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories = [
  { value: 'medical', label: 'Medical & Health', icon: Heart, gradient: 'from-red-500 to-rose-600' },
  { value: 'education', label: 'Education', icon: Users, gradient: 'from-blue-500 to-blue-600' },
  { value: 'emergency', label: 'Emergency & Accident', icon: Target, gradient: 'from-orange-500 to-red-600' },
  { value: 'social', label: 'Social Cause', icon: Share2, gradient: 'from-green-500 to-emerald-600' },
  { value: 'animal', label: 'Animal Welfare', icon: Heart, gradient: 'from-purple-500 to-pink-600' },
  { value: 'disaster', label: 'Disaster Relief', icon: Target, gradient: 'from-yellow-500 to-orange-600' },
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
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 via-pink-50 to-rose-100 rounded-3xl opacity-50"></div>
        <div className="relative p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Let's Build Your Campaign</h3>
          <p className="text-gray-600 max-w-md mx-auto">Tell us about your fundraiser and we'll help you reach your goal</p>
        </div>
      </div>
      
      <div className="grid gap-6">
        {/* Purpose Section - Enhanced */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-rose-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-md">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-lg">Medical Treatment Campaign</h4>
                <p className="text-sm text-red-600 font-medium">Raising funds for healthcare needs</p>
              </div>
              <Button variant="outline" size="sm" className="text-xs border-red-200 text-red-600 hover:bg-red-50">
                Change
              </Button>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Shield className="h-4 w-4" />
              <span>Zero platform fees • Instant withdrawals • 24/7 support</span>
            </div>
          </CardContent>
        </Card>

        {/* Goal Amount - Enhanced */}
        <div className="space-y-3">
          <Label className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-rose-600" />
            Fundraising Goal Amount *
          </Label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
            <Input
              type="number"
              placeholder="50,000"
              value={formData.goalAmount}
              onChange={(e) => handleInputChange('goalAmount', e.target.value)}
              className={`pl-8 h-12 text-lg font-medium border-2 rounded-xl transition-all duration-200 ${
                errors.goalAmount 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-200 focus:border-rose-500 focus:ring-rose-500'
              }`}
            />
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Zap className="h-4 w-4" />
            Minimum ₹2,000 required
          </p>
          {errors.goalAmount && <p className="text-red-500 text-sm flex items-center gap-1">
            <span className="w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">!</span>
            {errors.goalAmount}
          </p>}
        </div>

        {/* Patient Relationship - Enhanced */}
        <div className="space-y-3">
          <Label className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <Users className="h-5 w-5 text-rose-600" />
            The Patient is my... *
          </Label>
          <Select value={formData.patientRelation} onValueChange={(value) => handleInputChange('patientRelation', value)}>
            <SelectTrigger className={`h-12 border-2 rounded-xl transition-all duration-200 ${
              errors.patientRelation ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'
            }`}>
              <SelectValue placeholder="Select relationship" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-xl rounded-xl z-50">
              {patientRelationOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} className="hover:bg-rose-50">
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.patientRelation && <p className="text-red-500 text-sm flex items-center gap-1">
            <span className="w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">!</span>
            {errors.patientRelation}
          </p>}
        </div>

        {/* Education & Employment in Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label className="text-base font-semibold text-gray-900">Education Qualification *</Label>
            <Select value={formData.education} onValueChange={(value) => handleInputChange('education', value)}>
              <SelectTrigger className={`h-12 border-2 rounded-xl transition-all duration-200 ${
                errors.education ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'
              }`}>
                <SelectValue placeholder="Select education" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-xl rounded-xl z-50">
                {educationOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-rose-50">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.education && <p className="text-red-500 text-sm">{errors.education}</p>}
          </div>

          <div className="space-y-3">
            <Label className="text-base font-semibold text-gray-900">Employment Status *</Label>
            <Select value={formData.employment} onValueChange={(value) => handleInputChange('employment', value)}>
              <SelectTrigger className={`h-12 border-2 rounded-xl transition-all duration-200 ${
                errors.employment ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'
              }`}>
                <SelectValue placeholder="Select employment" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-xl rounded-xl z-50">
                {employmentOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-rose-50">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.employment && <p className="text-red-500 text-sm">{errors.employment}</p>}
          </div>
        </div>

        {/* How did you hear - Enhanced */}
        <div className="space-y-3">
          <Label className="text-base font-semibold text-gray-900">How did you hear about Varak? *</Label>
          <Select value={formData.hearAbout} onValueChange={(value) => handleInputChange('hearAbout', value)}>
            <SelectTrigger className={`h-12 border-2 rounded-xl transition-all duration-200 ${
              errors.hearAbout ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'
            }`}>
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-xl rounded-xl z-50">
              {hearAboutOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} className="hover:bg-rose-50">
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.hearAbout && <p className="text-red-500 text-sm">{errors.hearAbout}</p>}
        </div>

        {/* Image Upload - Enhanced */}
        <Card className="border-2 border-dashed border-gray-200 hover:border-rose-300 transition-colors">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <Label className="text-base font-semibold text-gray-900 mb-2 block">Add Photos/Videos</Label>
              <p className="text-sm text-gray-600 mb-4">Images help donors connect with your cause</p>
              
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <Button variant="outline" asChild className="w-full sm:w-auto border-2">
                <label htmlFor="image-upload" className="cursor-pointer flex items-center justify-center gap-2">
                  <Upload className="h-4 w-4" />
                  Choose Files
                </label>
              </Button>
              
              {formData.images.length > 0 && (
                <div className="mt-3 p-2 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">
                    {formData.images.length} file(s) selected
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Trust Badge */}
        <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-center gap-3 text-center">
              <div className="flex items-center gap-1">
                <Shield className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Secure & Trusted</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">₹250+ Cr Raised</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Target className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell Your Story</h3>
        <p className="text-gray-600">Help donors understand your cause and build trust</p>
      </div>
      
      <div className="space-y-6">
        {/* Title */}
        <div className="space-y-3">
          <Label htmlFor="title" className="text-base font-semibold text-gray-900">Fundraiser Title *</Label>
          <Input
            id="title"
            placeholder="e.g., Help Save Little Arya's Life - Urgent Medical Treatment Needed"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className={`h-12 text-base border-2 rounded-xl transition-all duration-200 ${
              errors.title ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Story */}
        <div className="space-y-3">
          <Label htmlFor="fullStory" className="text-base font-semibold text-gray-900">Your Complete Story *</Label>
          <Textarea
            id="fullStory"
            placeholder="Share the complete story behind your fundraiser. Include:&#10;• Background and current situation&#10;• Why you need help&#10;• How the funds will be used&#10;• The impact donations will make&#10;• Any relevant medical details or documentation"
            value={formData.fullStory}
            onChange={(e) => handleInputChange('fullStory', e.target.value)}
            className={`min-h-[200px] text-base border-2 rounded-xl transition-all duration-200 resize-none ${
              errors.fullStory ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'
            }`}
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">{formData.fullStory.length}/2000 characters</p>
            <div className={`text-sm font-medium ${formData.fullStory.length >= 200 ? 'text-green-600' : 'text-orange-600'}`}>
              {formData.fullStory.length >= 200 ? '✓ Good length' : 'Need more details'}
            </div>
          </div>
          {errors.fullStory && <p className="text-red-500 text-sm">{errors.fullStory}</p>}
        </div>

        {/* Beneficiary */}
        <div className="space-y-3">
          <Label htmlFor="beneficiary" className="text-base font-semibold text-gray-900">Beneficiary Information *</Label>
          <Textarea
            id="beneficiary"
            placeholder="Provide details about who will benefit from this fundraiser. Include their age, condition, relationship to you, and any other relevant information that helps donors understand who they're helping."
            value={formData.beneficiary}
            onChange={(e) => handleInputChange('beneficiary', e.target.value)}
            className={`min-h-[120px] text-base border-2 rounded-xl transition-all duration-200 resize-none ${
              errors.beneficiary ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'
            }`}
          />
          {errors.beneficiary && <p className="text-red-500 text-sm">{errors.beneficiary}</p>}
        </div>

        {/* Urgency */}
        <div className="space-y-3">
          <Label htmlFor="urgency" className="text-base font-semibold text-gray-900">How urgent is this? *</Label>
          <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
            <SelectTrigger className={`h-12 border-2 rounded-xl transition-all duration-200 ${
              errors.urgency ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'
            }`}>
              <SelectValue placeholder="Select urgency level" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-xl rounded-xl">
              <SelectItem value="critical" className="hover:bg-red-50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="font-medium">Critical - Life threatening, immediate action needed</span>
                </div>
              </SelectItem>
              <SelectItem value="urgent" className="hover:bg-orange-50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="font-medium">Urgent - Treatment needed within few weeks</span>
                </div>
              </SelectItem>
              <SelectItem value="moderate" className="hover:bg-green-50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Moderate - Can wait a few months but help needed</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.urgency && <p className="text-red-500 text-sm">{errors.urgency}</p>}
        </div>

        {/* Tips Card */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-4">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <Star className="h-5 w-5" />
              Tips for a Successful Campaign
            </h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Be transparent about how funds will be used</li>
              <li>• Include medical documents or proof if available</li>
              <li>• Update donors regularly on progress</li>
              <li>• Share on social media to reach more people</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderStep3 = () => {
    if (isAuthenticated) {
      return (
        <div className="space-y-8">
          {/* Success Header */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Check className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Ready to Launch! 🚀</h3>
            <p className="text-lg text-gray-600">Your fundraiser is ready to go live and start receiving donations</p>
          </div>
          
          {/* Summary Card */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-8">
              <h4 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                <Target className="h-6 w-6 text-rose-600" />
                Campaign Summary
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-xl">
                    <span className="text-sm font-medium text-red-700">Purpose</span>
                    <p className="font-semibold text-gray-900">{formData.purpose}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <span className="text-sm font-medium text-green-700">Goal Amount</span>
                    <p className="font-bold text-2xl text-gray-900">₹{Number(formData.goalAmount).toLocaleString()}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <span className="text-sm font-medium text-blue-700">Patient Relationship</span>
                    <p className="font-semibold text-gray-900">
                      {patientRelationOptions.find(r => r.value === formData.patientRelation)?.label}
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <span className="text-sm font-medium text-purple-700">Campaign Creator</span>
                    <p className="font-semibold text-gray-900">{user?.name}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What happens next */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-rose-50 to-pink-50">
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-rose-600" />
                What happens next?
              </h4>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p className="font-medium text-gray-900">Instant Approval</p>
                  <p className="text-gray-600">Your campaign goes live immediately</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p className="font-medium text-gray-900">Start Sharing</p>
                  <p className="text-gray-600">Share with family, friends & social media</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p className="font-medium text-gray-900">Receive Funds</p>
                  <p className="text-gray-600">Instant withdrawal to your bank account</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Contact Information</h3>
          <p className="text-gray-600">We need your details to create the fundraiser</p>
        </div>
        
        <div className="grid gap-4">
          <div>
            <Label htmlFor="organizer" className="text-base font-semibold text-gray-900">Your Full Name *</Label>
            <Input
              id="organizer"
              placeholder="Enter your full name"
              value={formData.organizer}
              onChange={(e) => handleInputChange('organizer', e.target.value)}
              className={`h-12 text-base border-2 rounded-xl mt-2 ${errors.organizer ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'}`}
            />
            {errors.organizer && <p className="text-red-500 text-sm mt-1">{errors.organizer}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-base font-semibold text-gray-900">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`h-12 text-base border-2 rounded-xl mt-2 ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="text-base font-semibold text-gray-900">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`h-12 text-base border-2 rounded-xl mt-2 ${errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'}`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="city" className="text-base font-semibold text-gray-900">City *</Label>
            <Input
              id="city"
              placeholder="Your city"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={`h-12 text-base border-2 rounded-xl mt-2 ${errors.city ? 'border-red-500' : 'border-gray-200 focus:border-rose-500'}`}
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Dialog open={open && !showSignUp} onOpenChange={onOpenChange}>
        <DialogContent className="w-[95vw] max-w-4xl mx-auto my-4 rounded-3xl border-0 shadow-2xl bg-white max-h-[90vh] overflow-y-auto">
          <DialogHeader className="text-center pb-6">
            {/* Enhanced Progress Section */}
            <div className="flex items-center justify-center gap-3 mb-6">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      step === currentStep
                        ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg scale-110'
                        : step < currentStep
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                    }`}
                  >
                    {step < currentStep ? <Check className="h-6 w-6" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-12 h-1 mx-2 rounded-full transition-all duration-300 ${
                      step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
              {currentStep === 1 && "Campaign Details"}
              {currentStep === 2 && "Your Story"}
              {currentStep === 3 && (isAuthenticated ? "Review & Launch" : "Contact Information")}
            </DialogTitle>
            
            <div className="mt-4">
              <Progress value={getStepProgress()} className="w-full h-3 bg-gray-100" />
              <p className="text-sm text-gray-500 mt-2">Step {currentStep} of 3</p>
            </div>
          </DialogHeader>

          <Separator className="mb-8" />

          <div className="px-2">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </div>

          <Separator className="mt-8" />

          {/* Enhanced Footer */}
          <div className="flex justify-between items-center pt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="flex items-center gap-2 h-12 px-6 rounded-xl border-2 hover:bg-gray-50 disabled:opacity-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            <div className="flex items-center gap-3">
              {currentStep < 3 && (
                <span className="text-sm text-gray-500 hidden sm:block">
                  {currentStep === 1 ? 'Basic information' : 'Story details'}
                </span>
              )}
              
              <Button
                onClick={handleNext}
                disabled={isSubmitting}
                className={`h-12 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base flex items-center gap-2 ${
                  currentStep === 1 
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700' 
                    : currentStep === 2
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                } text-white`}
              >
                {currentStep === 1 ? (
                  <>
                    Save & Continue
                    <ArrowRight className="h-5 w-5" />
                  </>
                ) : currentStep === 3 ? (
                  isSubmitting ? (
                    "Creating Campaign..."
                  ) : isAuthenticated ? (
                    <>
                      <Zap className="h-5 w-5" />
                      Launch Fundraiser
                    </>
                  ) : (
                    "Sign Up & Launch"
                  )
                ) : (
                  <>
                    Next Step
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
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
