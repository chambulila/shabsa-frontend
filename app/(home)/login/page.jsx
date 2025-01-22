"use client";

import { useAuth } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, user} = useAuth();
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async () => {
    const credentials = { email: email, password: password };
    setLoading(true);
    try {
     await login(credentials);
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
    }

  // if (localStorage.getItem('token')) {
  //   redirect("/dashboard");
  // }
  return (
    <div className="my-[6rem] w-full">
      <h2 className="text-3xl md:text-4xl font-bold  mb-4  text-center">Login Into Account</h2>
      <hr className="w-[15%] mx-auto mb-5" />
      <div className=" flex items-center justify-center  px-4">
        <div className="bg-white shadow-xl rounded-lg flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 relative">
            <img
              src="/logo.jpeg" // Replace with the actual path to your image
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Shabsa Ceramics & General Supply Ltd
            </h2>

            <form>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@example.com"
                  className="mt-1 block w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="mt-1 block w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {passwordVisible ? "🙈" : "👁️"}
                </button>
              </div>

              {/* Login Button */}
              <button
              disabled={loading}
                onClick={() => handleSubmit()}
                type="button"
                className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {loading ? 'Submitting...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
