import React from 'react'

function HowThisWorkSection({ howwork }) {
  return (
    <div className='h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] py-14 md:py-16 lg:py-[90px]  flex flex-col justify-center items-center'>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col max-w-[849px] justify-center items-center ">

          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center ">
            How does it work?
          </h2>
          <p className="text-base text-center font-lora text-primary font-normal mt-5">
            {howwork.description}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[50px]">
          {howwork.card.map((card, ind) => (
            <div key={ind} className="w-full  bg-[#FFFFFF] flex flex-col gap-3 border border-[#EAEAEA] py-[22px] rounded-[12px] px-5 md:px-8">
              <p className='text-lg font-medium text-primary'>{card.headshot}</p>
              <h3 className='text-2xl font-semibold text-primary leading-[24px]'>{card.title}</h3>
              <ul className='text-base pl-2 mt-4 lg:mt-7 text-primary font-normal singleSolutionList'>
                {card.list.map((list, ind) => <li key={ind}>{list}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowThisWorkSection