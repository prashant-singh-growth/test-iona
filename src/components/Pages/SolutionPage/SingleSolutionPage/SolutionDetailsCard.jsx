import React from 'react'

function SolutionDetailsCard({detail}) {
    return (
        <div className="w-full pt-14 lg:pt-[102px] px-5 md:px-10 slg:px-[60px] lg:px-[90px]">
            <div className="w-full flex flex-col justify-center item-center">
                <div className="w-full flex flex-col justify-center items-center">
                    <h2 className="text-3xl max-w-[788px]  md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center ">
                        {detail.title}
                    </h2>
                    <p className="text-base text-[#2A2564] max-w-[569px] text-center pt-4">
                      {detail.description}
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-28 mt-14 ">
                    {
                        detail.card.map((card,ind)=>(
                            <div key={ind} className="w-full flex flex-col gap-4">
                        <div className="w-full flex gap-3 flex-row justify-start items-center">
                           <div className="flex-none w-10 h-10" dangerouslySetInnerHTML={{__html:card.svg}}/>
                            <h3 className='text-xl font-semibold text-primary'>{card.title}</h3>

                        </div>
                        <p className='text-base text-[#63696F]'>{card.description}</p>

                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SolutionDetailsCard