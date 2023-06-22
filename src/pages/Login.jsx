import React from 'react'
import svgAnime from "../assets/CompressedImages/anime.svg";
import { RiMessage2Fill } from "react-icons/ri";
import Input from "../components/subcomponents/Input";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 min-h-screen">
      <div className="h-full max-lg:hidden">
        <img src={svgAnime} alt="" className="h-full object-cover object-top" />
      </div>
      <main className="h-full flex justify-center items-center relative">
        <Link
          to={"/"}
          className="absolute top-1 left-2 p-2 rounded-full bg-blue-700 text-white text-sm flex items-center space-x-2"
        >
          <FaArrowLeft className="" />
          <span>Home</span>
        </Link>
        <form className="sm:w-11/12 mx-auto sm:px-5 w-full px-3">
          <div className="flex items-center space-x-1 justify-center">
            <RiMessage2Fill className="text-4xl text-blue-600" />
            <h3 className="font-[bellota] text-2xl bg-gradient-to-l from-blue-700 to-blue-400 font-[1000] text-gradient">
              ML
            </h3>
          </div>

          <div className="mt-3 mb-5">
            <h5 className="text-xl px-2">
              Welcome dear! <span>&#128075;</span>
            </h5>
          </div>

          <div className="px-2">
            <Input
              label={"Email"}
              type={"email"}
              labelClassName={"text-sm text-gray-600"}
              placeholder={"Enter email..."}
              className={
                "border-[1px] border-gray-400 px-3 py-2 w-full rounded-sm text-sm focus:outline-none focus:ring-0 text-gray-600"
              }
            />
            <Input
              label={"Password"}
              type={"email"}
              labelClassName={"text-sm text-gray-600"}
              placeholder={"Enter email..."}
              className={
                "border-[1px] border-gray-400 px-3 py-2 w-full rounded-sm text-sm focus:outline-none focus:ring-0 text-gray-600"
              }
            />
            <button className="w-full bg-blue-600 text-sm text-white rounded-sm p-2">
              Sign in
            </button>
            <div className="flex mt-3 text-[0.8rem]">
              <span>
                Don't have an account?{" "}
                <Link to={"/register"} className="underline text-blue-600">
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </form>
      </main>
    </section>
  );
}

export default Login
