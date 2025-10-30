import React, { useEffect, useState } from "react";

export default function FormLandingPage() {
  // 🔹 Form data state
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

  // 🧠 Replace with your HubSpot details
  const portalId = "YOUR_PORTAL_ID";
  const formId = "YOUR_FORM_ID";

  // 🧭 Capture UTM params + gclid + fbclid from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const updates = {};

    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid", "fbclid"].forEach(
      (key) => {
        if (params.has(key)) {
          updates[key] = params.get(key);
        }
      }
    );

    setFormData((prev) => ({ ...prev, ...updates }));
  }, []);

  // 🔸 Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 🔸 Validate required fields
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

    // Basic email check
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  // 🔸 Handle form submission
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
            fields: Object.keys(formData).map((name) => ({
              name,
              value: formData[name],
            })),
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      if (response.ok) {
        setStatus({ loading: false, success: "Thank you! Form submitted successfully.", error: null });
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
      } else {
        throw new Error("HubSpot submission failed. Please check your form settings.");
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <div className="w-full bg-[#FEFEFD] border-[#C9C9C9] border shadow-[0px_4px_19.1px_0px_#00000040] rounded-lg">
      <form onSubmit={handleSubmit} className="p-5 py-10 md:p-10 flex flex-col space-y-9">
        <div className="w-full grid  grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            className="border-[#D6D6D6] border outline-none focus:primary rounded-lg px-3 py-2 text-sm text-primary placeholder:text-[#808080] font-lora"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            className="border-[#D6D6D6] border outline-none focus:primary rounded-lg px-3 py-2 text-sm text-primary placeholder:text-[#808080] font-lora"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Work Email"
            value={formData.email}
            onChange={handleChange}
            className="border-[#D6D6D6] border outline-none focus:primary rounded-lg px-3 py-2 text-sm text-primary placeholder:text-[#808080] font-lora md:col-span-2"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border-[#D6D6D6] border outline-none focus:primary rounded-lg px-3 py-2 text-sm text-primary placeholder:text-[#808080] font-lora"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="border-[#D6D6D6] border outline-none focus:primary rounded-lg px-3 py-2 text-sm text-primary placeholder:text-[#808080] font-lora"
            required
          />
          <input
            type="text"
            name="seniority"
            placeholder="Seniority"
            value={formData.seniority}
            onChange={handleChange}
            className="border-[#D6D6D6] border outline-none focus:primary rounded-lg px-3 py-2 text-sm text-primary placeholder:text-[#808080] font-lora"
            required
          />
          <input
            type="text"
            name="functional_area"
            placeholder="Functional Area"
            value={formData.functional_area}
            onChange={handleChange}
            className="border-[#D6D6D6] border outline-none focus:primary rounded-lg px-3 py-2 text-sm text-primary placeholder:text-[#808080] font-lora"
            required
          />
          <input
            type="text"
            name="num_employees"
            placeholder="Number of Employees"
            value={formData.num_employees}
            onChange={handleChange}
            className="border-[#D6D6D6] border outline-none focus:primary rounded-lg px-3 py-2 text-sm text-primary placeholder:text-[#808080] font-lora md:col-span-2"
            required
          />
        </div>

        {/* Hidden UTM fields */}
        {["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid", "fbclid"].map((field) => (
          <input key={field} type="hidden" name={field} value={formData[field]} />
        ))}

        <button
          type="submit"
          disabled={status.loading}
          className="bg-primary px-5 py-3 text-[14px] text-white flex items-center justify-center space-x-2 rounded hover:scale-95 transition duration-150 w-fit"
        >
          {status.loading ? "Submitting..." : "Schedule a Demo"}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
              stroke="#FCFCFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {status.success && <p className="text-green-600 text-center">{status.success}</p>}
        {status.error && <p className="text-red-600 text-center">{status.error}</p>}
      </form>
    </div>
  );
}
