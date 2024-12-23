import React from 'react';
import ContactForm from '../components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Have questions about our AI automation solutions? We're here to help.
          </p>
          <ContactForm formType="contact" />
        </div>
      </div>
    </div>
  );
}