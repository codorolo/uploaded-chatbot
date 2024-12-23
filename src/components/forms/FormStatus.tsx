import React from 'react';

interface FormStatusProps {
  status: 'idle' | 'success' | 'error';
}

export default function FormStatus({ status }: FormStatusProps) {
  if (status === 'success') {
    return (
      <div className="text-green-600 text-center">
        Thank you for your submission! We'll be in touch soon.
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="text-red-600 text-center">
        There was an error submitting the form. Please try again.
      </div>
    );
  }

  return null;
}