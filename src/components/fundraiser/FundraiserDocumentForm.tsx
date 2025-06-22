
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Info, Upload, FileText, X, CheckCircle } from "lucide-react";

interface FundraiserDocumentFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const FundraiserDocumentForm = ({
  formData,
  onInputChange,
  errors
}: FundraiserDocumentFormProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Generate story automatically based on form data
  useEffect(() => {
    if (formData.patientName && formData.patientRelation && formData.medicalCondition && formData.hospital && formData.goalAmount) {
      const relationText = formData.patientRelation === 'self' ? 'myself' : `my ${formData.patientRelation}`;
      const patientText = formData.patientRelation === 'self' ? 'I am' : `${formData.patientName} is`;

      // Generate story with actual patient name instead of placeholder
      const generatedStory = `I am raising funds for ${relationText}, ${formData.patientName} who is suffering from ${formData.medicalCondition} and is undergoing treatment at ${formData.hospital}.

The family has done all it can to collect the total amount required for the treatment but Rs.${formData.goalAmount} more is required to pay for all the medical expenses.

As the amount required is huge, I request you to kindly contribute towards the treatment and help during this time of need. Each contribution is important!

Please help us raise this amount by clicking on the contribute button and sharing this page with your friends and family.

We are grateful for your help and wishes.
Thank you.`;
      if (!formData.fullStory || formData.fullStory.length < 50) {
        onInputChange('fullStory', generatedStory);
      }
    }
  }, [formData.patientName, formData.patientRelation, formData.medicalCondition, formData.hospital, formData.goalAmount, formData.fullStory, onInputChange]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setSelectedFiles(prev => [...prev, ...newFiles]);
      onInputChange('medicalDocuments', [...selectedFiles, ...newFiles].map(f => f.name).join(', '));
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    onInputChange('medicalDocuments', updatedFiles.map(f => f.name).join(', '));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Story Section */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 px-6 py-4 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center">
              <FileText className="h-4 w-4 text-white" />
            </div>
            Tell Your Story
          </h3>
          <p className="text-sm text-gray-600 mt-1">Share why you're raising funds and connect with supporters</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Left Side - Story Input */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-3">
              <Textarea 
                placeholder="Write your heartfelt story here..." 
                value={formData.fullStory} 
                onChange={e => onInputChange('fullStory', e.target.value)} 
                className="min-h-[280px] resize-none border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 rounded-lg text-sm leading-relaxed p-4"
              />
              {errors.fullStory && <p className="text-sm text-red-600 flex items-center gap-2">
                <X className="h-4 w-4" />
                {errors.fullStory}
              </p>}
            </div>
          </div>

          {/* Right Side - Guidelines */}
          <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
              <Info className="h-5 w-5" />
              Writing Tips
            </h4>
            <ul className="text-sm space-y-3 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Write a story that makes supporters care about your cause</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Be specific about how funds will be used</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Explain who you're raising funds for</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Describe the medical condition clearly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Share the next steps and timeline</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Provide complete details to avoid questions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Medical Documents Section */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Upload className="h-4 w-4 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Medical Documents</h4>
              <p className="text-sm text-gray-600">Upload medical reports, prescriptions, or hospital bills</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          {/* File Upload Area */}
          <div className="border-2 border-dashed border-blue-200 rounded-xl p-6 text-center bg-blue-50/30 hover:bg-blue-50/50 transition-all duration-200">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Upload className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Upload Medical Documents</p>
                <p className="text-xs text-gray-500 mb-3">PDF, JPG, PNG files up to 5MB each</p>
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  multiple
                  onChange={handleFileUpload} 
                  className="hidden" 
                  id="medical-documents" 
                />
                <label 
                  htmlFor="medical-documents" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors text-sm font-medium"
                >
                  <Upload className="h-4 w-4" />
                  Choose Files
                </label>
              </div>
            </div>
          </div>
          
          {/* Selected Files */}
          {selectedFiles.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Selected Files:</p>
              <div className="space-y-2">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700 truncate">{file.name}</span>
                      <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Optional Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-amber-800">Optional Step</p>
                <p className="text-sm text-amber-700 mt-1">
                  You can skip this step for now and add medical documents later after creating your fundraiser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-600" />
          Terms & Conditions
        </h4>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="fundraiser-terms" 
              checked={termsAccepted}
              onCheckedChange={setTermsAccepted}
              className="mt-1 border-rose-300 data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500" 
            />
            <label htmlFor="fundraiser-terms" className="text-sm leading-relaxed text-gray-700">
              I agree to the <span className="text-rose-600 underline cursor-pointer hover:text-rose-700 font-medium">Fundraiser Terms of Use</span> and understand the platform fees and charges.
            </label>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="privacy-policy" 
              checked={privacyAccepted}
              onCheckedChange={setPrivacyAccepted}
              className="mt-1 border-rose-300 data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500" 
            />
            <label htmlFor="privacy-policy" className="text-sm leading-relaxed text-gray-700">
              I agree to the <span className="text-rose-600 underline cursor-pointer hover:text-rose-700 font-medium">Terms of Use</span>, 
              <span className="text-rose-600 underline cursor-pointer hover:text-rose-700 font-medium"> Privacy Policy</span>, 
              <span className="text-rose-600 underline cursor-pointer hover:text-rose-700 font-medium"> Fees & Pricing</span> and 
              guidelines about user generated content. I acknowledge that I may receive text messages from the service.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraiserDocumentForm;
