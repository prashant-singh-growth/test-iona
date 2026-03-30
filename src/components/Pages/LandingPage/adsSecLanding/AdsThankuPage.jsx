import React from 'react'

function AdsThankuPage() {
  return (
    <div className="min-h-screen bg-white text-darkVoilet font-sans selection:bg-primary/10">
      {/* Top Thin Brand Bar */}
      <div className="h-0.5 w-full bg-primary"></div>

      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        
        {/* Floating Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-themeGray mb-10 ring-8 ring-themeGray/30">
          <span className="text-4xl">📕</span>
        </div>

        {/* Heading Section */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase italic">
          Your Copy Has Been <span className="text-primary">Reserved.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-violet_2 max-w-2xl mx-auto leading-relaxed mb-16">
          Thank you for reserving your complimentary hardcopy of 
          <span className="block font-bold text-darkVoilet mt-2 underline decoration-primary decoration-4 underline-offset-8">
            The AI-First CHRO
          </span>
        </p>

        {/* Shipment Tracker Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 relative">
          
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

       
       
      </main>

     
    </div>
  )
}

export default AdsThankuPage