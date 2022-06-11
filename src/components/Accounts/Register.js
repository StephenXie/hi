import {React, useState} from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { connect } from 'react-redux';
import { FcGoogle } from "react-icons/fc";
import {registerUser} from "../../utils/actions/auth";
import { createMessage } from '../../utils/actions/messages';
const Register = (isAuthenticated) => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
        alert("Passwords do not match");
        return;
    } else {
        registerUser({username, password1, email});
        console.log("submitted");
    }
  };
  return (
    <>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            {/* <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div> */}
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <div className="mx-auto w-1/4">
                <img
                  src="https://blog.stephenxie.com/images/avatar.png"
                  className="w-full"
                  alt="avatar"
                />
              </div>
              <form onSubmit={onSubmit}>
                {/* Email input */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Register
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
                Already have an account? 
                <a
                  href="../account/login"
                  className="text-blue-600 ml-1 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
export default connect(mapStateToProps, {registerUser, createMessage})(Register);
