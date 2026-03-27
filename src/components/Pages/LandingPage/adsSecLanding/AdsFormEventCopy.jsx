import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdsFormEventCopy = () => {
const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    seniority: "",
    // functional_area: "",
    employee_count:"",
    address:"",
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
  const formId = "38010300-9126-4879-8b46-ef2f21adb7be";

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
      "company",
      "seniority",
      "employee_count",
      "address"
      
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
    <div id="form" className="w-full bg-[#FEFEFD] border border-[#C9C9C9] shadow-lg rounded-lg font-lora">
      <form
        onSubmit={handleSubmit}
        className="p-6 md:p-10 flex flex-col space-y-6"
      >
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-lora font-medium text-darkVoilet">
          Claim your author copy
        </h2>
        <p className="text-sm text-[#2A2564]">Get the Most Highly Anticipated Book, “The AI-FIRST CHRO”</p>
        </div>

        {[
          { name: "full_name", placeholder: "Full Name As Per On LinkedIn" },
          { name: "email", placeholder: "Enter your Work Email ", type: "email" },
          { name: "phone", placeholder: "Phone (for shipping)", type: "tel" },
          { name: "company", placeholder: "Company Original Name" },
          { name: "seniority", placeholder: "Job Title" },
          // { name: "employee_count", placeholder: "Employee Count", type: "number"  },
          // { name: "address", placeholder: "Shipping Address" },
    
        ].map((field) => (
          <input
            key={field.name}
            type={field.type || "text"}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            className="border rounded-lg px-4 font-normal placeholder:font-normal py-2 text-sm"
          />
        ))}
<select
  name="employee_count"
  value={formData.employee_count}
  onChange={handleChange}
  className="border rounded-lg px-4 py-2 text-sm bg-white"
>
  <option value="">Select Employee Count</option>
  <option value="1-250">1-250</option>
  <option value="251-1000">251-1000</option>
  <option value="1001-5000">1001-5000</option>
  <option value="5000+">5000+</option>
</select>
<input
  type="text"
  name="address"
  placeholder="Shipping Address"
  value={formData.address}
  onChange={handleChange}
  className="border rounded-lg px-4 py-2 text-sm"
/>
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
        <p className="text-[10px] text-[#808080]">Your information is used only for application review and delivery. No data sold or shared.</p>
      </form>
    </div>
  );
}

