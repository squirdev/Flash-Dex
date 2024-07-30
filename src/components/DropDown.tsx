import { useState } from "react"
import DownImg from "../../src/assets/images/down.png"

export default function DropDown(props: any) {

    const { showModal, setShowModal } = props

    const handleSelectNetwork = () => {
        setShowModal(true)
    }

    return (
        <button className="relative flex flex-row items-center justify-end " onClick={handleSelectNetwork} >
            <div className="bg-[#6B7280] opacity-20 w-[176px] h-[32px] rounded-[8px]">
            </div>
            <img src={DownImg} alt="down" className="absolute right-2" />
        </button>
    )
}