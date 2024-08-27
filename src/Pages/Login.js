import React from "react";
import {
  FaUserAlt,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaTwitter,
} from "react-icons/fa";
import loginImage from "../Images/login.png";
import Google from "../Images/icons/Google";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full m-6 sm:m-8 md:m-12 max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 sm:p-20 p-9">
          <h2 className="text-2xl font-bold text-gray-700 text-center">
            LOGIN
          </h2>
          <p className="text-sm text-gray-600 text-center mt-4">
            Log in to access your account.
          </p>

          <div className="mt-8">
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaUserAlt className="text-gray-400 mr-3" />
              <input
                className="w-full text-gray-700 bg-transparent focus:outline-none"
                type="text"
                placeholder="Username"
              />
            </div>

            <div className="flex items-center border-b border-gray-300 py-2 mt-6">
              <FaLock className="text-gray-400 mr-3" />
              <input
                className="w-full text-gray-700 bg-transparent focus:outline-none"
                type="password"
                placeholder="Password"
              />
            </div>

            <button className="w-full bg-primary text-white font-bold py-2 px-4 mt-8 rounded-full shadow-md hover:bg-primary-hover transition duration-300">
              Login
            </button>
          </div>

          <p className="mt-8 text-center text-gray-600 font-semibold">
            Login with Others
          </p>

          <div className="flex items-center justify-center mt-4 space-x-4">
            <div className="cursor-pointer w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg hover:bg-primary-hover group transition duration-300">
              <Google className="group-hover:fill-white" />
            </div>
            <div className="cursor-pointer w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg hover:bg-primary-hover group transition duration-300">
              <FaFacebookF
                className="text-[#1877f2] group-hover:text-white"
                size={24}
              />
            </div>
            <div className="cursor-pointer w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg hover:bg-primary-hover group transition duration-300">
              <FaApple
                className="text-black group-hover:text-white"
                size={24}
              />
            </div>
            <div className="cursor-pointer w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg hover:bg-primary-hover group transition duration-300">
              <FaTwitter
                className="text-[#00aaec] group-hover:text-white"
                size={24}
              />
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Don't have an account?{" "}
            <NavLink to={"/register"} className="text-primary cursor-pointer">
              Create Now
            </NavLink>
          </p>
        </div>

        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center rounded-tr-3xl rounded-br-3xl"
          style={{
            backgroundImage: `url(${loginImage})`,
          }}
        />
      </div>
    </div>
  );
}

export default Login;
