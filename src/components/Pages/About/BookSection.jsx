import React from "react";

function BookSection() {
  return (
    <div className="h-fit bg-white relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] pb-14 md:pb-16 lg:pb-[90px] flex justify-center">
      <div className="w-full lg:max-w-[1440px]">
        <div
          className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-10 lg:gap-16 items-center rounded-[32px] p-6 md:p-10 lg:p-14 border"
          style={{
            backgroundColor: "#f3f3f5",
            borderColor: "#e5e5ea",
          }}
        >
          {/* Left Side - Book Mockup */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-[500px] "
              // style={{
              //   background:
              //     "linear-gradient(135deg, #2A2564 0%, #160E38 100%)",
              // }}
            >
              {/* Replace with actual book image */}
              <div className="h-full w-full flex items-center justify-center text-white text-center p-2">
                <img src="/assets/pages/landingpage/free-copy-remove.png" alt="AI-First CHRO" className="w-full"/>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col">
            <span
              className="text-sm font-semibold uppercase tracking-[3px] mb-4"
              style={{ color: "#2A2564" }}
            >
              From the Founder's Desk
            </span>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "#160E38" }}
            >
              The AI-First CHRO. Built from the ground up.
            </h2>

            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "#160E38" }}
            >
              At iona.ai, everything we build is rooted in one belief: AI
              should make hiring more human, not less.
            </p>

            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: "#160E38" }}
            >
              That conviction is what led our founder, Amit Srivastava, to
              write The <strong>AI-First CHRO</strong>, a definitive guide to HR transformation
              drawn from decades of validated management science and real-world
              operational data from <strong>150,000+</strong> AI-driven hires.
            </p>

            <blockquote
              className="mt-8 border-l-4 pl-6 text-xl md:text-2xl font-semibold italic"
              style={{
                color: "#2A2564",
                borderColor: "#2A2564",
              }}
            >
              “ 74% of AI Initiatives Fail. We wrote this book on how to be the
              26% that succeed.”
            </blockquote>

            <div className="mt-10">
               <a
                      href="/ai-first-chro"
                      className="bg-primary px-4 py-2.5 font-bold leading-5 md:px-5 md:py-3 w-fit text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
                    >
                      <span>Order Now</span>{" "}
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
                    </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSection;