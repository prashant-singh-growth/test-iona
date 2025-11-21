import React from 'react'
import { Helmet } from 'react-helmet-async'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import SeoHeader from '../components/utils/SeoHeader'

function ThankYou() {
  return (
<div className="w-full h-screen px-5 md:px-10 slg:px-[60px] lg:px-[90px] flex flex-col justify-center items-center bg-primary">
  <SeoHeader
  title={"Thank You | iona.ai"}
  description={"Thank You | iona.ai"}/>
  <Helmet>
   
    <meta name="robots" content="noindex, nofollow" />

  </Helmet>
    <IoMdCheckmarkCircleOutline className="text-white text-6xl mx-auto mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          Thank You!
        </h1>
        <p className="text-white text-lg mt-4 text-center max-w-xl">
          Your form has been submitted successfully. Our team will reach out to
          you soon.
        </p>

        <a
          href="/"
          className="inline-block mt-6 px-6 py-2 rounded-full bg-white text-primary font-medium font-lora  transition-all duration-200"
        >
          Back to Home
        </a>

</div>
  )
}

export default ThankYou