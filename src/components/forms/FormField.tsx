import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'textarea' | 'select';
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  options?: Array<{ value: string; label: string; }>;
  rows?: number;
  className?: string;
}

export default function FormField({
  id,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  options = [],
  rows = 4,
  className = ''
}: FormFieldProps) {
  const baseClassName = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500";
  
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && '*'}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={id}
          required={required}
          rows={rows}
          value={value}
          onChange={onChange}
          className={baseClassName}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          required={required}
          value={value}
          onChange={onChange}
          className={baseClassName}
        >
          <option value="">Select an option</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          required={required}
          value={value}
          onChange={onChange}
          className={baseClassName}
        />
      )}
    </div>
  );
}