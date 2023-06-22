import { useState } from 'react'
import { RiMessage2Fill } from 'react-icons/ri'
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <footer
      className=" mt-11 mb-3"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <main className="w-11/12 mx-auto grid lg:grid-cols-5 md:grid-cols-2 gap-1 grid-cols-1 py-7">
        <div className="lg:col-span-2 p-3">
          <div className="flex items-center space-x-3">
            <RiMessage2Fill className="text-5xl text-blue-600" />
            <h3 className="font-[bellota] text-xl bg-gradient-to-l from-blue-700 to-blue-400 font-[1000] text-gradient">
              ML
            </h3>
          </div>
          <p className="text-sm mt-3 text-gray-700">
            Let's make your dream come true today.
          </p>

          <div className="flex mt-9 space-x-7 text-xl text-blue-600">
            <FaLinkedin />
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-blue-600">Our Company</h3>
          <div className="flex flex-col space-y-5 mt-3  text-sm px-2 text-gray-700">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Faqs</a>
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-blue-600">Help & support</h3>
          <ul className="flex flex-col space-y-5 mt-3 text-sm text-gray-700 px-2">
            <li className="">Faq</li>
            <li className="">Login</li>
            <li className="">Register</li>
          </ul>
        </div>
        <div className="p-3">
          <h3 className="text-blue-600">Contact Info</h3>
          <ul className="flex flex-col space-y-5 mt-3 text-gray-700 text-sm">
            <li>john@doe129.net</li>
            <li>+44 20 7123 4567</li>
            <li>123 Main St Apt Anytown</li>
            <li>MON-FRI &rarr; 10PM</li>
          </ul>
        </div>
      </main>
      <div className="w-full h-[0.3px] bg-gray-200 mb-5"></div>
      <h3 className="text-sm text-center my-5">
        &copy; ML All rights reserved {year}{" "}
      </h3>
    </footer>
  );
}

export default Footer
