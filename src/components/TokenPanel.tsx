import { useState } from "react"
import DownImg from "../../src/assets/images/down.png"

export default function TokenPanel(props: any) {

    return (
        <button className="relative w-full flex flex-row items-center justify-end mt-[10px]"  >
            <div className="flex flex-row items-start bg-[#6B7280] opacity-20 w-full h-[80px] rounded-[8px] p-[10px]">
            </div>
            <input className="absolute left-2 top-2 w-[300px] outline-none bg-transparent text-white" type="number" />
            <img src={DownImg} alt="down" className="absolute right-2" />
        </button>
    )
}