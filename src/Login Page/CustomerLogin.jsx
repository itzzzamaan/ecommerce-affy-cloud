import React, { useState } from "react";

const CustomerLogin = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isRegistering ? "Customer Registration" : "Customer Login"}
      </h2>

      <form className="space-y-4">
        {isRegistering && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border px-3 py-2 rounded"
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded"
        />
        {isRegistering && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border px-3 py-2 rounded"
          />
        )}
        <button className="w-full bg-black text-white cursor-pointer py-2 rounded hover:bg-zinc-800 transition">
          {isRegistering ? "Register" : "Login"}
        </button>
      </form>

      <div className="text-center mt-4 text-sm">
        {isRegistering ? (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setIsRegistering(false)}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Login here
            </button>
          </>
        ) : (
          <>
            New user?{" "}
            <button
              onClick={() => setIsRegistering(true)}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Register here
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerLogin;
