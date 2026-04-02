
import React, { useEffect, useState } from 'react'
import { CaseStudyJson } from '../../../Data/CaseStudyDynamic';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdsThankuPage() {
  const [formData, setFormData] = useState()
  const [discoveryForm, setDiscoveryForm] = useState({
  full_name: "",
  email: "",
  phone: "",
  seniority: "",
 company: "",
});
const [loading, setLoading] = useState(false);

  const portalId = "146385824";
  const formId = "3ea101eb-2e30-4ab7-8e44-71b85edff54e";
  const formId2 = "702a9f76-728d-4101-8cbd-9285a34cf970";

  useEffect(() => {
    const savedData = localStorage.getItem("adsFormData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData((prev) => ({ ...prev, ...parsed }));
    }
  }, []);
 const downloadCaseStudy = async (pdfurl) => {
  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            {
              name: "full_name",
              value: formData?.name || "",
            },
            {
              name: "email",
              value: formData?.email || "",
            },
            {
              name: "company", // 👈 create this in HubSpot
              value: pdfurl,
            },
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      }
    );

    if (!response.ok) throw new Error("HubSpot submission failed");

    // ✅ AFTER SUCCESS → open/download PDF
    window.open(pdfurl, "_blank");

  } catch (error) {
    console.error("Error:", error);

    // fallback (optional)
    window.open(pdfurl, "_blank");
  }
};
const submitDiscoveryForm = async (e) => {
  e.preventDefault();

  const { full_name, email, phone, seniority, company } = discoveryForm;

  // ✅ Basic Validation
  if (!full_name || !email || !phone || !seniority || !company) {
    toast.error("Please fill all fields");
    return;
  }

  // ✅ Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Enter a valid email");
    return;
  }
 const personalDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "icloud.com",
    ];

    const emailDomain = email.split("@")[1]?.toLowerCase();
    if (personalDomains.includes(emailDomain)) {
      toast.error("Please use your company email address");
      return false;
    }
  // ✅ Phone validation (basic)
  if (phone.length < 8) {
    toast.error("Enter a valid phone number");
    return;
  }

  try {
    setLoading(true)
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId2}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            {
              name: "full_name", 
              value: full_name,
            },
            {
              name: "email",
              value: email,
            },
            {
              name: "phone",
              value: phone,
            },
            {
              name: "seniority", 
              value: seniority,
            },
            {
              name: "company",
              value: company,
            },
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      }
    );

    if (!response.ok) throw new Error("HubSpot submission failed");

    toast.success("🎉 Request submitted! We'll contact you soon.");

    // ✅ Reset form
    setDiscoveryForm({
      full_name: "",
      email: "",
      phone: "",
      seniority: "",
      company: "",
    });

       window.location.href =
        "/ai-first-chro/discovery-call-booked";

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Try again.");
  } finally{
    setLoading(false)
  }
};
useEffect(() => {
    const timer = setTimeout(() => {
      const section = document.getElementById("scroll-case-study");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 2000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
   
    <div className="w-full font-lora bg-white">
       <div className="min-h-screen font-lora bg-white flex items-center justify-center p-6 ">
      <div className="max-w-4xl w-full flex flex-col items-center text-center pt-10">

        {/* Book Image */}
        <img
          src="/assets/pages/landingpage/popup-free-copy.png"
          alt="Book Cover"
          className="w-24 mb-8 object-contain"
        />

        {/* Line 1: Main Heading */}
        <h1 className="text-2xl md:text-5xl font-extrabold text-[#000] mb-6 flex items-center justify-center gap-2 md:gap-4">
          {/* <span className="text-xl hi md:text-4xl">📕</span> */}
          Your Copy Has Been Reserved
          {/* <span className="text-xl md:text-4xl">📕</span> */}
        </h1>

        {/* Line 2: Thank You Text */}
        <p className="text-lg md:text-2xl text-darkVoilet mb-6 leading-relaxed">
          Thank you for reserving your complimentary hardcopy of{" "}
          <span className="italic font-bold text-primary border-b-2 border-primary/30">
            The AI-First CHRO.
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 lg:mt-10 mb-20 relative">

          {/* Box 1 */}
          <div className="bg-themeGray p-8 rounded-2xl border-b-4 border-violet_2">
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Phase 01</div>
            <h3 className="text-lg font-bold mb-2">Review</h3>
            <p className="text-sm text-violet_2">Our team is currently verifying your details for approval.</p>
          </div>

          {/* Box 2 */}
          <div className="bg-darkVoilet p-8 rounded-2xl border-b-4 border-primary text-white scale-105 shadow-xl">
            <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-4">Phase 02</div>
            <h3 className="text-lg font-bold mb-2">Dispatch</h3>
            <p className="text-sm text-themeGray/70">Approved copies are shipped within 2–3 business days.</p>
          </div>

          {/* Box 3 */}
          <div className="bg-themeGray p-8 rounded-2xl border-b-4 border-violet_2">
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Phase 03</div>
            <h3 className="text-lg font-bold mb-2">Arrival</h3>
            <p className="text-sm text-violet_2">Your book will be delivered to your doorstep within 5–7 days.</p>
          </div>

        </div>


      </div>
    </div>
      <div id='scroll-case-study' className="w-full pb-20 px-5 flex flex-col justify-center items-center max-w-7xl mx-auto">
        <h2 className='text-4xl leading-[48px] text-darkBlue max-w-3xl text-center'> How India’s Leading Enterprises Are Winning Hiring with AI</h2>
        <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
         {Object.values(CaseStudyJson).map((item, index) => (
  <div
    key={index}
    className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="p-5 flex flex-col gap-3">
<img
        src={item.customer.logo}
        alt={item.altText}
        className="h-10 object-contain transition duration-300 mr-auto"
      />
    {/* Content */}
    
      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
        {item.title}
      </h3>
      {/* CTA */}
      <div className="mt-4">
        <button onClick={()=>downloadCaseStudy(`https://www.iona.ai${item.PDFurl}`)} className="text-sm font-medium px-3 py-2 text-white bg-primary hover:scale-95 ease-out duration-150 rounded-md ">
         Download Casestudy
        </button>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
      <div id='scroll-form' className="w-full bg-themeGray py-16 px-6">
  <div className="max-w-5xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold text-darkBlue mb-4">
      See How This Can Work for Your Organization
    </h2>

    <p className="text-lg md:text-xl text-violet_2 mb-10">
      (Book a 15 Mins Discovery Call with us)
    </p>

    {/* Form */}
    <form
      onSubmit={(e) => 
       submitDiscoveryForm(e)
      }
      className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
    >

      {/* Name */}
      <input
        type="text"
        placeholder="Full Name"
        required
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={(e) =>
          setDiscoveryForm({ ...discoveryForm, full_name: e.target.value })
        }
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Work Email"
        required
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={(e) =>
          setDiscoveryForm({ ...discoveryForm, email: e.target.value })
        }
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone Number"
        required
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={(e) =>
          setDiscoveryForm({ ...discoveryForm, phone: e.target.value })
        }
      />

      {/* Designation */}
      <input
        type="text"
        placeholder="Designation"
        required
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={(e) =>
          setDiscoveryForm({ ...discoveryForm, seniority: e.target.value })
        }
      />

      {/* Organization */}
      <input
        type="text"
        placeholder="Organization"
        required
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary md:col-span-2"
        onChange={(e) =>
          setDiscoveryForm({ ...discoveryForm,company: e.target.value })
        }
      />

      {/* CTA */}
      <div className="md:col-span-2 flex justify-center mt-4">
        <button disabled={loading} type="submit"  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-95 transition">
  {loading ? "Submitting..." : "Book a Discovery Call"}
</button>
        
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default AdsThankuPage