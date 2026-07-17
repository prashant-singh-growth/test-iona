import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQLandingPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
    question: "Do I need to register in advance to visit the iona.ai booth?",
    answer:
      "Advance registration isn't required to walk in, but it guarantees you a priority meeting slot and reserves your complimentary copy of the book for pickup.",
  },
  {
    question: "How do I claim my complimentary copy of \"The AI-First CHRO\"?",
    answer:
      "Complete the booking form above, then collect your copy at the iona.ai booth during People Matters TechHR India 2026 (6–7 August, Yashobhoomi Convention Center, New Delhi).",
  },
  {
    question: "What happens during the booth meeting? Is it a sales pitch or a consultation?",
    answer:
      "It's a 1:1 workflow consultation. Our team maps iona.ai's Agentic Intelligence capabilities to your organization's specific hiring challenges, no scripted pitch.",
  },
  {
    question: "Can I book a meeting if I'm not attending as an HR Tech Conference delegate?",
    answer:
      "Yes, reserving a booth meeting is separate from delegate registration for the HR Leadership Summit. You'll still need a valid TechHR India pass or exhibition-floor access to enter the venue.",
  },
  {
    question: "How long is a typical booth meeting?",
    answer:
      "Most consultations run 15–20 minutes, enough time for a live demo and a quick fit assessment, without pulling you away from the rest of the HR Conference India agenda.",
  },
  {
    question: "Will I get a copy of the demo or materials after the event?",
    answer:
      "Ask at the booth; the team can share a follow-up recap and relevant product one-pagers by email post-event.",
  },
   
  ];

  return (
    <section className="w-full bg-[#F3F5FC66] border-t border-[#F3F5FC66] grid place-items-center px-5 md:px-10 pt-16 pb-24">
      <div className="w-full max-w-[848px] flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <p className="text-3 leading-4 text-[#454B69] uppercase">FAQs</p>
          <h2 className="text-[40px] md:text-[48px] leading-[55px] md:leading-[60px] text-[#0D0D0D] font-lora font-medium">
            Questions, answered.
          </h2>
        </div>

        <div className="w-full flex flex-col bg-white border border-[#E2E4EB] rounded-[20px] overflow-hidden">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`w-full flex flex-col px-6 py-5 ${
                index !== faqs.length - 1 ? "border-b border-[#E2E4EB]" : ""
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-base text-[#0B0D2B] font-medium ">
                  {faq.question}
                </h3>

                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#5445ED"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-[14px] leading-[22.75px] text-[#454B69] pt-3">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQLandingPage;