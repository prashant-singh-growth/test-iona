import React from "react";
import { useParams} from "react-router-dom";
import { AuthorList } from "../../../components/Data/blog/AuthorList";
import { BlogList } from "../../../components/Data/blog/BlogList";
import { motion } from "framer-motion";
import SeoHeader from "../../../components/utils/SeoHeader";
const AuthorSinglePage = () => {
  const { author } = useParams();

  // Find Author
  const AuthorDetails = AuthorList.find(
    (authorItem) => authorItem.url === author
  );

  // Filter Author Posts
  const AuthorPost = BlogList.filter(
    (blogItem) => blogItem.author?.url === author
  );

  // Safety Check
  if (!AuthorDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold">Author Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb] font-lora">
      <SeoHeader
      title={AuthorDetails.seo.title}
      description={AuthorDetails.seo.description}
      />

      
  
      <section className="pt-28 pb-24 px-6 bg-[#160E38]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
    
<div className="flex justify-center lg:justify-start">
  <motion.div
    className="relative"
    initial="rest"
    whileHover="hover"
    animate="rest"
  >
  
    <motion.div
      variants={{
        rest: { opacity: 0.6, scale: 1 },
        hover: { opacity: 1, scale: 1.1 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute -inset-6 bg-gradient-to-br from-violet-400/30 to-indigo-400/30 blur-3xl rounded-full"
    />

    {/* Image */}
    {AuthorDetails.url === "iona-ai" ? (<motion.img
      src={AuthorDetails.AuthorImage}
      alt={AuthorDetails.authorName}
      loading="lazy"
      variants={{
        rest: { scale: 1, rotate: 0, y: 0 },
        hover: { scale: 1.05, rotate: -2, y: -8 },
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="relative bg-white p-8 sm:p-10 py-16 sm:py-20 w-full max-w-[400px] object-cover rounded-3xl shadow-2xl"
    />):(<motion.img
      src={AuthorDetails.AuthorImage}
      alt={AuthorDetails.authorName}
      loading="lazy"
      variants={{
        rest: { scale: 1, rotate: 0, y: 0 },
        hover: { scale: 1.05, rotate: -2, y: -8 },
      }}
      
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="relative w-full max-w-[400px] object-cover rounded-3xl shadow-2xl"
    />)}
  </motion.div>
</div>


          {/* Author Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block text-xs uppercase tracking-widest text-white/70 font-semibold">
              Featured Author
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {AuthorDetails.authorName}
            </h1>

            <p className="text-lg md:text-xl text-violet-400 font-medium">
              {AuthorDetails.authorPosition}
            </p>

            <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {AuthorDetails.authorDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ================= POSTS ================= */}
      <section className="py-24 px-6 bg-white rounded-t-[4rem] shadow-inner">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
  {/* Decorative Background Element (Subtle) */}
  <div className="absolute -left-8 -top-8 text-8xl font-bold text-gray-50 select-none -z-10 uppercase">
    Works
  </div>

  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <motion.span 
        initial={{ width: 0 }}
        whileInView={{ width: "3rem" }}
        className="h-[2px] bg-violet-600 rounded-full hidden md:block"
      />
      <span className="text-violet-600 font-bold tracking-widest text-xs uppercase">
        Portfolio
      </span>
    </div>
    
    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
      Published <span className="text-gray-900/40">Works</span>
    </h2>
  </div>

  <div className="flex flex-col items-start md:items-end gap-2">
    <div className="flex -space-x-2">
      {/* Decorative dots or small avatars of the author to show "activity" */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-darkVoilet animate-pulse" />
        </div>
      ))}
    </div>
    <p className="text-slate-500 font-medium text-sm md:text-base italic">
      Curating <span className="text-slate-900 font-bold">{AuthorPost.length}</span> thoughtfully written articles
    </p>
  </div>
</div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {AuthorPost.map((post) => (
              <div
                key={post.content.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.content.image || "/placeholder.jpg"}
                    alt={post.content.title}
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <span className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                    {post.content.date}
                  </span>

                  <h3
                    className="text-lg font-semibold text-black/70 mb-3 group-hover:text-darkVoilet transition line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.content.title }}
                  />

                  <p
                    className="text-sm text-gray-600 line-clamp-3 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content.summary }}
                  />

                  <a
                    href={`/blog/${post.url}`}
                    className="mt-4 w-fit flex items-center text-sm font-semibold text-darkVoilet  gap-2 group-hover:gap-3 transition-all"
                  >
                    Read Blog
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default AuthorSinglePage;
