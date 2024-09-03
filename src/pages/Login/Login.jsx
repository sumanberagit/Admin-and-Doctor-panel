import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorlogo from "../../assets/images/doctorlogo.png";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/adminsignin", {
        email,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);

        setErrorMessage("");
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 ">
      <div className="flex justify-center">
        <img src={doctorlogo} alt="Logo" />
      </div>
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          Sign In
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm flex flex-col gap-5">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={clearErrorMessage} // Clear the error message when the input field is focused
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={clearErrorMessage} // Clear the error message when the input field is focused
              />
            </div>
          </div>

          {/* Display backend error message */}
          {errorMessage && (
            <div className="text-red-500 text-sm text-center">
              {errorMessage}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>

          <div className="flex justify-center text-sm text-gray-500">Or</div>

          <div className="flex justify-between">
            <button
              type="button"
              className="w-1/2 flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mr-2"
            >
              <img src={facebook} alt="Facebook" className="h-5 w-5 mr-2" />
              Facebook
            </button>
            <button
              type="button"
              className="w-1/2 flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 ml-2"
            >
              <img src={google} alt="Google" className="h-5 w-5 mr-2" />
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
