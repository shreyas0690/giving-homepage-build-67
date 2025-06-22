
import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, GraduationCap, Briefcase, Radio, ImagePlus, User, Calendar, Building, MapPin, FileText, Upload, Phone } from "lucide-react";

interface CompleteFundraiserFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const patientRelationOptions = [
  { value: 'self', label: 'Self' },
  { value: 'father', label: 'Father' },
  { value: 'mother', label: 'Mother' },
  { value: 'grandfather', label: 'GrandFather' },
  { value: 'grandmother', label: 'GrandMother' },
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
  { value: 'postgraduate', label: 'Postgraduate (Masters, PHD, etc.)' },
  { value: 'below_10th_pass', label: 'Below 10th Pass' },
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
  { value: 'facebook_instagram', label: 'Facebook, Instagram Ad/Post' },
  { value: 'twitter', label: 'Twitter Ad/Post' },
  { value: 'youtube', label: 'Youtube Ad/Post' },
  { value: 'brochure_banner', label: 'brochure / Banner in Hospital' },
  { value: 'hospital_staff', label: 'Recommended by Hospital Staff Member' },
  { value: 'friend_family', label: 'Recommended by Friend / Family Member' },
  { value: 'representative', label: 'Representative' },
  { value: 'ngo', label: 'Recommended By NGO' },
  { value: 'whatsapp', label: 'WhatsApp DM/Group' },
  { value: 'influencer', label: 'Influencer / Content Creator' },
  { value: 'newspaper_tv', label: 'Newspaper/TV/Billboard' },
];

const patientAgeOptions = [
  { value: 'below_5', label: 'Below 5 years' },
  { value: '6_10', label: '6 - 10 years' },
  { value: '11_17', label: '11 - 17 years' },
  { value: '18_30', label: '18 - 30 years' },
  { value: '30_40', label: '30 - 40 years' },
  { value: 'above_40', label: 'Above 40 years' },
];

const medicalConditionOptions = [
  { value: 'brain_abscess', label: 'Brain abscess/ Cerebral abscess' },
  { value: 'brain_aneurysm', label: 'Brain aneurysm/ Intracranial aneurysm' },
  { value: 'brain_fungal_infection', label: 'Brain fungal infection' },
  { value: 'brain_haemorrhage', label: 'Brain haemorrhage' },
  { value: 'brain_tumor', label: 'Brain tumor' },
  { value: 'brain_metastasis', label: 'Brain/ Cerebral metastasis' },
  { value: 'brainstem_glioma', label: 'Brainstem glioma' },
  { value: 'traumatic_brain_injury', label: 'Traumatic Brain Injury' },
  { value: 'brain_tumor_stage_4', label: 'Tumour on brain stem 4th stage (adults)' },
  { value: 'cerebral_cyst', label: 'Cerebral Cyst/ Cystic Brain' },
  { value: 'cerebral_aneurysm_brain', label: 'Cerebral Aneurysm/ Intracranial Aneurysm/ Brain Aneurysm' },
  { value: 'aneurysm_dilatation', label: 'Aneurysm/ Aneurysmal dilatation- Can occur in aorta, brain, back of the knee, intestine or spleen' },
  { value: 'acute_necrotising_encephalopathy', label: 'Acute necrotising encephalopathy' },
  { value: 'alzheimer', label: 'Alzheimer' },
  { value: 'aphasia', label: 'Aphasia' },
  { value: 'bladder_disorders', label: 'Bladder disorders' },
  { value: 'carcinoma_craniopharyngioma', label: 'Carcinoma Craniopharyngioma' },
  { value: 'central_neurocytomas', label: 'Central neurocytomas' },
  { value: 'cerebral_atrophy', label: 'Cerebral atrophy' },
  { value: 'cerebral_edema', label: 'Cerebral edema' },
  { value: 'medical_condition_not_listed', label: 'Medical condition not in the list' },
];

const hospitalizationOptions = [
  { value: 'currently_hospitalised', label: 'Currently hospitalised' },
  { value: 'does_not_require', label: 'Does not require hospitalisation' },
  { value: 'recently_discharged', label: 'Recently discharged from the hospital' },
  { value: 'will_be_hospitalised', label: 'Will be hospitalised soon' },
];

