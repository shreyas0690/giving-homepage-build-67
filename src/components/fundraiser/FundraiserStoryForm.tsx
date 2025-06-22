import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Calendar, Heart, Building, MapPin } from "lucide-react";
interface FundraiserStoryFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}
const patientAgeOptions = [{
  value: 'below_5',
  label: 'Below 5 years'
}, {
  value: '6_10',
  label: '6 - 10 years'
}, {
  value: '11_17',
  label: '11 - 17 years'
}, {
  value: '18_30',
  label: '18 - 30 years'
}, {
  value: '30_40',
  label: '30 - 40 years'
}, {
  value: 'above_40',
  label: 'Above 40 years'
}];
const medicalConditionOptions = [{
  value: 'brain_abscess',
  label: 'Brain abscess/ Cerebral abscess'
}, {
  value: 'brain_aneurysm',
  label: 'Brain aneurysm/ Intracranial aneurysm'
}, {
  value: 'brain_fungal_infection',
  label: 'Brain fungal infection'
}, {
  value: 'brain_haemorrhage',
  label: 'Brain haemorrhage'
}, {
  value: 'brain_tumor',
  label: 'Brain tumor'
}, {
  value: 'brain_metastasis',
  label: 'Brain/ Cerebral metastasis'
}, {
  value: 'brainstem_glioma',
  label: 'Brainstem glioma'
}, {
  value: 'traumatic_brain_injury',
  label: 'Traumatic Brain Injury'
}, {
  value: 'brain_tumor_stage_4',
  label: 'Tumour on brain stem 4th stage (adults)'
}, {
  value: 'cerebral_cyst',
  label: 'Cerebral Cyst/ Cystic Brain'
}, {
  value: 'cerebral_aneurysm_brain',
  label: 'Cerebral Aneurysm/ Intracranial Aneurysm/ Brain Aneurysm'
}, {
  value: 'aneurysm_dilatation',
  label: 'Aneurysm/ Aneurysmal dilatation- Can occur in aorta, brain, back of the knee, intestine or spleen'
}, {
  value: 'acute_necrotising_encephalopathy',
  label: 'Acute necrotising encephalopathy'
}, {
  value: 'alzheimer',
  label: 'Alzheimer'
}, {
  value: 'aphasia',
  label: 'Aphasia'
}, {
  value: 'bladder_disorders',
  label: 'Bladder disorders'
}, {
  value: 'carcinoma_craniopharyngioma',
  label: 'Carcinoma Craniopharyngioma'
}, {
  value: 'central_neurocytomas',
  label: 'Central neurocytomas'
}, {
  value: 'cerebral_atrophy',
  label: 'Cerebral atrophy'
}, {
  value: 'cerebral_edema',
  label: 'Cerebral edema'
}, {
  value: 'medical_condition_not_listed',
  label: 'Medical condition not in the list'
}];
const hospitalizationOptions = [{
  value: 'currently_hospitalised',
  label: 'Currently hospitalised'
}, {
  value: 'does_not_require',
  label: 'Does not require hospitalisation'
}, {
  value: 'recently_discharged',
  label: 'Recently discharged from the hospital'
}, {
  value: 'will_be_hospitalised',
  label: 'Will be hospitalised soon'
}];
const hospitalOptions = [{
  value: 'medanta_indore',
  label: 'Medanta Indore Super Specialty Hospital, Indore'
}, {
  value: 'mediplus_indore',
  label: 'Mediplus Hospital, Indore'
}, {
  value: 'sage_medicare',
  label: 'Sage Medicare Center, Indore'
}, {
  value: 'medisquare_indore',
  label: 'Medisquare Hospital & Research Centre, Indore'
}, {
  value: 'sri_aurobindo',
  label: 'Sri Aurobindo Institute of Medical Sciences, Indore'
}, {
  value: 'indore_eye_hospital',
  label: 'Indore Eye hospital, Indore'
}, {
  value: 'life_aesthetics',
  label: 'Life Aesthetics, Indore'
}, {
  value: 'getwell_hospital',
  label: 'Getwell Hospital, Indore'
}, {
  value: 'sahaj_hospital',
  label: 'Sahaj Hospital, Indore'
}, {
  value: 'suyash_hospital',
  label: 'Suyash Hospital, Indore'
}, {
  value: 'bombay_hospital',
  label: 'Bombay Hospital, Indore'
}, {
  value: 'synergy_hospital',
  label: 'Synergy Hospital, Indore'
}, {
  value: 'aditya_hospital',
  label: 'Aditya Hospital, Indore'
}, {
  value: 'vedant_hospital',
  label: 'Vedant Hospital, Indore'
}, {
  value: 'noble_hospital',
  label: 'Noble Hospital, Indore'
}, {
  value: 'neema_hospital',
  label: 'Neema Hospital, Indore'
}, {
  value: 'apollo_hospitals',
  label: 'Apollo Hospitals, Indore'
}, {
  value: 'gokuldas_hospital',
  label: 'Gokuldas Hospital, Indore'
}, {
  value: 'arvind_hospital',
  label: 'Arvind Hospital, Indore'
}, {
  value: 'vishesh_hospital',
  label: 'Vishesh Hospital, Indore'
}, {
  value: 'other',
  label: 'And More'
}];
const FundraiserStoryForm = ({
  formData,
  onInputChange,
  errors
}: FundraiserStoryFormProps) => {
  return <div className="space-y-4">
      {/* Patient's Full Name */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <User className="h-4 w-4 text-rose-500" />
          Patient's full name *
        </Label>
        <Input placeholder="Name as mentioned in Patient's Aadhar card" value={formData.patientName || ''} onChange={e => onInputChange('patientName', e.target.value)} className={`h-10 border ${errors.patientName ? 'border-red-400' : 'border-gray-300'} focus:border-rose-500`} />
        {errors.patientName && <p className="text-red-500 text-xs">{errors.patientName}</p>}
      </div>

      {/* Patient's Age */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Calendar className="h-4 w-4 text-rose-500" />
          Patient's age *
        </Label>
        <Select value={formData.patientAge} onValueChange={value => onInputChange('patientAge', value)}>
          <SelectTrigger className={`h-10 border ${errors.patientAge ? 'border-red-400' : 'border-gray-300'} focus:border-rose-500`}>
            <SelectValue placeholder="Please enter a valid age group" />
          </SelectTrigger>
          <SelectContent>
            {patientAgeOptions.map(option => <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>)}
          </SelectContent>
        </Select>
        {errors.patientAge && <p className="text-red-500 text-xs">{errors.patientAge}</p>}
      </div>

      {/* Ailment / Medical Condition */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Heart className="h-4 w-4 text-rose-500" />
          Ailment / Medical Condition *
        </Label>
        <Select value={formData.medicalCondition} onValueChange={value => onInputChange('medicalCondition', value)}>
          <SelectTrigger className={`h-10 border ${errors.medicalCondition ? 'border-red-400' : 'border-gray-300'} focus:border-rose-500`}>
            <SelectValue placeholder="Select medical condition" />
          </SelectTrigger>
          <SelectContent className="max-h-48 overflow-y-auto">
            {medicalConditionOptions.map(option => <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>)}
          </SelectContent>
        </Select>
        {errors.medicalCondition && <p className="text-red-500 text-xs">{errors.medicalCondition}</p>}
      </div>

      {/* Hospitalization Status */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Building className="h-4 w-4 text-rose-500" />
          Hospitalization status *
        </Label>
        <Select value={formData.hospitalizationStatus} onValueChange={value => onInputChange('hospitalizationStatus', value)}>
          <SelectTrigger className={`h-10 border ${errors.hospitalizationStatus ? 'border-red-400' : 'border-gray-300'} focus:border-rose-500`}>
            <SelectValue placeholder="Select hospitalization status" />
          </SelectTrigger>
          <SelectContent>
            {hospitalizationOptions.map(option => <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>)}
          </SelectContent>
        </Select>
        {errors.hospitalizationStatus && <p className="text-red-500 text-xs">{errors.hospitalizationStatus}</p>}
      </div>

      {/* Hospital */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Building className="h-4 w-4 text-rose-500" />
          Hospital *
        </Label>
        <Select value={formData.hospital} onValueChange={value => onInputChange('hospital', value)}>
          <SelectTrigger className={`h-10 border ${errors.hospital ? 'border-red-400' : 'border-gray-300'} focus:border-rose-500`}>
            <SelectValue placeholder="Select hospital" />
          </SelectTrigger>
          <SelectContent className="max-h-48 overflow-y-auto">
            {hospitalOptions.map(option => <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>)}
          </SelectContent>
        </Select>
        {errors.hospital && <p className="text-red-500 text-xs">{errors.hospital}</p>}
      </div>

      {/* City */}
      <div className="space-y-2.5 pb-1.5 ">
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-rose-500" />
          Enter Your City *
        </Label>
        <Input placeholder="Enter your city" value={formData.city || ''} onChange={e => onInputChange('city', e.target.value)} className={`h-10 border ${errors.city ? 'border-red-400' : 'border-gray-300'} focus:border-rose-500`} />
        {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
      </div>
    </div>;
};
export default FundraiserStoryForm;