import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SeoHeader from "../components/utils/SeoHeader";

function Vids() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Do what you love doing! iona.ai chatbot will take care of new hire onboarding",
      summary: "A comprehensive overview of our AI-driven recruitment solution and its benefits.",
      duration: "0:09",
      videoId: "NO5j7JUhTvk",
    },
    {
      id: 2,
      title: "iona.ai chatbot proactively engages with new hires",
      summary: "Watch our platform in action as it screens and ranks candidates in real-time.",
      duration: "0:31",
      videoId: "kR9OEC0SAYA",
    },
    {
      id: 3,
      title: "Looking for AI chatbot for new hire onboarding?",
      summary: "Expert panel discussion on upcoming trends and innovations in HR technology.",
      duration: "0:09",
      videoId: "ao82oGSlr-4",
    },
    {
      id: 4,
      title: "Wanna know why I am happy?",
      summary: "Explore the technical architecture behind our AI recruitment platform.",
      duration: "0:18",
      videoId: "pYQ-tY6vfGs",
    },
    {
      id: 5,
      title: "iona Prime: AI Chabot + integrated Background Verifications",
      summary: "Hear from our enterprise customers about how ionAI has revolutionized their hiring process.",
      duration: "0:19",
      videoId: "egDPgvLpkPU",
    },
    {
      id: 6,
      title: "iona.ai is an AI first new hire onboarding service designed for quality hiring at speed and scale",
      summary: "Get an exclusive preview of our upcoming features and enhancements for the year ahead.",
      duration: "3:51",
      videoId: "V1D6l8KHZDk",
    }
  ];

  const openVideo = (video) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "video_play",
        video_title: video.title,
        video_id: video.videoId,
      });
    }
    setSelectedVideo(video);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen font-lora">
      <SeoHeader
        title={"Videos | Learn How iona.ai Transforms Hiring with AI"}
        description={"Watch demos, expert talks, and customer success stories. See how iona.ai’s intelligent solutions redefine how businesses hire, onboard, and engage talent."}
      />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.iona.ai/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Product",
          "item": "https://www.iona.ai/videos"
        }
      ]
    })
  }}
  async
/>
      {/* Hero Section with subtle mesh gradient */}
      <div className="relative bg-darkVoilet py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Videos
          </motion.h1>
          <motion.p 
            className="text-gray-200 text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Watch demos, tutorials, and expert discussions about our AI recruiting solutions
          </motion.p>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              layoutId={`card-${video.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openVideo(video)}
            >
              {/* Thumbnail Container */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                 src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   loading='lazy'
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:border-transparent">
                    <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-primaryText leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-secondaryText text-sm mb-6 line-clamp-3 leading-relaxed">
                  {video.summary}
                </p>
                <div className="flex items-center text-xs font-bold tracking-[0.1em] text-primary group-hover:gap-2 transition-all">
                  WATCH NOW
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeVideo}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm py-10 overflow-y-auto"
            />
            
            <motion.div 
              layoutId={`card-${selectedVideo.id}`}
              className="bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden relative z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button 
                onClick={closeVideo}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/50 p-2 text-white rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

            <div className="aspect-video w-full bg-black">
  <iframe
    src={`https://www.youtube-nocookie.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
    title={selectedVideo.title}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
    className="w-full h-full"
  />
</div>

              <div className="p-8 md:p-10">
                {/* <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        {selectedVideo.duration}
                    </span>
                </div> */}
                <h2 className="text-2xl font-bold text-primaryText mb-4 leading-tight">{selectedVideo.title}</h2>
                {/* <p className="text-secondaryText text-lg mb-8 max-w-3xl leading-relaxed">{selectedVideo.summary}</p> */}
                
                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-lg font-bold mb-5">Want to see our platform in action?</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/schedule-demo" className="bg-purple-gradient text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95">
                        Schedule a Demo
                    </Link>
                    <Link to="/contact" className="border-2 border-primary/20 text-primary hover:border-primary px-8 py-3 rounded-xl font-bold transition-all">
                        Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Vids;