import { motion } from "framer-motion";



import SeoHeader from "../../components/utils/SeoHeader";
import { BlogList } from "../../components/Data/blog/BlogList";


function BlogLandingPages() {
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  

  return (
    <div className="bg-slate-50 min-h-screen font-lora">
      <SeoHeader
        title={"iona.ai Blog | Insights on AI, Hiring & Inclusion"}
        description={"Read expert perspectives on AI, hiring innovation, and workplace inclusion."}
      />


      <div className="relative overflow-hidden bg-darkVoilet py-24 mb-12">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>
        
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

   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div 
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {BlogList.map((blog) => (
            <div
              key={blog?.content?.id}
            
              className="group bg-white rounded-xl overflow-hidden hover:-translate-y-1 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col"
            >
           
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={blog.content.image}
                  alt={blog.content.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x400/6366f1/ffffff?text=iona.ai`;
                  }}
                />
               
              </div>

              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-slate-400 text-sm mb-3">
                   <span>{blog.content.date || "March 2024"}</span>
                   <span className="mx-2">•</span>
                   <span>5 min read</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 leading-snug text-darkVoilet line-clamp-2  ">
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
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default BlogLandingPages