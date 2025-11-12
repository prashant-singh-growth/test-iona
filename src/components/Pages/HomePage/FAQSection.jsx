import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes iona.ai different?",
      answer:
        "Other vendors sell you a tool and walk away. We have a unique offering: a 100% outcome guarantee. This is possible because iona.ai isn't just a tool, it's an agent. Our true agentic AI, backed by a human-in-the-loop, autonomously runs the process. This lets us be a true partner who owns the outcome."
    },
    {
      question: "How does iona.ai ensure compliance with industry regulations?",
      answer:
        "iona.ai adheres to ISO 27001, GDPR, and other regulatory standards, ensuring secure data handling, real-time compliance checks, and zero errors in documentation."
    },
    {
      question: "Can iona.ai integrate with my existing HR tools?",
      answer:
        "Yes, iona.ai seamlessly integrates with your HRMS, ATS, payroll systems, and other HR tools, creating a unified onboarding and recruitment experience."
    },
    {
      question: "How does iona.ai handle high-volume hiring for global enterprises?",
      answer:
        "iona.ai is designed for scalability, automating every step of the recruitment process, enabling high-volume hiring across multiple regions with zero delays and 100% accuracy."
    },
    {
      question: "Do I need other HR tools or recruiters to use iona.ai?",
      answer:
        "No. iona.ai is designed to replace legacy ATS systems and manual workflows. The autonomous system handles sourcing, evaluation, offer issuance, and pre-boarding, thereby freeing HR teams to focus on higher-priority strategic initiatives."
    },
    {
      question: "What results can enterprises expect after deploying iona.ai?",
      answer:
        "Enterprises using iona.ai experience dramatically faster hiring cycles, lower cost-per-hire, error-free compliance, and a fully automated, predictable hiring pipeline. Real-world deployments have shown 90% faster onboarding and 89% reduction in costs."
    },
    {
      question: "How secure is candidate data within iona.ai?",
      answer:
        "iona.ai follows enterprise-grade security protocols, including encryption at rest and in transit, role-based access controls, and GDPR/ISO-compliant data handling, ensuring candidate and organizational data remain fully protected."
    },
    {
      question: "Can iona.ai handle thousands of hires simultaneously?",
      answer:
        "Yes. NovaSuite is built for high-volume enterprise hiring, capable of processing and tracking thousands of candidates in parallel while maintaining speed, accuracy, and compliance."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white grid place-items-center px-5 md:px-10 pt-16 pb-24">
      <div className="w-full max-w-[1096px] flex flex-col gap-10">
        {/* Section title animation */}
        <motion.h2
          className="text-[40px] md:text-[48px] leading-[55px] md:leading-[60px] text-[#0D0D0D] font-lora font-medium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Frequently asked questions
        </motion.h2>

        {/* FAQ items */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => (
            <motion.button
              key={index}
              onClick={() => toggleFAQ(index)}
              className="py-5 md:py-[30px] border-[#D6D6D6] border-b text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-full flex justify-start gap-3 md:gap-5 items-center">
                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <FaMinus className="text-primary min-w-[20px] max-w-[20px]" />
                  ) : (
                    <FaPlus className="text-primary min-w-[20px] max-w-[20px]" />
                  )}
                </motion.div>

                <h3 className="text-lg md:text-[24px] md:leading-8 font-medium text-[#0D0D0D] font-lora">
                  {faq.question}
                </h3>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    key="answer"
                    initial={{ opacity: 0, height: 0, y: -5 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -5 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="mt-[15px] text-[#808080] text-base font-lora pl-8 md:pl-10 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
