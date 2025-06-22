import { useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";

interface FundraiserDocumentFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const FundraiserDocumentForm = ({ formData, onInputChange, errors }: FundraiserDocumentFormProps) => {
  // Generate story automatically based on form data
  useEffect(() => {
    if (formData.patientName && formData.patientRelation && formData.medicalCondition && formData.hospital && formData.goalAmount) {
      let generatedStory = '';
      
      if (formData.patientRelation === 'self') {
        // First person story when raising funds for self
        generatedStory = `Hi,

My name is ${formData.patientName} and I am raising funds for my medical expenses. We have done all we can to collect the total amount required for the treatment but Rs.${formData.goalAmount} more is required to pay for all the medical expenses.

As the amount required is huge, I request you to kindly contribute towards my treatment and help me during this time of need. Each contribution is important!

Please help me raise this amount by clicking on the contribute button and sharing this page with your friends and family.

I am grateful for your help and wishes.

Thank you.`;
      } else {
        // Third person story when raising funds for others
        generatedStory = `I am raising funds for my ${formData.patientRelation}, ${formData.patientName} who is suffering from ${formData.medicalCondition} and is undergoing treatment at ${formData.hospital}.

The family has done all it can to collect the total amount required for the treatment but Rs.${formData.goalAmount} more is required to pay for all the medical expenses.

As the amount required is huge, I request you to kindly contribute towards the treatment and help during this time of need. Each contribution is important!

Please help us raise this amount by clicking on the contribute button and sharing this page with your friends and family.

We are grateful for your help and wishes.
Thank you.`;
      }

      if (!formData.fullStory || formData.fullStory.length < 50) {
        onInputChange('fullStory', generatedStory);
      }
    }
  }, [formData.patientName, formData.patientRelation, formData.medicalCondition, formData.hospital, formData.goalAmount, formData.fullStory, onInputChange]);

  return (
    <div className="space-y-6">
      {/* Story Section with Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Story Input */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Tell the story about why you are running a Fundraiser
          </h3>
          
          <div className="space-y-2">
            <Textarea
              placeholder="Write your story here..."
              value={formData.fullStory}
              onChange={(e) => onInputChange('fullStory', e.target.value)}
              className="min-h-[300px] resize-none"
            />
            {errors.fullStory && (
              <p className="text-sm text-red-600">{errors.fullStory}</p>
            )}
          </div>
        </div>

        {/* Right Side - Guidelines */}
        <div className="bg-teal-600 text-white p-6 rounded-lg">
          <h4 className="font-semibold text-white mb-4 text-lg">Tell Your Story</h4>
          <ul className="text-sm space-y-2 leading-relaxed">
            <li>• Write a story that does justice to your cause and makes the supporter care about your human.</li>
            <li>• Be specific about how you'll use the funds.</li>
            <li>• Follow these steps:</li>
            <li>• Talk about who you're raising funds for (if yourself or your loved one).</li>
            <li>• Explain why you're raising funds.</li>
            <li>• Describe how the funds will be used.</li>
            <li>• Let your supporters know what the next steps are for a fundraiser for this cause so they know what to expect.</li>
            <li>• Provide all details so your supporters don't have to ask about it.</li>
            <li>• Avoid posting information directly copied from documents.</li>
          </ul>
        </div>
      </div>

      {/* Add Medical Documents Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-gray-900">Add Medical Documents</h4>
          <Info className="h-4 w-4 text-gray-500" />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="nid" />
            <label htmlFor="nid" className="text-sm font-medium">
              NID
            </label>
          </div>
          
          <div className="text-sm text-orange-600 bg-orange-50 p-3 rounded">
            <p>Don't worry! You can skip this step for now and add the story details and medical documents after submitting.</p>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <Checkbox id="fundraiser-terms" className="mt-1" />
          <label htmlFor="fundraiser-terms" className="text-sm leading-relaxed">
            By proceeding, I agree to the <span className="text-blue-600 underline cursor-pointer">Fundraiser Terms of Use</span>, the maximum charge or a bank account based on a monthly maximum of any.
          </label>
        </div>
        
        <div className="flex items-start space-x-2">
          <Checkbox id="privacy-policy" className="mt-1" />
          <label htmlFor="privacy-policy" className="text-sm leading-relaxed">
            I agree to the <span className="text-blue-600 underline cursor-pointer">Terms of Use</span>, our <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>, <span className="text-blue-600 underline cursor-pointer">Fees & Pricing</span> and our guidelines about user Generated Content made available by you on our service as not to limit any activity and you grant us rights to process data about activity on our platform. I acknowledge and agree that I may receive text message from our service.
          </label>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
        <h4 className="font-semibold text-gray-900">Summary</h4>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Patient Name:</span>
            <p className="text-gray-700">{formData.patientName || 'Not specified'}</p>
          </div>
          
          <div>
            <span className="font-medium">Patient Age:</span>
            <p className="text-gray-700">{formData.patientAge || 'Not specified'}</p>
          </div>
          
          <div>
            <span className="font-medium">Medical Condition:</span>
            <p className="text-gray-700">{formData.medicalCondition || 'Not specified'}</p>
          </div>
          
          <div>
            <span className="font-medium">Hospital:</span>
            <p className="text-gray-700">{formData.hospital || 'Not specified'}</p>
          </div>
          
          <div>
            <span className="font-medium">City:</span>
            <p className="text-gray-700">{formData.city || 'Not specified'}</p>
          </div>
          
          <div>
            <span className="font-medium">Goal Amount:</span>
            <p className="text-gray-700">₹{formData.goalAmount || '0'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraiserDocumentForm;
