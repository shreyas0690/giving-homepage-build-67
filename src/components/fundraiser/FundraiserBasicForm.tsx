
import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, DollarSign, Users } from "lucide-react";

interface FundraiserBasicFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const patientRelationOptions = [
  { value: 'self', label: 'Self' },
  { value: 'father', label: 'Father' },
  { value: 'mother', label: 'Mother' },
  { value: 'husband', label: 'Husband' },
  { value: 'wife', label: 'Wife' },
  { value: 'son', label: 'Son' },
  { value: 'daughter', label: 'Daughter' },
  { value: 'brother', label: 'Brother' },
  { value: 'sister', label: 'Sister' },
  { value: 'friend', label: 'Friend' },
  { value: 'other', label: 'Other' },
];

const FundraiserBasicForm = ({ formData, onInputChange, errors }: FundraiserBasicFormProps) => {
  return (
    <div className="space-y-4">
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
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-rose-500" />
          Goal Amount *
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
          <Input
            type="number"
            placeholder="50,000"
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
        <Label className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Users className="h-4 w-4 text-rose-500" />
          Patient Relationship *
        </Label>
        <Select value={formData.patientRelation} onValueChange={(value) => onInputChange('patientRelation', value)}>
          <SelectTrigger className={`h-10 border ${
            errors.patientRelation ? 'border-red-400' : 'border-gray-300'
          } focus:border-rose-500`}>
            <SelectValue placeholder="Select relationship" />
          </SelectTrigger>
          <SelectContent>
            {patientRelationOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.patientRelation && <p className="text-red-500 text-xs">{errors.patientRelation}</p>}
      </div>
    </div>
  );
};

export default FundraiserBasicForm;
