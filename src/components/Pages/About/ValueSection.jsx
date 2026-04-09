import React from 'react'

function ValueSection({data}) {
  return (
   <div className='h-fit bg-[#F3F3F5] relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] py-14 md:py-16 lg:py-[90px]  flex flex-col justify-center items-center'>
      <div className="w-full lg:max-w-[1440px] flex flex-col justify-center items-center gap-10">
      
       <div className="flex flex-col max-w-[826px] justify-center items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center  ">
           {data.title}
          </h2>
          {data.description && (<p className="text-base text-[#2A2564] text-center font-lora">
           {data.description}
          </p>)}
        </div>
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.card.map((item,val)=>(
                <div key={val} className="w-full bg-white border-2 border-[#160E381A] rounded-[12px] py-[22px] px-5 md:px-8 ease-in-out duration-200 hover:shadow-md hover:-translate-y-2 hover:scale-[0.99]">
                <div className="flex flex-row gap-3 justify-start items-center border-b border-[#160E381A] py-2">
                    <div className="size-10" dangerouslySetInnerHTML={{__html:item.icon}} />
<h3 className='text-base text-darkVoilet font-medium'>{item.title}</h3>
</div>
<p className='text-sm text-[#5A4E7A] mt-4'>{item.description}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ValueSection