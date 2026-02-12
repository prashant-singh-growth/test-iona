import React from "react";
import { useParams} from "react-router-dom";
import { AuthorList } from "../../../components/Data/blog/AuthorList";
import { BlogList } from "../../../components/Data/blog/BlogList";

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
      
      {/* ================= HERO ================= */}
      <section className="pt-28 pb-24 px-6 bg-[#160E38]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Author Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-violet-400/30 to-indigo-400/30 blur-3xl rounded-full"></div>
              <img
                src={AuthorDetails.AuthorImage}
                alt={AuthorDetails.authorName}
                className="relative w-64 h-64 object-cover rounded-3xl shadow-2xl"
              />
            </div>
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
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Published Works
            </h2>
            <p className="text-gray-500">
              {AuthorPost.length} thoughtfully written articles
            </p>
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
