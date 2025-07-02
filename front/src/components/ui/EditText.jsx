import React from 'react';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full px-4 py-1 text-muted font-normal text-center bg-transparent border-none outline-none rounded-lg"
        style={{ minHeight: '32px' }}
      />
    </div>
  );
};

export default EditText;