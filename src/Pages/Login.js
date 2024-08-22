import React from "react";
import login from "../Images/login.png";
import google from "../Images/google.png";
import facebook from "../Images/facebook.png";
import "../Style/Style.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login_page min-w-full min-h-screen flex items-center">
        <div className="container mx-auto rounded-2xl">
          <div className="row flex md:w-11/12 mx-auto h-100 shadow-md rounded-2xl">
            <div className="w-full md:w-1/2 login-box bg-white md:rounded-l-2xl md:rounded-r-none rounded-2xl 2xl:p-20 xl:p-20 md:p-8 p-4 ">
              <div className="md:px-5">
                <h2 className="text-center text-3xl font-bold uppercase">
                  Login
                </h2>
                <p className="text-center text-base font-normal text-neutral-600 mt-1 mb-4">
                  How to i get started lorem ipsum dolor at?
                </p>
                <div className="inputs mx-auto w-full overflow-hidden flex flex-col gap-y-4">
                  <input
                    type="text"
                    placeholder=" &#xf007; Username"
                    className="bg-purple-100/50 rounded-2xl px-4 py-2.5 text-sm focus:outline-none placeholder:text-stone-900 placeholder:text-xs placeholder:font-normal"
                  />
                  <input
                    type="text"
                    placeholder=" &#xf007; Password"
                    className="bg-orange-50 rounded-2xl px-4 py-2.5 text-sm focus:outline-none placeholder:text-stone-900 placeholder:text-xs placeholder:font-normal"
                  />
                </div>
                <div className="text-center mt-6">
                  <button className="login_button focus:outline-none rounded-xl py-3.5 px-6 text-xs font-bold text-white">
                    Login Now
                  </button>
                </div>
                <div className="text-center mt-6 ">
                  <p className="text-base font-normal login_other_font">
                    <strong>Login</strong> with Others
                  </p>
                </div>
                <div className="flex justify-center flex-col gap-y-4 mt-6">
                  <button className="flex items-center justify-center border-2 border-slate-200 rounded-2xl py-2">
                    <img src={google} alt="google logo" />
                    <span className="ml-3 text-xs font-normal">
                      Login with <span className="font-bold">google</span>
                    </span>
                  </button>
                  <button className="flex items-center justify-center border-2 border-slate-200 rounded-2xl py-2">
                    <img src={facebook} alt="facebook logo" />
                    <span className="ml-3 text-xs font-normal">
                      Login with <span className="font-bold">Facebook</span>
                    </span>
                  </button>
                </div>
                <div className="mt-7 text-center text-sm font-normal">
                  Don't have an account ?
                  <span className="font-bold ml-2">
                    <NavLink to="/register">Sign Up</NavLink>
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

export default Login;
