
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, User, Calendar, Heart, Building, Radio } from "lucide-react";

interface FundraiserStoryFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const hospitalizationOptions = [
  { value: 'admitted', label: 'Patient is admitted' },
  { value: 'outpatient', label: 'Patient is an outpatient' },
  { value: 'will_be_admitted', label: 'Patient will be admitted' }
];

const urgencyOptions = [
  { value: 'immediate', label: 'Immediate (1-7 days)' },
  { value: 'urgent', label: 'Urgent (1-2 weeks)' },
  { value: 'moderate', label: 'Moderate (1 month)' },
  { value: 'flexible', label: 'Flexible (2+ months)' }
];

const FundraiserStoryForm = ({ formData, onInputChange, errors }: FundraiserStoryFormProps) => {
  return (
    <div className="space-y-6">
      {/* Patient Name */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <User className="h-4 w-4 text-rose-500" />
          Patient Name *
        </Label>
        <Input
          type="text"
          placeholder="Full name of the patient"
          value={formData.patientName}
          onChange={(e) => onInputChange('patientName', e.target.value)}
          className={`h-10 border ${
            errors.patientName ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}
        />
        {errors.patientName && <p className="text-red-500 text-xs">{errors.patientName}</p>}
      </div>

      {/* Patient Age */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Calendar className="h-4 w-4 text-rose-500" />
          Patient Age *
        </Label>
        <Input
          type="number"
          placeholder="Age in years"
          value={formData.patientAge}
          onChange={(e) => onInputChange('patientAge', e.target.value)}
          className={`h-10 border ${
            errors.patientAge ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}
        />
        {errors.patientAge && <p className="text-red-500 text-xs">{errors.patientAge}</p>}
      </div>

      {/* Medical Condition */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Heart className="h-4 w-4 text-rose-500" />
          What is the medical condition? *
        </Label>
        <Input
          type="text"
          placeholder="e.g., Heart surgery, Cancer treatment, etc."
          value={formData.medicalCondition}
          onChange={(e) => onInputChange('medicalCondition', e.target.value)}
          className={`h-10 border ${
            errors.medicalCondition ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}
        />
        {errors.medicalCondition && <p className="text-red-500 text-xs">{errors.medicalCondition}</p>}
      </div>

      {/* Hospitalization Status */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Building className="h-4 w-4 text-rose-500" />
          Hospitalization Status *
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
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Building className="h-4 w-4 text-rose-500" />
          Which hospital? *
        </Label>
        <Input
          type="text"
          placeholder="Hospital name"
          value={formData.hospital}
          onChange={(e) => onInputChange('hospital', e.target.value)}
          className={`h-10 border ${
            errors.hospital ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}
        />
        {errors.hospital && <p className="text-red-500 text-xs">{errors.hospital}</p>}
      </div>

      {/* City - Added mb-8 for extra spacing */}
      <div className="space-y-2 mb-8">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-rose-500" />
          Enter Your City *
        </Label>
        <Input
          type="text"
          placeholder="City name"
          value={formData.city}
          onChange={(e) => onInputChange('city', e.target.value)}
          className={`h-10 border ${
            errors.city ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}
        />
        {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
      </div>

      {/* Urgency Level */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Radio className="h-4 w-4 text-rose-500" />
          How urgent is this fundraiser? *
        </Label>
        <Select value={formData.urgencyLevel} onValueChange={(value) => onInputChange('urgencyLevel', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.urgencyLevel ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Select urgency level" />
          </SelectTrigger>
          <SelectContent>
            {urgencyOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.urgencyLevel && <p className="text-red-500 text-xs">{errors.urgencyLevel}</p>}
      </div>
    </div>
  );
};

export default FundraiserStoryForm;
