import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            {/* <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://blog.stephenxie.com/images/avatar.png"
                className="w-full"
                alt="Phone image"
              />
            </div> */}
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <div className="mx-auto w-1/4">
                <img
                  src="https://blog.stephenxie.com/images/avatar.png"
                  className="w-full"
                  alt="Phone image"
                />
              </div>
              <form>
                {/* Email input */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </a>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                <button
                  type="submit"
                  className="inline-block px-7 py-3 outline-none bg-white text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-1 focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <div className="flex flex-row justify-center">
                    <FcGoogle className="w-4 h-4 mr-2" />
                    Continue with Google
                  </div>
                </button>
              </form>
              <p className="text-sm font-medium mt-2 pt-1 mb-0">
                Don't have an account?
                <a
                  href="../account/register"
                  className="text-blue-600 ml-1 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
