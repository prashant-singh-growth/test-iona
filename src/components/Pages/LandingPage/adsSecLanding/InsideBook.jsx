import React from 'react'

function InsideBook() {
  return (
    <div className='bg-[#160E38]/5 px-5 md:px-10 slg:px-[60px] lg:px-[90px] pt-[60px] pb-[80px]'>
        <div className="w-full max-w-[1440px] mx-auto flex flex-col">
            <div className="flex w-fit max-w-[778px] flex-col">
                <h2 className='bg-[linear-gradient(1deg,_#6492EE_2.91%,_#637CEB_8.74%,_#6276E5_15.03%,_#5A5EDA_21.79%,_#3D52CA_29.01%,_#1820B7_39.73%,_#091CAF_51.38%)] bg-clip-text text-transparent text-3xl md:text-[40px] ] '>Inside the Book</h2>
                <div className="bg-[linear-gradient(63deg,_#1820B7_40.61%,_#3D52CA_45.07%,_#5A5EDA_48.08%,_#BCD2FF_55.93%)] w-full max-w-[360px] h-[1px]"></div>
                <p className='text-base text-[#2A2564] mt-5'>The AI Maturity Model for HR draws on decades of validated management science, triangulated with primary research and operational data from 150,000+ AI-driven hires. Amit Srivastava is thrilled to officially share the definitive guide to HR transformation with HR leaders.</p>
            </div>
            <div className="w-full grid md:grid-cols-2 mt-11 gap-y-5 gap-x-9">
{[
    {
        icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="12" fill="url(#paint0_linear_1407_350)"/>
<g clip-path="url(#clip0_1407_350)">
<path d="M20.6916 11.8167C20.4744 11.7176 20.2385 11.6664 19.9999 11.6664C19.7612 11.6664 19.5254 11.7176 19.3082 11.8167L12.1666 15.0667C12.0187 15.1319 11.893 15.2387 11.8047 15.3741C11.7164 15.5094 11.6694 15.6676 11.6694 15.8292C11.6694 15.9908 11.7164 16.1489 11.8047 16.2843C11.893 16.4197 12.0187 16.5265 12.1666 16.5917L19.3166 19.85C19.5337 19.9491 19.7696 20.0003 20.0082 20.0003C20.2469 20.0003 20.4828 19.9491 20.6999 19.85L27.8499 16.6C27.9978 16.5348 28.1235 16.428 28.2118 16.2926C28.3 16.1573 28.347 15.9991 28.347 15.8375C28.347 15.6759 28.3 15.5178 28.2118 15.3824C28.1235 15.247 27.9978 15.1402 27.8499 15.075L20.6916 11.8167Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3332 24.7084L20.6915 28.175C20.4744 28.2741 20.2385 28.3253 19.9998 28.3253C19.7612 28.3253 19.5253 28.2741 19.3082 28.175L11.6665 24.7084" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3332 20.5416L20.6915 24.0083C20.4744 24.1073 20.2385 24.1586 19.9998 24.1586C19.7612 24.1586 19.5253 24.1073 19.3082 24.0083L11.6665 20.5416" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_1407_350" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#0B64F4"/>
<stop offset="1" stop-color="#8039C6"/>
</linearGradient>
<clipPath id="clip0_1407_350">
<rect width="20" height="20" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>`,
        title:`AI Maturity Model for HR`,
        description:`Six dimensions. Five levels. A diagnostic framework built for ground realities.`
    },
    {
        icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="12" fill="url(#paint0_linear_1407_358)"/>
<g clip-path="url(#clip0_1407_358)">
<path d="M19.9998 28.3333C24.6022 28.3333 28.3332 24.6023 28.3332 20C28.3332 15.3976 24.6022 11.6666 19.9998 11.6666C15.3975 11.6666 11.6665 15.3976 11.6665 20C11.6665 24.6023 15.3975 28.3333 19.9998 28.3333Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0002 21.6667C20.9206 21.6667 21.6668 20.9205 21.6668 20C21.6668 19.0796 20.9206 18.3334 20.0002 18.3334C19.0797 18.3334 18.3335 19.0796 18.3335 20C18.3335 20.9205 19.0797 21.6667 20.0002 21.6667Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_1407_358" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#0B64F4"/>
<stop offset="1" stop-color="#8039C6"/>
</linearGradient>
<clipPath id="clip0_1407_358">
<rect width="20" height="20" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>
`,
        title:`Three Compasses`,
        description:`Performance, Cost, and Human — navigate every AI decision with clarity.`
    },
    {
        icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="12" fill="url(#paint0_linear_1407_366)"/>
<path d="M28.3332 15.8334L21.2498 22.9167L17.0832 18.75L11.6665 24.1667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.3335 15.8334H28.3335V20.8334" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1407_366" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#0B64F4"/>
<stop offset="1" stop-color="#8039C6"/>
</linearGradient>
</defs>
</svg>
`,
        title:`ARISE Framework`,
        description:`Five stages from crisis to credibility in your AI
transformation journey.`
    },
    {
        icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="12" fill="url(#paint0_linear_1407_373)"/>
<g clip-path="url(#clip0_1407_373)">
<path d="M26.6668 20.8333C26.6668 25 23.7502 27.0833 20.2835 28.2916C20.102 28.3531 19.9048 28.3502 19.7252 28.2833C16.2502 27.0833 13.3335 25 13.3335 20.8333V15C13.3335 14.779 13.4213 14.567 13.5776 14.4107C13.7339 14.2544 13.9458 14.1666 14.1668 14.1666C15.8335 14.1666 17.9168 13.1666 19.3668 11.9C19.5434 11.7491 19.768 11.6663 20.0002 11.6663C20.2324 11.6663 20.457 11.7491 20.6335 11.9C22.0918 13.175 24.1668 14.1666 25.8335 14.1666C26.0545 14.1666 26.2665 14.2544 26.4228 14.4107C26.579 14.567 26.6668 14.779 26.6668 15V20.8333Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_1407_373" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#0B64F4"/>
<stop offset="1" stop-color="#8039C6"/>
</linearGradient>
<clipPath id="clip0_1407_373">
<rect width="20" height="20" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>
`,
        title:`Platform Priority Access`,
        description:`First 75 readers get beta access to the AIFirstCHR
companion platform.`
    },
].map((item,ind)=>(
    <div key={ind} className="w-full bg-[#FFFFFF99] border border-[#CACFD866] backdrop-blur-2xl rounded-[12px] p-6 shadow-[0px_2px_8px_0px_#6C79930F]
">
<div className="" dangerouslySetInnerHTML={{__html:item.icon}}></div>
<h3 className='text-xl text-[#171A26] font-semibold pt-4 pb-3'>{item.title}</h3>
<p className='text-base text-[#576175] '>{item.description}</p>

</div>
))}
            </div>
        </div>
    </div>
  )
}

export default InsideBook