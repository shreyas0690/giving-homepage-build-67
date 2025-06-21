
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Target } from "lucide-react";

interface FundraiserStoryFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const FundraiserStoryForm = ({ formData, onInputChange, errors }: FundraiserStoryFormProps) => {
  return (
    <div className="space-y-4">
      {/* Title */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <FileText className="h-4 w-4 text-rose-500" />
          Fundraiser Title *
        </Label>
        <Input
          placeholder="e.g., Help Save Arya's Life - Medical Treatment"
          value={formData.title}
          onChange={(e) => onInputChange('title', e.target.value)}
          className={`h-10 border ${
            errors.title ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}
        />
        {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
      </div>

      {/* Story */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900">Your Story *</Label>
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

      {/* Urgency */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Target className="h-4 w-4 text-rose-500" />
          Urgency Level *
        </Label>
        <Select value={formData.urgency} onValueChange={(value) => onInputChange('urgency', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.urgency ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Select urgency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="critical">Critical - Life threatening</SelectItem>
            <SelectItem value="urgent">Urgent - Few weeks needed</SelectItem>
            <SelectItem value="moderate">Moderate - Can wait</SelectItem>
          </SelectContent>
        </Select>
        {errors.urgency && <p className="text-red-500 text-xs">{errors.urgency}</p>}
      </div>
    </div>
  );
};

export default FundraiserStoryForm;
