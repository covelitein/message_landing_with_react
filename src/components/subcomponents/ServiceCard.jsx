import React from 'react'

const ServiceCard = ({ children, PropclassName, ...props }) => {
  return (
    <div {...props}>
      <div className={PropclassName}>{children}</div>
    </div>
  );
}

export default ServiceCard