const hospitalOptions = [
  { value: 'medanta_indore', label: 'Medanta Indore Super Specialty Hospital, Indore' },
  { value: 'mediplus_indore', label: 'Mediplus Hospital, Indore' },
  { value: 'sage_medicare', label: 'Sage Medicare Center, Indore' },
  { value: 'medisquare_indore', label: 'Medisquare Hospital & Research Centre, Indore' },
  { value: 'sri_aurobindo', label: 'Sri Aurobindo Institute of Medical Sciences, Indore' },
  { value: 'indore_eye_hospital', label: 'Indore Eye hospital, Indore' },
  { value: 'life_aesthetics', label: 'Life Aesthetics, Indore' },
  { value: 'getwell_hospital', label: 'Getwell Hospital, Indore' },
  { value: 'sahaj_hospital', label: 'Sahaj Hospital, Indore' },
  { value: 'suyash_hospital', label: 'Suyash Hospital, Indore' },
  { value: 'bombay_hospital', label: 'Bombay Hospital, Indore' },
  { value: 'synergy_hospital', label: 'Synergy Hospital, Indore' },
  { value: 'aditya_hospital', label: 'Aditya Hospital, Indore' },
  { value: 'vedant_hospital', label: 'Vedant Hospital, Indore' },
  { value: 'noble_hospital', label: 'Noble Hospital, Indore' },
  { value: 'neema_hospital', label: 'Neema Hospital, Indore' },
  { value: 'apollo_hospitals', label: 'Apollo Hospitals, Indore' },
  { value: 'gokuldas_hospital', label: 'Gokuldas Hospital, Indore' },
  { value: 'arvind_hospital', label: 'Arvind Hospital, Indore' },
  { value: 'vishesh_hospital', label: 'Vishesh Hospital, Indore' },
  { value: 'other', label: 'And More' },
];

const urgencyLevelOptions = [
  { value: 'immediate', label: 'Immediate (within 1 week)' },
  { value: 'urgent', label: 'Urgent (within 1 month)' },
  { value: 'moderate', label: 'Moderate (within 3 months)' },
  { value: 'low', label: 'Low (within 6 months)' },
];

