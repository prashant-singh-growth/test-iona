import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdsFormSection() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    seniority: "",
    functional_area: "",
    preferred_day: "",
    attending_nextech: "",
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
  const formId = "814b0f91-0aff-4d72-873e-fc916ea4c2ce";

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
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d*$/.test(value) && value.length <= 12) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form
  const validateForm = () => {
    const required = [
      "full_name",
      "email",
      "phone",
      "company_name",
      "seniority",
      "preferred_day",
      "attending_nextech",
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

    return true;
  };

  // Submit to HubSpot
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: Object.entries(formData).map(([name, value]) => ({
              name,
              value,
            })),
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      if (!response.ok) throw new Error("HubSpot submission failed");

      window.location.href =
        "/thank-you";
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <div id="reserve-copy" className="w-full bg-[#FEFEFD] border border-[#C9C9C9] shadow-lg rounded-lg font-lora">
      <form
        onSubmit={handleSubmit}
        className="p-6 md:p-10 flex flex-col space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-lora text-darkVoilet">
          Claim Your Free Hardcopy
        </h2>

        {[
          { name: "full_name", placeholder: "First name" },
          { name: "email", placeholder: "Enter your Work Email ", type: "email" },
          { name: "phone", placeholder: "Mobile (For Courier/Coordination)", type: "tel" },
          { name: "company_name", placeholder: "Company Name" },
          { name: "seniority", placeholder: "Designation" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type || "text"}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 text-sm"
          />
        ))}

        {/* Preferred Day */}
        <div>
          <p className="font-semibold text-primary mb-2">Preferred Day</p>
          <div className="flex gap-3">
            {["Day 1 (Feb 18)", "Day 2 (Feb 19)"].map((day) => (
              <button
                key={day}
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, preferred_day: day }))
                }
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  formData.preferred_day === day
                    ? "bg-primary text-white"
                    : "bg-lightGray text-darkVoilet"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Attending Nextech */}
        <div>
          <p className="font-semibold text-primary mb-2">
            Are you attending Nextech 2026 in person?
          </p>
          <div className="flex gap-6">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center cursor-pointer gap-2">
                <input
                  type="radio"
                  name="attending_nextech"
                  value={option}
                  checked={formData.attending_nextech === option}
                  onChange={handleChange}
                 style={{ accentColor: "#2A2564" }}
                
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 w-fit"
        >
          {status.loading ? "Submitting..." : "Reserve Your Free Copy"}
          <FaArrowRight />
        </button>

        {status.error && (
          <p className="text-red-600 text-sm">{status.error}</p>
        )}
      </form>
    </div>
  );
}

export default AdsFormSection;
