import React from "react";
import { useParams } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { blogListJson } from "../../components/Data/BlogDynamic";

function BlogSinglePages() {
  const { blog } = useParams();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const blogData = blogListJson.find(
    (item) => item.url.replace("/blog/", "") === blog
  );

  if (!blogData) return null;

  return (
    <main className="bg-white min-h-screen  text-[#160E38] font-lora">
     
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-darkVoilet z-50 origin-left"
        style={{ scaleX }}
      />

      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] items-center gap-12 py-12 lg:py-20">
            
      
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-[#5A4E7A]">
                <span>{blogData.date}</span>
                <span className="w-8 h-[1px] bg-gray-300"></span>
                <span>5 Min Read</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.1] text-[#160E38]">
                {blogData.title}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {blogData.summary}
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="h-14 w-14 rounded-full bg-[#160E38] flex items-center justify-center text-white text-xl font-bold border-4 border-gray-50">
                  {blogData.author?.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#160E38] text-lg">{blogData.author}</p>
                  <p className="text-gray-500 text-sm">Author</p>
                </div>
              </div>
            </motion.div>

     
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full  rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={blogData.image}
                alt={blogData.title}
                className="w-full h-fit object-contain"
              />
          
              <div className="absolute inset-0 bg-gradient-to-tr from-[#160E38]/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

   
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
         
          <article className="w-full max-w-6xl mx-auto">
            <div 
              className="prose prose-lg md:prose-xl max-w-none
              prose-headings:text-[#160E38] prose-headings:font-bold
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-strong:text-[#5A4E7A]
              prose-img:rounded-3xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: blogData.content }} 
            />
            
          
            <div className="mt-16 flex flex-wrap gap-3">
              {blogData.tags?.map((tag, index) => (
                <span key={index} className="px-5 py-2 rounded-full border border-gray-200 text-sm font-semibold text-darkVoilet hover:bg-darkVoilet hover:text-white transition-all cursor-default">
                  #{tag}
                </span>
              ))}
            </div>
          </article>

        

        </div>
      </section>
    </main>
  );
}

export default BlogSinglePages;