const CompleteFundraiserForm = ({ formData, onInputChange, errors }: CompleteFundraiserFormProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onInputChange('fundraiserImage', file.name);
    }
  };

  return (
    <div className="space-y-6">
      {/* Purpose Display */}
      <Card className="border border-rose-200 bg-rose-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Medical Treatment</h4>
              <p className="text-sm text-rose-600">Healthcare fundraiser</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Goal Amount */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          How much do you want to raise? *
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
          <Input
            type="number"
            placeholder="Should be minimum ₹2000"
            value={formData.goalAmount}
            onChange={(e) => onInputChange('goalAmount', e.target.value)}
            className={`pl-8 h-10 border ${
              errors.goalAmount ? 'border-red-400' : 'border-gray-300'
            } focus:border-rose-500`}
          />
        </div>
        {errors.goalAmount && <p className="text-red-500 text-xs">{errors.goalAmount}</p>}
      </div>

      {/* Patient Relationship */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          The Patient is my... *
        </Label>
        <Select value={formData.patientRelation} onValueChange={(value) => onInputChange('patientRelation', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.patientRelation ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Select relationship" />
          </SelectTrigger>
          <SelectContent className="max-h-48 overflow-y-auto">
            {patientRelationOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.patientRelation && <p className="text-red-500 text-xs">{errors.patientRelation}</p>}
      </div>

      {/* Education Qualification */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Your Education Qualification *
        </Label>
        <Select value={formData.educationQualification} onValueChange={(value) => onInputChange('educationQualification', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.educationQualification ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Select education qualification" />
          </SelectTrigger>
          <SelectContent>
            {educationOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.educationQualification && <p className="text-red-500 text-xs">{errors.educationQualification}</p>}
      </div>

      {/* Employment Status */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Your Employment Status *
        </Label>
        <Select value={formData.employmentStatus} onValueChange={(value) => onInputChange('employmentStatus', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.employmentStatus ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Select employment status" />
          </SelectTrigger>
          <SelectContent>
            {employmentOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.employmentStatus && <p className="text-red-500 text-xs">{errors.employmentStatus}</p>}
      </div>

      {/* How did you hear about us */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          How did you first hear about us? *
        </Label>
        <Select value={formData.hearAbout} onValueChange={(value) => onInputChange('hearAbout', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.hearAbout ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Select how you heard about us" />
          </SelectTrigger>
          <SelectContent className="max-h-48 overflow-y-auto">
            {hearAboutOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.hearAbout && <p className="text-red-500 text-xs">{errors.hearAbout}</p>}
      </div>

      {/* Add Fundraiser Image */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Add Fundraiser Image (Optional)
        </Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center hover:border-rose-400 transition-colors">
          {imagePreview ? (
            <div className="space-y-2">
              <img 
                src={imagePreview} 
                alt="Fundraiser preview" 
                className="mx-auto max-h-16 rounded-lg object-cover"
              />
              <div className="text-xs text-gray-600">
                {selectedImage?.name}
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedImage(null);
                  setImagePreview(null);
                  onInputChange('fundraiserImage', '');
                }}
                className="text-rose-500 hover:text-rose-700 text-xs font-medium"
              >
                Remove Image
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <ImagePlus className="h-6 w-6 text-gray-400 mx-auto" />
              <div>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="fundraiser-image"
                />
                <label
                  htmlFor="fundraiser-image"
                  className="inline-flex items-center px-3 py-1.5 bg-rose-500 text-white rounded-lg hover:bg-rose-600 cursor-pointer transition-colors text-sm"
                >
                  Choose Image
                </label>
              </div>
              <p className="text-xs text-gray-500">
                Recommended: 16:9 aspect ratio, max 5MB
              </p>
            </div>
          )}
        </div>
        {errors.fundraiserImage && <p className="text-red-500 text-xs">{errors.fundraiserImage}</p>}
      </div>

      {/* Patient's Full Name */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Patient's full name *
        </Label>
        <Input
          placeholder="Name as mentioned in Patient's Aadhar card"
          value={formData.patientName || ''}
          onChange={(e) => onInputChange('patientName', e.target.value)}
          className={`h-10 border ${
            errors.patientName ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}
        />
        {errors.patientName && <p className="text-red-500 text-xs">{errors.patientName}</p>}
      </div>

      {/* Patient's Age */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Patient's age *
        </Label>
        <Select value={formData.patientAge} onValueChange={(value) => onInputChange('patientAge', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.patientAge ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Please enter a valid age group" />
          </SelectTrigger>
          <SelectContent>
            {patientAgeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.patientAge && <p className="text-red-500 text-xs">{errors.patientAge}</p>}
      </div>

      {/* Ailment / Medical Condition */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Ailment / Medical Condition *
        </Label>
        <Select value={formData.medicalCondition} onValueChange={(value) => onInputChange('medicalCondition', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.medicalCondition ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Select medical condition" />
          </SelectTrigger>
          <SelectContent className="max-h-48 overflow-y-auto">
            {medicalConditionOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.medicalCondition && <p className="text-red-500 text-xs">{errors.medicalCondition}</p>}
      </div>

      {/* Hospitalization Status */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Hospitalization status *
        </Label>
        <Select value={formData.hospitalizationStatus} onValueChange={(value) => onInputChange('hospitalizationStatus', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.hospitalizationStatus ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Select hospitalization status" />
          </SelectTrigger>
          <SelectContent>
            {hospitalizationOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.hospitalizationStatus && <p className="text-red-500 text-xs">{errors.hospitalizationStatus}</p>}
      </div>

      {/* Hospital */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Hospital *
        </Label>
        <Select value={formData.hospital} onValueChange={(value) => onInputChange('hospital', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.hospital ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Select hospital" />
          </SelectTrigger>
          <SelectContent className="max-h-48 overflow-y-auto">
            {hospitalOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.hospital && <p className="text-red-500 text-xs">{errors.hospital}</p>}
      </div>

      {/* City */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Enter Your City *
        </Label>
        <Input
          placeholder="Enter your city"
          value={formData.city || ''}
          onChange={(e) => onInputChange('city', e.target.value)}
          className={`h-10 border ${
            errors.city ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}
        />
        {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
      </div>

      {/* Story */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Tell the story about why you are running a Fundraiser *
        </Label>
        <Textarea
          placeholder="Share your complete story. Include background, why you need help, and how funds will be used..."
          value={formData.fullStory}
          onChange={(e) => onInputChange('fullStory', e.target.value)}
          className={`min-h-[120px] border ${
            errors.fullStory ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500 resize-none`}
        />
        <p className="text-xs text-gray-500">{formData.fullStory?.length || 0}/200 minimum</p>
        {errors.fullStory && <p className="text-red-500 text-xs">{errors.fullStory}</p>}
      </div>

      {/* Fundraiser Title */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Fundraiser Title *
        </Label>
        <Input
          placeholder="Enter a compelling title for your fundraiser"
          value={formData.fundraiserTitle || ''}
          onChange={(e) => onInputChange('fundraiserTitle', e.target.value)}
          className={`h-10 border ${
            errors.fundraiserTitle ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}
        />
        {errors.fundraiserTitle && <p className="text-red-500 text-xs">{errors.fundraiserTitle}</p>}
      </div>

      {/* Brief Description */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Brief Description *
        </Label>
        <Textarea
          placeholder="Provide a brief description of your fundraiser (max 200 characters)"
          value={formData.briefDescription || ''}
          onChange={(e) => onInputChange('briefDescription', e.target.value)}
          maxLength={200}
          className={`min-h-[80px] border ${
            errors.briefDescription ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500 resize-none`}
        />
        <p className="text-xs text-gray-500">{formData.briefDescription?.length || 0}/200</p>
        {errors.briefDescription && <p className="text-red-500 text-xs">{errors.briefDescription}</p>}
      </div>

      {/* Urgency Level */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Urgency Level *
        </Label>
        <Select value={formData.urgencyLevel} onValueChange={(value) => onInputChange('urgencyLevel', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.urgencyLevel ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Select urgency level" />
          </SelectTrigger>
          <SelectContent>
            {urgencyLevelOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.urgencyLevel && <p className="text-red-500 text-xs">{errors.urgencyLevel}</p>}
      </div>

      {/* Contact Number */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Contact Number *
        </Label>
        <Input
          placeholder="Enter your contact number"
          value={formData.contactNumber || ''}
          onChange={(e) => onInputChange('contactNumber', e.target.value)}
          className={`h-10 border ${
            errors.contactNumber ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}
        />
        {errors.contactNumber && <p className="text-red-500 text-xs">{errors.contactNumber}</p>}
      </div>

      {/* Medical Documents */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">
          Add Medical Documents (Optional)
        </Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-rose-400 transition-colors">
          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Click to upload medical documents</p>
          <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 10MB</p>
        </div>
      </div>
    </div>
  );
};

export default CompleteFundraiserForm;
