import React from 'react'

const Property = ({ icon, propertyName, ...props }) => {
  return (
    <div
      className="flex items-center space-x-3 sm:p-2"
      {...props}
    >
        {icon}
      <span className="text-gray-600 max-sm:text-sm">
        {propertyName}
      </span>
    </div>
  );
}

export default Property
