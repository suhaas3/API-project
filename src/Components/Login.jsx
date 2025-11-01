import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-center text-2xl font-bold text-primary mb-4">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email or Username */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Email or Username</span>
            </label>
            <input
              type="text"
              name="emailOrUsername"
              placeholder="Enter your email or username"
              className="input input-bordered w-full"
              value={formData.emailOrUsername}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pr-12"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  // Eye Open Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.483 1.49-1.299 2.821-2.373 3.878M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  // Eye Closed Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18M9.88 9.88a3 3 0 104.24 4.24M6.1 6.1C4.532 7.478 3.307 9.148 2.458 12c1.274 4.057 5.065 7 9.542 7a9.967 9.967 0 005.905-2.122"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full mt-2">Login</button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
