import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LPThirdForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    functional_area: "",
    book_claim_method: "",
    seniority: "",
    booth_meeting_and_book_consent: false,

    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    gclid: "",
    fbclid: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const portalId = "146385824";
  const formId = "6ed9d231-36f4-4dc2-9710-bc70e63e4b6e";

  // Capture UTM + tracking params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const updates = {};

    [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "gclid",
      "fbclid",
    ].forEach((key) => {
      if (params.has(key)) updates[key] = params.get(key);
    });

    setFormData((prev) => ({ ...prev, ...updates }));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
      return;
    }

    if (name === "phone") {
      if (/^\d*$/.test(value) && value.length <= 12) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form
  const validateForm = () => {
    const required = [
      "full_name",
      "email",
      "phone",
      "company_name",
      "functional_area",
      "book_claim_method",
    ];

    for (let field of required) {
      if (!formData[field]?.trim()) {
        toast.error(`Please fill in ${field.replace("_", " ")}`);
        return false;
      }
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    const personalDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "icloud.com",
    ];

    const emailDomain = formData.email.split("@")[1]?.toLowerCase();
    if (personalDomains.includes(emailDomain)) {
      toast.error("Please use your company email address");
      return false;
    }

    if (!formData.booth_meeting_and_book_consent) {
      toast.error("Please accept the Privacy Policy.");
      return false;
    }
    return true;
  };

  // Submit to HubSpot
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(
        // EU-hosted portal -> must use api-eu1, NOT the global api.hsforms.com
        `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "email", value: formData.email },
              { name: "phone", value: formData.phone },
              { name: "full_name", value: formData.full_name },
              // internal HubSpot property is "company", NOT "company_name"
              { name: "company", value: formData.company_name },
              { name: "functional_area", value: formData.functional_area },
              { name: "book_claim_method", value: formData.book_claim_method },
              {
                name: "booth_meeting_and_book_consent",
                value: formData.booth_meeting_and_book_consent,
              },
              // NOTE: confirm "jobtitle" is the real internal name for this
              // property on your HubSpot form before relying on it — if the
              // API rejects it, check Settings > Properties in HubSpot.
              { name: "jobtitle", value: formData.seniority },
              { name: "utm_source", value: formData.utm_source },
              { name: "utm_medium", value: formData.utm_medium },
              { name: "utm_campaign", value: formData.utm_campaign },
              { name: "utm_term", value: formData.utm_term },
              { name: "gclid", value: formData.gclid },
              { name: "fbclid", value: formData.fbclid },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      if (!response.ok) {
        const errBody = await response.text();
        console.error("HubSpot rejected submission:", errBody);
        throw new Error("HubSpot submission failed");
      }

      window.location.href = "/people-matters-techhr-india/thank-you";
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <div
      id="reserve-copy"
      className="w-full bg-white border border-[#E2E4EB] shadow-[0px_20px_60px_-20px_#5445ED73] rounded-2xl font-lora"
    >
      <form onSubmit={handleSubmit} className="p-6 md:p-10 flex flex-col space-y-6">
        <div className="w-full flex flex-row justify-between items-start">
          <h2 className="text-base leading-4 uppercase font-secondary text-[#5445ED]">
            Booth Meeting
          </h2>
          <svg
            className="size-9"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12C0 5.37258 5.37258 0 12 0H24C30.6274 0 36 5.37258 36 12V24C36 30.6274 30.6274 36 24 36H12C5.37258 36 0 30.6274 0 24V12Z"
              fill="#F3F5FC"
            />
            <path
              d="M14.6667 9.66675V13.0001"
              stroke="#5445ED"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.3333 9.66675V13.0001"
              stroke="#5445ED"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.8333 11.3333H12.1667C11.2462 11.3333 10.5 12.0794 10.5 12.9999V24.6666C10.5 25.5871 11.2462 26.3333 12.1667 26.3333H23.8333C24.7538 26.3333 25.5 25.5871 25.5 24.6666V12.9999C25.5 12.0794 24.7538 11.3333 23.8333 11.3333Z"
              stroke="#5445ED"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 16.3333H25.5"
              stroke="#5445ED"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="w-full grid md:grid-cols-2 gap-4">
          {[
            { name: "full_name", placeholder: "Full name", label: "Full name*", col: 2 },
            { name: "email", placeholder: "Enter your Work Email", type: "email", label: "Work email*" },
            { name: "company_name", placeholder: "Company Name", label: "Company*" },
            { name: "phone", placeholder: "Mobile (For Courier/Coordination)", type: "tel", label: "Phone number*" },
            { name: "functional_area", placeholder: "Designation", label: "Job title*" },
          ].map((field) => (
            <div
              key={field.name}
              className={`flex flex-col gap-2 ${field.col ? "md:col-span-2" : "md:col-span-1"}`}
            >
              <label
                className="text-xs font-secondary font-medium text-[#454B69]"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              <input
                id={field.name}
                type={field.type || "text"}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 text-sm font-medium border-[#E2E4EB]"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-2">
              <label
                className="text-xs font-secondary font-medium text-[#454B69]"
             
              >
             How would you like to claim your free AI-First CHRO book?
              </label>
           <select
          name="book_claim_method"
          value={formData.book_claim_method}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 text-sm font-medium border-[#E2E4EB] w-full"
        >
          <option value="">Select an option</option>
          <option value="Collect at TechHR India (iona.ai Booth)">Collect at TechHR India (iona.ai Booth)</option>
          <option value="Courier to My Address">Courier to My Address</option>
        </select>
        </div>
       

        {/* Consent */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="booth_meeting_and_book_consent"
            checked={formData.booth_meeting_and_book_consent}
            onChange={handleChange}
            className="mt-0.5 h-5 w-5 rounded border-gray-300 accent-primary"
          />
          <p className="text-xs font-secondary font-medium text-[#454B69]">
            I agree to the privacy policy and consent to be contacted about my booth
            meeting and complimentary book pickup.
          </p>
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 w-full justify-center"
        >
          {status.loading ? "Submitting..." : "Reserve your meeting slot"}
          <FaArrowRight />
        </button>
        <p className="text-xs mt-2 text-[#0B0D2B]">
          <strong>Limited slots per day.</strong> Booking confirms your priority time and
          reserves your book copy.
        </p>
        {status.error && <p className="text-red-600 text-sm">{status.error}</p>}
      </form>
    </div>
  );
}

export default LPThirdForm;