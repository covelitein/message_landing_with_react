import React from 'react'

const Input = ({ label, type, value, className, labelClassName, placeholder }) => {
  return (
    <div className="mb-4 flex flex-col space-y-1">
      <label htmlFor="" className={labelClassName}>
        {label}
      </label>
      <input
        type={type}
        className={className}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input
