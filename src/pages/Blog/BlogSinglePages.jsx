import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiMinus, FiPlus, FiArrowLeft } from "react-icons/fi";

import SeoHeader from "../../components/utils/SeoHeader";
import { BlogList } from "../../components/Data/blog/BlogList";

/* ------------------ HELPERS ------------------ */

/**
 * Generates SEO-friendly IDs for headings and returns the modified HTML string.
 */
const parseContentWithIds = (html) => {
  if (!html) return "";
  const container = document.createElement("div");
  container.innerHTML = html;

  const headings = container.querySelectorAll("h2, h3");
  headings.forEach((heading) => {
    const id = heading.innerText
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    heading.id = id;
  });

  return container.innerHTML;
};

function BlogSinglePages() {
  const { blog } = useParams();
  const [activeIndex, setActiveIndex] = useState(null); // For FAQ
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState("");

  // Find Data
  const blogData = useMemo(() => {
    return BlogList.find((item) => item.url.replace("/blog/", "") === blog);
  }, [blog]);

  // Framer Motion Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Process Content and TOC
  const processedContent = useMemo(() => {
    if (!blogData?.content.content) return "";
    return parseContentWithIds(blogData.content.content);
  }, [blogData]);

  useEffect(() => {
    if (!processedContent) return;

    const temp = document.createElement("div");
    temp.innerHTML = processedContent;
    const headings = temp.querySelectorAll("h2, h3");

    const items = Array.from(headings).map((el) => ({
      id: el.id,
      text: el.innerText,
      level: el.tagName.toLowerCase(),
    }));

    setToc(items);
  }, [processedContent]);

  useEffect(() => {
    if (!toc.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc, processedContent]);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!blogData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Blog post not found</h2>
        <Link to="/blog" className="mt-4 text-blue-600 flex items-center gap-2">
          <FiArrowLeft /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white  text-[#160E38] font-lora relative">
      <SeoHeader
        title={blogData.content.seo.title || blogData.content.title}
        description={
          blogData.content.seo?.description || blogData.content.summary
        }
      />
      {blogData.content.blogSchema && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html:blogData.content.blogSchema
    }}
  />
)}

{blogData.content.faqSchema && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: blogData.content.faqSchema
    }}
  />
)}
 
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* HERO SECTION */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-indigo-600">
              <span>{blogData.content.date}</span>
              <span className="w-8 h-[1px] bg-gray-300" />
              <span>5 Min Read</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              {blogData.content.title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              {blogData.content.summary}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <img
                src={blogData.author.AuthorImage}
                alt={blogData.author.authorName}
                className="size-14 object-contain rounded-full"
              />
              <div>
                {blogData.author.url ? (
                  <a
                    href={`/author/${blogData.author.url}`}
                    className="font-bold underline"
                  >
                    {blogData.author.authorName}
                  </a>
                ) : (
                  <p className="font-bold ">{blogData.author.authorName}</p>
                )}
                <p className="text-sm text-gray-500">
                  {blogData.author.authorPosition}
                </p>
              </div>
            </div>
          </motion.div>

          <img
            src={blogData.content.image}
            alt={
              blogData.content.altimg
                ? blogData.content.altimg
                : blogData.content.title
            }
            className="w-full rounded-lg md:rounded-xl shadow-md object-contain"
            loading="lazy"
          />
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start ">
          {/* STICKY TABLE OF CONTENTS */}
          <aside className="hidden lg:block w-1/4 sticky top-28 self-start ">
            <div className="border-l-2 border-gray-100 pl-6 py-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
                On this page
              </h3>

              <ul className="space-y-4 text-[15px] ">
                {toc.map((item) => (
                  <li
                    key={item.id}
                    className={`transition-all duration-300 ${
                      activeId === item.id
                        ? "text-darkVoilet translate-x-1 font-bold"
                        : "text-gray-500 hover:text-primaryText"
                    } ${item.level === "h3" ? "ml-5 text-sm" : ""}`}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleAnchorClick(e, item.id)}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ARTICLE BODY */}
          <div className="flex-1 max-w-none">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
            {!blogData.content.cta ? (
              <div className="mt-12 not-prose">
                <div className="relative overflow-hidden rounded-xl bg-darkVoilet px-5 py-10 shadow-2xl sm:px-12 sm:py-16">
                  <div className="relative flex flex-col  items-center text-center  ">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Ready to experience how NovaCount can streamline your
                      headcount planning?
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-300">
                      Book a demo today and see how it can help you scale your
                      hiring process to meet future demands.
                    </p>
                    <a
                      href="/contact"
                      className="rounded-full border border-white px-6 py-3 mt-3 text-base font-semibold text-white shadow-sm transition-all  hover:scale-95 "
                    >
                      Book a demo today
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-12 not-prose">
                <div className="relative overflow-hidden rounded-xl bg-darkVoilet px-5 py-10 shadow-2xl sm:px-12 sm:py-16">
                  <div className="relative flex flex-col  items-center text-center  ">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {blogData.content.cta.title}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-300">
                      {blogData.content.cta.description}
                    </p>
                    <a
                      href="/contact"
                      className="rounded-full border border-white px-6 py-3 mt-3 text-base font-semibold text-white shadow-sm transition-all  hover:scale-95 "
                    >
                      Book a demo today
                    </a>
                  </div>
                </div>
              </div>
            )}
            {/* TAGS */}
            <div className="mt-16 flex flex-wrap gap-2">
              {blogData.content.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* FAQ SECTION */}
            {blogData.content.blogFAQ?.length > 0 && (
              <div className="mt-20 pt-10 border-t border-gray-100">
                <h2 className="text-3xl font-bold mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {blogData.content.blogFAQ.map((faq, i) => {
                    const isOpen = activeIndex === i;
                    return (
                      <div
                        key={i}
                        className={`border rounded-xl overflow-hidden transition-colors ${
                          isOpen
                            ? "bg-indigo-50/30 border-indigo-100"
                            : "border-gray-200"
                        }`}
                      >
                        <button
                          onClick={() => setActiveIndex(isOpen ? null : i)}
                          className="w-full flex justify-between items-center p-6 text-left"
                        >
                          <span className="font-bold text-lg">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <FiMinus className="text-indigo-600" />
                          ) : (
                            <FiPlus />
                          )}
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-6 pb-6 text-gray-600 leading-relaxed"
                            >
                              {faq.answer}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogSinglePages;
