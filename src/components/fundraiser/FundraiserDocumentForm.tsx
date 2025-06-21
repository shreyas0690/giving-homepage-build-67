
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Upload, Phone, Mail } from "lucide-react";

interface FundraiserDocumentFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const urgencyLevelOptions = [
  { value: 'immediate', label: 'Immediate (within 1 week)' },
  { value: 'urgent', label: 'Urgent (within 1 month)' },
  { value: 'moderate', label: 'Moderate (within 3 months)' },
  { value: 'low', label: 'Low (within 6 months)' },
];

const FundraiserDocumentForm = ({ formData, onInputChange, errors }: FundraiserDocumentFormProps) => {
  return (
    <div className="space-y-4">
      {/* Fundraiser Title */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <FileText className="h-4 w-4 text-rose-500" />
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
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <FileText className="h-4 w-4 text-rose-500" />
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
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <FileText className="h-4 w-4 text-rose-500" />
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
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Phone className="h-4 w-4 text-rose-500" />
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
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Upload className="h-4 w-4 text-rose-500" />
          Upload Medical Documents (Optional)
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

export default FundraiserDocumentForm;
