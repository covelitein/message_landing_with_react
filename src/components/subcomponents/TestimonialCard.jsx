import React from 'react'

const TestimonialCard = ({ testimony, img, tName, children,  ...props }) => {
  return (
    <div className="shadow-1 rounded-md" {...props}>
      <div className="mt-4">
        <p className="p-3 text-sm italic">
          <q>{testimony}</q>
        </p>
        <div className="w-[8rem] p-3">
          <img src={img} alt="person1" className="rounded-full" />
        </div>
      </div>
      <div className="mt-1">
        <h3 className="text-gray-600 px-3 text-base">{tName}</h3>
      </div>
      <div className="flex items-center space-x-2 text-lg text-[#ffa550] px-2 mb-3">
        {children}
      </div>
    </div>
  );
}

export default TestimonialCard
