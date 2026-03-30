// import React from 'react'

// function AdsThankuPage() {
//   return (
//     <div className="min-h-screen bg-white text-darkVoilet font-sans selection:bg-primary/10">
//       {/* Top Thin Brand Bar */}
//       <div className="h-0.5 w-full bg-primary"></div>

//       <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        
//         {/* Floating Icon */}
//         <div className="w-fit mx-auto mb-10 ">
//           {/* <span className="text-4xl">📕</span> */}
//            <img src="/assets/pages/landingpage/popup-free-copy.png" alt="" className="w-20"/>
//         </div>

//         {/* Heading Section */}
//         <h1 className="text-4xl  font-black tracking-tight mb-6 uppercase italic">
//           Your Copy Has Been <span className="text-primary">Reserved.</span>
//         </h1>
        
//         <p className="text-xl  text-violet_2 max-w-2xl mx-auto leading-relaxed mb-16">
//           Thank you for reserving your complimentary hardcopy of 
//           <span className="block font-bold text-darkVoilet mt-2 underline decoration-primary decoration-4 underline-offset-8">
//             The AI-First CHRO
//           </span>
//         </p>

//         {/* Shipment Tracker Visual */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 relative">
          
//           {/* Box 1 */}
//           <div className="bg-themeGray p-8 rounded-2xl border-b-4 border-violet_2">
//             <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Phase 01</div>
//             <h3 className="text-lg font-bold mb-2">Review</h3>
//             <p className="text-sm text-violet_2">Our team is currently verifying your details for approval.</p>
//           </div>

//           {/* Box 2 */}
//           <div className="bg-darkVoilet p-8 rounded-2xl border-b-4 border-primary text-white scale-105 shadow-xl">
//             <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-4">Phase 02</div>
//             <h3 className="text-lg font-bold mb-2">Dispatch</h3>
//             <p className="text-sm text-themeGray/70">Approved copies are shipped within 2–3 business days.</p>
//           </div>

//           {/* Box 3 */}
//           <div className="bg-themeGray p-8 rounded-2xl border-b-4 border-violet_2">
//             <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Phase 03</div>
//             <h3 className="text-lg font-bold mb-2">Arrival</h3>
//             <p className="text-sm text-violet_2">Your book will be delivered to your doorstep within 5–7 days.</p>
//           </div>

//         </div>

       
       
//       </main>

     
//     </div>
//   )
// }

// export default AdsThankuPage
import React from 'react'

function AdsThankuPage() {
  return (
    <div className="min-h-screen font-lora bg-white flex items-center justify-center p-6 ">
      <div className="max-w-4xl w-full flex flex-col items-center text-center pt-10">
        
        {/* Book Image */}
        <img 
          src="/assets/pages/landingpage/popup-free-copy.png" 
          alt="Book Cover" 
          className="w-24 mb-8 object-contain"
        />

        {/* Line 1: Main Heading */}
        <h1 className="text-2xl md:text-5xl font-extrabold text-[#000] mb-6 flex items-center justify-center gap-2 md:gap-4">
          {/* <span className="text-xl hi md:text-4xl">📕</span> */}
          Your Copy Has Been Reserved
          {/* <span className="text-xl md:text-4xl">📕</span> */}
        </h1>

        {/* Line 2: Thank You Text */}
        <p className="text-lg md:text-2xl text-darkVoilet mb-6 leading-relaxed">
          Thank you for reserving your complimentary hardcopy of{" "}
          <span className="italic font-bold text-primary border-b-2 border-primary/30">
            The AI-First CHRO.
          </span>
        </p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 lg:mt-10 mb-20 relative">
          
          {/* Box 1 */}
          <div className="bg-themeGray p-8 rounded-2xl border-b-4 border-violet_2">
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Phase 01</div>
            <h3 className="text-lg font-bold mb-2">Review</h3>
            <p className="text-sm text-violet_2">Our team is currently verifying your details for approval.</p>
          </div>

          {/* Box 2 */}
          <div className="bg-darkVoilet p-8 rounded-2xl border-b-4 border-primary text-white scale-105 shadow-xl">
            <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-4">Phase 02</div>
            <h3 className="text-lg font-bold mb-2">Dispatch</h3>
            <p className="text-sm text-themeGray/70">Approved copies are shipped within 2–3 business days.</p>
          </div>

          {/* Box 3 */}
          <div className="bg-themeGray p-8 rounded-2xl border-b-4 border-violet_2">
            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Phase 03</div>
            <h3 className="text-lg font-bold mb-2">Arrival</h3>
            <p className="text-sm text-violet_2">Your book will be delivered to your doorstep within 5–7 days.</p>
          </div>

        </div>
        {/* Line 3: Shipping Details */}
        {/* <p className="text-base md:text-xl text-violet_2 max-w-3xl leading-relaxed">
          Our team will review <span className="font-bold text-darkVoilet">your details</span>, 
          and once approved, your copy will be shipped within{" "}
          <span className="font-bold  whitespace-nowrap text-primary">2–3 business days</span>{" "}
          and delivered to you within{" "}
          <span className="font-bold  whitespace-nowrap text-primary">5–7 days.</span>
        </p> */}

      </div>
    </div>
  )
}

export default AdsThankuPage