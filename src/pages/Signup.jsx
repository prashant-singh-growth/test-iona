import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

function Signup() {
  return (
    <div className="w-full  h-screen flex items-center justify-center bg-primary px-4">
      
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6">
        
        {/* Logo / Brand */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 font-lora">
            Sign up for <span className="text-primary">iona.ai's Recruiters Sheet</span>
          </h1>
          <p className="text-gray-500 mt-2 text-sm font-lora">
            Join using your LinkedIn account
          </p>
        </div>

        {/* LinkedIn Button */}
        <a href="https://dbmodel.az.iona.ai/dbmodel/auth/linkedin"
          className="w-full flex items-center justify-center gap-3 bg-primary
                     text-white font-semibold py-3 rounded-lg
                     hover:scale-95 transition duration-200 font-lora"
        >
          <FaLinkedinIn className="text-xl" />
          Continue with LinkedIn
        </a>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <span className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-lora">No password required</span>
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Benefits */}
        <ul className="text-sm text-gray-600 space-y-2 font-lora">
          <li>✔️ One-click signup</li>
          <li>✔️ Secure LinkedIn authentication</li>
          <li>✔️ No spam or hidden charges</li>
        </ul>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-4 font-lora">
          By continuing, you agree to our{" "}
          <a href="/terms" className="text-primary cursor-pointer hover:underline">
            Terms
          </a>{" "}
          &{" "}
          <a href="/privacy" className="text-primary cursor-pointer hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
