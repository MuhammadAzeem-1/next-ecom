import React from 'react'
import CountdownTimer from '../CountDownTimer'


import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


interface types {
    timer: boolean,
    arrows: boolean,
    button: boolean,
    sectionName: String,
    sectionHeading: String
}

const SectionHeader = ({timer, arrows, button, sectionHeading, sectionName}: types) => {


    const deadline = '2024-03-29T23:59:59';


  return (
    <div>
      <div className="flex items-center justify-start gap-6 tab-lg:mx-[8rem]  des:mx-[8rem] mx-[1rem]  m-auto">
           <div className="w-4 h-8 bg-[#db4444] rounded-[2px]"></div>
           <p className="text-[16px] font-semibold text-[#db4444] ">{sectionName}</p>
        </div>

        <div className="flex justify-between items-center m-auto mx-[1rem] des:mx-[8rem] tab-lg:mx-[8rem] pt-4">
            <div className="flex tab:gap-[9rem]  items-center gap-[4rem]">

                <h1 className="font-semibold text-[16px] tracking-wide  tab-lg:text-[36px] tab:text-[22px]">{sectionHeading}</h1>

                {timer && <div>
                   <CountdownTimer deadline={deadline}/>
                </div> }
                
            </div>
             
             {arrows && (
                <div className="hidden flex items-center gap-1 tab-lg:block">
                    <button className="bg-[#f5f5f5] p-4 rounded-[50%]"> 
                       <FaArrowLeft />
                    </button>

                    <button className="bg-[#f5f5f5] p-4 rounded-[50%]"> 
                       <FaArrowRight />
                    </button>
                </div>
             )}

             {button && (
                <div>
                     <button className="text-[12px] tab:text-[16px] px-4 py-1  bg-[#db4444] tab:px-8 tab:py-2 capitalize rounded text-white tab" >View all</button>
                </div>
             )}
           
        </div>
    </div>
  )
}

export default SectionHeader
