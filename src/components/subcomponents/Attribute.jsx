import React from 'react'

const Attribute = ({ attrName, slogan, image, className, ...props }) => {
  return (
    <div className={className}>
      <div
        className="w-full min-h-[12rem] bg-white shadow-2xl p-2 rounded-xl max-mf:w-5/6"
        {...props}
      >
        <h1 className="text-center sm:text-lg mb-2">{attrName}</h1>
        <img
          src={image}
          alt="scalable"
          className="mx-auto text-[rgba(0,0,0,0.7)] h-[5rem]"
        />
        <p className="px-4 text-center sm:text-md text-gray-500 mt-4 text-sm">
          {slogan}
        </p>
      </div>
    </div>
  );
}

export default Attribute
