
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Info, Upload, FileText, X, CheckCircle, Heart, Shield } from "lucide-react";

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
    <div className="space-y-8 max-w-5xl mx-auto p-6">
      {/* Story Section */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Share Your Heart</h3>
              <p className="text-indigo-100 mt-1">Tell your story and connect with supporters who care</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Side - Story Input */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                  <h4 className="text-lg font-semibold text-gray-800">Your Story</h4>
                </div>
                <Textarea 
                  placeholder="Write your heartfelt story here. Share why this cause matters, how the funds will help, and what impact supporters can make..." 
                  value={formData.fullStory} 
                  onChange={e => onInputChange('fullStory', e.target.value)} 
                  className="min-h-[320px] resize-none border-2 border-gray-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 rounded-xl text-base leading-relaxed p-6 bg-gray-50/50 transition-all duration-200"
                />
                {errors.fullStory && <p className="text-sm text-red-600 flex items-center gap-2 bg-red-50 p-3 rounded-lg">
                  <X className="h-4 w-4" />
                  {errors.fullStory}
                </p>}
              </div>
            </div>

            {/* Right Side - Guidelines */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white p-6 rounded-2xl shadow-xl">
                <h4 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                  <Info className="h-6 w-6" />
                  Writing Guide
                </h4>
                <ul className="text-sm space-y-4 leading-relaxed">
                  <li className="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Write from the heart - genuine stories resonate most</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Be specific about fund usage and treatment needs</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Clearly introduce who needs help and why</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Explain the medical condition in simple terms</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Share timeline and next steps clearly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Documents Section */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-bold">Medical Documents</h4>
              <p className="text-blue-100 mt-1">Upload reports, prescriptions, or hospital bills (Optional)</p>
            </div>
          </div>
        </div>
        
        <div className="p-8 space-y-6">
          {/* File Upload Area */}
          <div className="relative">
            <div className="border-3 border-dashed border-blue-300 rounded-2xl p-8 text-center bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Upload className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Upload Medical Documents</p>
                  <p className="text-sm text-gray-600 mb-4">PDF, JPG, PNG files up to 5MB each</p>
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
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                  >
                    <Upload className="h-5 w-5" />
                    Choose Files
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Selected Files */}
          {selectedFiles.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                <p className="text-lg font-semibold text-gray-800">Selected Files</p>
              </div>
              <div className="space-y-3">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-800 block truncate max-w-xs">{file.name}</span>
                        <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="w-8 h-8 flex items-center justify-center text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Optional Notice */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Info className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-base font-semibold text-amber-800 mb-2">Optional Step</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Don't worry if you don't have documents ready right now. You can always add medical reports, prescriptions, or hospital bills later after creating your fundraiser to build more trust with supporters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900">Terms & Conditions</h4>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <Checkbox 
              id="fundraiser-terms" 
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked === true)}
              className="mt-1.5 border-2 border-rose-300 data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500" 
            />
            <label htmlFor="fundraiser-terms" className="text-sm leading-relaxed text-gray-700 cursor-pointer">
              I agree to the <span className="text-rose-600 underline cursor-pointer hover:text-rose-700 font-semibold">Fundraiser Terms of Use</span> and understand the platform fees and charges that may apply to my campaign.
            </label>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <Checkbox 
              id="privacy-policy" 
              checked={privacyAccepted}
              onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
              className="mt-1.5 border-2 border-rose-300 data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500" 
            />
            <label htmlFor="privacy-policy" className="text-sm leading-relaxed text-gray-700 cursor-pointer">
              I agree to the <span className="text-rose-600 underline cursor-pointer hover:text-rose-700 font-semibold">Terms of Use</span>, 
              <span className="text-rose-600 underline cursor-pointer hover:text-rose-700 font-semibold"> Privacy Policy</span>, 
              <span className="text-rose-600 underline cursor-pointer hover:text-rose-700 font-semibold"> Fees & Pricing</span> and 
              guidelines about user generated content. I acknowledge that I may receive text messages from the service.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraiserDocumentForm;
