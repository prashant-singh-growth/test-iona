import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        source: "",
    });

    // const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [isSubmitted, setIsSubmitted] = useState(false);

    // ✅ Validation
    const validate = () => {
        const errs = {};

        if (!formData.name.trim()) {
            errs.name = "Name is required";
            toast.error("Name is required");
        }

        if (!formData.email.trim()) {
            errs.email = "Email is required";
            toast.error("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errs.email = "Invalid email";
            toast.error("Email is invalid");
        }
       const personalDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "yandex.com"
];

const emailDomain = formData.email.split("@")[1]?.toLowerCase();

if (personalDomains.includes(emailDomain)) {
  toast.error(
    "Please use your company email address (not a personal email)."
  );

  errs.email = "Company email required";
}

        if (!formData.message.trim()) {
            errs.message = "Message is required";
            toast.error("Message is required");
        }

        if (!formData.source) {
            errs.source = "Please select a source";
            toast.error("Please select a source");
        }

        return errs;
    };


    const handleChange = (e) => {
        let { name, value } = e.target;


        if (name === "phone") {
            value = value.replace(/\D/g, ""); // remove non-numbers
            if (value.length > 13) return; // stop after 10 digits
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    // ✅ Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);

        try {
            const response = await fetch(
                "https://api.hsforms.com/submissions/v3/integration/submit/146385824/facd4b09-832e-4cc6-b760-447aff59df54",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fields: [
                            { name: "email", value: formData.email },
                            { name: "firstname", value: formData.name },
                            { name: "phone", value: formData.phone },
                            { name: "message", value: formData.message },
                            { name: "leadsource", value: formData.source }, // custom field
                        ],
                        context: {
                            pageUri: window.location.href,
                            pageName: document.title,
                        },
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("HubSpot submission failed");
            }

            toast.success("Message sent successfully!");
            window.location.href = "/thank-you";

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                source: "",
            });
        } catch (err) {
            console.error(err);
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div id="form" className="w-full bg-[#FEFEFD] border border-[#C9C9C9] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-xl font-lora">
            <form
                onSubmit={handleSubmit}
                className="p-6 md:p-10 flex flex-col space-y-6"
            >
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl md:text-3xl font-lora font-medium text-darkVoilet">
                        Send Us a Message
                    </h2>

                </div>

                {[
                    { name: "name", placeholder: "Full Name" },
                    { name: "email", placeholder: "Enter your Work Email ", type: "email" },
                    // { name: "phone", placeholder: "Phone Number ( Optional)", type: "tel" },


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
               <input
  type="tel"
  name="phone"
  placeholder="Phone Number (Optional)"
  value={formData.phone}
  onChange={handleChange}
  maxLength={13}
  inputMode="numeric"
  pattern="[0-9]{10,13}" 
  className="border rounded-lg px-4 font-normal placeholder:font-normal py-2 text-sm"
/>
                <textarea name='message' className="border rounded-lg px-4 font-normal placeholder:font-normal py-2 text-sm" rows={6}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}>


                </textarea>
                <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="border rounded-lg px-4 py-2 text-sm bg-white"
                >
                    <option value="" disabled>How did u here  about us</option>
                    {
                        ["google", "linkdin", "referral", "other"].map((option, ind) => <option key={option} value={option} className=' capitalize'>{option}</option>)
                    }
                </select>


                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 w-fit"
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                    <FaArrowRight />
                </button>



            </form>
        </div>
    )
}

export default ContactForm