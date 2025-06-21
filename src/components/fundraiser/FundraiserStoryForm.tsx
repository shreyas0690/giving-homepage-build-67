
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText } from "lucide-react";

interface FundraiserStoryFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const FundraiserStoryForm = ({ formData, onInputChange, errors }: FundraiserStoryFormProps) => {
  return (
    <div className="space-y-4">
      {/* Story */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <FileText className="h-4 w-4 text-rose-500" />
          Your Story *
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
    </div>
  );
};

export default FundraiserStoryForm;
