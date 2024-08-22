import React from "react";
import "../Style/Style.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="login_page min-w-full min-h-screen flex items-center">
        <div className="container mx-auto rounded-2xl">
          <div className="row flex md:w-11/12 mx-auto h-100 shadow-md rounded-2xl">
            <div className="w-full md:w-1/2 login-box bg-white md:rounded-l-2xl md:rounded-r-none rounded-2xl 2xl:p-24 xl:p-20 md:p-8 p-4 ">
              <div className="md:px-5">
                <h2 className="text-center text-3xl font-bold uppercase">
                  Sign Up
                </h2>
                <p className="text-center text-base font-normal text-neutral-600 mt-1 mb-4">
                  How to i get started lorem ipsum dolor at?
                </p>
                <div className="inputs mx-auto w-full overflow-hidden flex flex-col gap-y-4">
                  <input
                    type="text"
                    placeholder=" &#xf007; UserName"
                    className="bg-orange-100/75 rounded-2xl px-4 py-2.5 text-sm focus:outline-none placeholder:text-stone-900 placeholder:text-xs placeholder:font-normal"
                  />
                  <input
                    type="email"
                    placeholder=" &#xf007; Email"
                    className="bg-orange-100/75 rounded-2xl px-4 py-2.5 text-sm focus:outline-none placeholder:text-stone-900 placeholder:text-xs placeholder:font-normal"
                  />
                  <input
                    type="text"
                    placeholder=" &#xf007; Password"
                    className="bg-orange-100/75 rounded-2xl px-4 py-2.5 text-sm focus:outline-none placeholder:text-stone-900 placeholder:text-xs placeholder:font-normal"
                  />
                  <input
                    type="text"
                    placeholder=" &#xf007; Confirm password"
                    className="bg-orange-100/75 rounded-2xl px-4 py-2.5 text-sm focus:outline-none placeholder:text-stone-900 placeholder:text-xs placeholder:font-normal"
                  />
                </div>
                <div className="text-center mt-9">
                  <button className="login_button focus:outline-none rounded-xl py-3.5 px-6 text-xs font-bold text-white">
                    Register
                  </button>
                </div>
                <div className="mt-7 text-center text-sm font-normal">
                  Already have an account ?
                  <span className="font-bold ml-2">
                    <NavLink to="/">Login</NavLink>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/2 image_box overflow-hidden rounded-r-2xl hidden md:block border">
              <div className="image_box">
                {/* <img src={login} alt="login" className="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
