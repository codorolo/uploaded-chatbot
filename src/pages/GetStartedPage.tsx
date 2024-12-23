import React from 'react';
import GetStartedForm from '../components/forms/GetStartedForm';

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Get Started with Flow AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Tell us about your business needs and we'll help you get started with AI automation.
          </p>
          <GetStartedForm />
        </div>
      </div>
    </div>
  );
}