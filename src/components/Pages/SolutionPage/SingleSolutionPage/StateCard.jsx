import React from 'react'

function StateCard({state}) {
    return (
        <div className='w-full  px-5 md:px-10 slg:px-[60px] lg:px-[90px] grid place-items-center'>   <div className="w-full max-w-[913px] pt-16 lg:pt-20 grid grid-cols-2 md:grid-cols-3  gap-6 lg:gap-14">
            {state.map((item, ind) => (
                <div key={ind} className="flex flex-col p-5 justify-center items-center w-full rounded-xl bg-[linear-gradient(15.8deg,_#6492EE_21.51%,_#637CEB_28.33%,_#6276E5_35.69%,_#5A5EDA_43.6%,_#3D52CA_52.05%,_#1820B7_64.6%,_#091CAF_78.23%)] hover:scale-95 ease-in-out duration-200 hover:shadow-lg hover:-translate-y-1">
                    <h3 className='text-white text-3xl lg:text-[42px] lg:leading-[48px] w-full text-center pb-2 font-bold border-b border-white'>{item.count}</h3>
                    <p className='text-base text-white text-center font-medium mt-3'>{item.text}</p>
                </div>
            ))}
        </div></div>
    )
}

export default StateCard