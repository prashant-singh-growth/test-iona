import React from 'react'

function SummerySection() {
  return (
      <section className="w-full bg-white flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10">
    
     <div className="w-full max-w-[1440px] bg-darkVoilet flex flex-col p-10 py-12 rounded-xl justify-center items-center gap-6">
        <h2 className='text-2xl text-white font-lora'>Executive Summary</h2>
        <p className='text-base text-center text-white/80 font-lora'>This case study details how a prominent Indian life insurance provider revolutionized their hiring process, drastically reducing onboarding time, improving document accuracy, and cutting costs by automating their recruitment process using iona.ai's AI-driven solutions</p>
         <div className=" grid grid-cols-3 w-fit gap-5 ">
              {[
                {
                  count: "90%",
                  text: "Faster Onboarding",
                },
                {
                  count: "95%",
                  text: "AI Document Accuracy",
                },
                {
                  count: "89%",
                  text: "Cost Reduction",
                },
              ].map((item) => (
                <div
                  key={item.count}
                  className="flex flex-col w-full justify-center items-center"
                >
                  <p className="font-lora text-4xl text-white">{item.count}</p>
                  <p className="font-lora text-base text-white/80">{item.text}</p>
                </div>
              ))}
            </div>
     </div>
     
    
    </section>
  )
}

export default SummerySection