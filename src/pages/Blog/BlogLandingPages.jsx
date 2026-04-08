import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SeoHeader from "../../components/utils/SeoHeader";
import { BlogList } from "../../components/Data/blog/BlogList";

function BlogLandingPages() {
  // 1. Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // 2. Logic to slice the BlogList
  const totalPages = Math.ceil(BlogList.length / postsPerPage);
  
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return BlogList.slice(start, start + postsPerPage);
  }, [currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-lora">
      <SeoHeader
        title={"iona.ai Blog | Insights on AI, Hiring & Inclusion"}
        description={"Read expert perspectives on AI, hiring innovation, and workplace inclusion."}
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden flex flex-col bg-darkVoilet py-24 !pt-32 mb-12">
      
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-indigo-200 uppercase bg-indigo-800/50 rounded-full border border-indigo-700"
          >
            Latest Updates
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Exploring the intersection of artificial intelligence, human potential, and the future of inclusive hiring.
          </motion.p>
        </div>
      </div>

      {/* Blog Grid with Pagination Logic */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div 
          key={currentPage} // This forces the stagger animation on page change
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentPosts.map((blog) => (
            <motion.div
              key={blog?.content?.id}
              variants={itemVariants}
              className="group bg-white rounded-xl overflow-hidden hover:-translate-y-1 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={blog.content.image}
                  alt={blog.content.title}
                  loading='lazy'
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-slate-400 text-sm mb-3">
                  <span>{blog.content.date || "March 2024"}</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 leading-snug text-darkVoilet line-clamp-2">
                  {blog.content.title}
                </h3>
                
                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                  {blog.content.summary}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <a href={`/blog/${blog.url}`} className="flex items-center text-darkVoilet font-bold text-sm tracking-wide">
                    READ MORE
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-2" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Next-Level Pagination UI */}
        <div className="mt-20 flex justify-center items-center gap-3">
          {/* Previous Button */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-3 rounded-lg border border-slate-200 disabled:opacity-20 hover:bg-white hover:shadow-md transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-darkVoilet group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-lg border border-slate-200 shadow-sm">
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              const isActive = currentPage === pageNum;
              
              return (
                <button
                  key={pageNum}
                  onClick={() => paginate(pageNum)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                    isActive ? "text-white" : "text-slate-500 hover:text-darkVoilet hover:bg-slate-50"
                  }`}
                >
                  <span className="relative z-10">{pageNum}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activePageBg"
                      className="absolute inset-0 bg-darkVoilet rounded-lg shadow-md"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-3 rounded-lg border border-slate-200 disabled:opacity-20 hover:bg-white hover:shadow-md transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-darkVoilet group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogLandingPages;