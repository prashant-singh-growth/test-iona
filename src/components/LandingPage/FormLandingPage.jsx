import React, { useEffect, useState } from "react";


export default function FormLandingPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    seniority: "",
    functional_area: "",
    num_employees: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    gclid: "",
    fbclid: "",
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

 
  const portalId = "146385824";
  const formId = "eae9697d-396b-4497-88c0-49fd58c6bc13";

 
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const updates = {};

    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid", "fbclid"].forEach(
      (key) => {
        if (params.has(key)) updates[key] = params.get(key);
      }
    );

    setFormData((prev) => ({ ...prev, ...updates }));
  }, []);

  // Input change handler
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Form validation
  const validateForm = () => {
    const required = [
      "firstname",
      "lastname",
      "email",
      "phone",
      "company",
      "seniority",
      "functional_area",
      "num_employees",
    ];

    for (let field of required) {
      if (!formData[field]?.trim()) {
        alert(`Please fill in ${field.replace("_", " ")}`);
        return false;
      }
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  // Submit handler
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
            fields: Object.entries(formData).map(([name, value]) => ({ name, value })),
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      if (response.ok) {
        setStatus({ loading: false, success: "✅ Thank you! Form submitted successfully.", error: null });
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          company: "",
          seniority: "",
          functional_area: "",
          num_employees: "",
          utm_source: "",
          utm_medium: "",
          utm_campaign: "",
          utm_term: "",
          gclid: "",
          fbclid: "",
        });
       
          window.location.href = "/thank-you";
    
      } else {
        throw new Error("HubSpot submission failed. Please check your form settings.");
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <div className="w-full bg-[#FEFEFD] border-[#C9C9C9] border shadow-[0px_4px_19.1px_0px_#00000040] rounded-lg relative overflow-hidden">
    

      <form onSubmit={handleSubmit} className="p-5 py-10 md:p-10 flex flex-col space-y-9">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "firstname", placeholder: "First Name" },
            { name: "lastname", placeholder: "Last Name" },
            { name: "email", placeholder: "Enter your Work Email", type: "email", col: 2 },
            { name: "phone", placeholder: "Phone Number" },
            { name: "company", placeholder: "Company Name" },
            { name: "seniority", placeholder: "Seniority" },
            { name: "functional_area", placeholder: "Functional Area" },
            { name: "num_employees", placeholder: "Number of Employees", col: 2 },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className={`border-[#D6D6D6] border rounded-lg px-3 py-2 text-sm text-primary placeholder:text-[#808080] font-lora ${
                field.col === 2 ? "md:col-span-2" : ""
              }`}
            />
          ))}
        </div>

        {/* Hidden fields for tracking */}
        {["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid", "fbclid"].map((field) => (
          <input key={field} type="hidden" name={field} value={formData[field]} />
        ))}

        <button
          type="submit"
          disabled={status.loading}
          className="bg-primary px-5 py-3 text-[14px] text-white flex items-center justify-center space-x-2 rounded hover:scale-95 transition duration-150 w-fit"
        >
          {status.loading ? "Submitting..." : "Schedule a Demo"}
        </button>

        {status.success && <p className="text-green-600 text-center">{status.success}</p>}
        {status.error && <p className="text-red-600 text-center">{status.error}</p>}
      </form>
    </div>
  );
}
