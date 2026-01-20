import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import SeoHeader from "../components/utils/SeoHeader";

function Login() {
  return (

    <div
      className="w-full min-h-screen flex items-center justify-center 
                    bg-primary px-4"
    >
      <SeoHeader
      title={"Login | iona.ai"}
      
      description={"Login | iona.ai"}/>
      
      <div
        className="w-full max-w-[420px] bg-white rounded-2xl shadow-2xl 
                      p-8 flex flex-col gap-6"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 font-lora">
            Welcome back to{" "}
            <span className="text-primary font-lora">iona.ai</span>
          </h1>
          <p className="text-gray-500 mt-2 text-sm font-lora">
            Log in using your LinkedIn account
          </p>
        </div>

        {/* LinkedIn Button */}
        <a
          href="https://dbmodel.az.iona.ai/dbmodel/auth/linkedin"
          className="w-full flex items-center justify-center gap-3 font-lora
                     bg-primary text-white font-semibold py-3 rounded-lg
                     hover:scale-95transition duration-200"
        >
          <FaLinkedinIn className="text-xl" />
          Continue with LinkedIn
        </a>

        {/* Info Divider */}
        <div className="flex items-center gap-3">
          <span className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-lora">
            Secure & passwordless
          </span>
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Help text */}
        <p className="text-sm text-center text-gray-600 font-lora">
          New to iona.ai?{" "}
          <a
            href="/signup"
            className="text-primary font-semibold hover:underline font-lora"
          >
            Create an account
          </a>
        </p>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-4 font-lora">
          By continuing, you agree to our{" "}
          <a
            href="/terms"
            className="text-primary cursor-pointer hover:underline"
          >
            Terms
          </a>{" "}
          &{" "}
          <a
            href="/privacy"
            className="text-primary cursor-pointer hover:underline"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
