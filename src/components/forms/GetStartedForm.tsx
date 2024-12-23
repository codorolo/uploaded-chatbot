import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { services } from '../services/serviceData';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import FormStatus from './FormStatus';

interface FormData {
  name: string;
  email: string;
  company: string;
  interestedService: string;
  problems: string;
  notes: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  interestedService: '',
  problems: '',
  notes: ''
};

export default function GetStartedForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: JSON.stringify({
            interestedService: formData.interestedService,
            problems: formData.problems,
            notes: formData.notes
          }),
          form_type: 'get_started'
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          id="name"
          label="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <FormField
        id="company"
        label="Company Name"
        required
        value={formData.company}
        onChange={handleChange}
      />

      <FormField
        id="interestedService"
        label="Interested Service"
        type="select"
        required
        value={formData.interestedService}
        onChange={handleChange}
        options={services.map(service => ({
          value: service.title,
          label: service.title
        }))}
      />

      <FormField
        id="problems"
        label="What problems are you looking to solve?"
        type="textarea"
        required
        value={formData.problems}
        onChange={handleChange}
        rows={4}
      />

      <FormField
        id="notes"
        label="Any additional notes"
        type="textarea"
        value={formData.notes}
        onChange={handleChange}
        rows={3}
      />

      <FormStatus status={submitStatus} />

      <div className="text-center">
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  );
}