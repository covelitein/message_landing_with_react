import React from 'react'

const Hook = () => {
  return (
    <aside className="h-[23rem] mt-12 bg-[url(./assets/CompressedImages/hook3.webp)] bg-cover bg-center bg-[no-repeat] bg-fixed text-white">
      <div className="h-full w-full bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center">
        <div className="sm:w-11/12 sm:px-16 text-center capitalize w-full px-3"
            data-aos="fade-in"
            data-aos-duration="1000">
          <h3 className="sm:text-3xl text-lg">
            We prioritize excellent service delivery.
          </h3>
          <h5 className="sm:text-lg font-[bellota] text-sm">
            You will never regret choosing us
          </h5>
          <button className="bg-blue-700 px-4 py-2 mt-3 rounded-md max-sm:text-[0.8rem]">Subscribe to newsletter</button>
        </div>
      </div>
    </aside>
  );
}

export default Hook
