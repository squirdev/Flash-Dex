import HistoryImg from "../../src/assets/images/history.png"
import SettingImg from "../../src/assets/images/setting.png"
import RefreshImg from "../../src/assets/images/refresh.png"
import SwapImg from "../../src/assets/images/swap.png"
import DropDown from "./DropDown"
import { useState } from "react"
import TokenPanel from "./TokenPanel"

export default function MainPanel(props: any) {

    const { showModal, setShowModal } = props;

    return (
        <div className="flex flex-col items-center w-[512px] h-[444px] bg-[#222222] rounded-[12px] p-[10px]">
            <div className="w-full flex flex-row items-center justify-between">
                <p className="text-[20px] text-white font-Roboto font-[500]">
                    Swap & Bridge
                </p>
                <div className="flex flex-row items-center gap-4">
                    <img src={RefreshImg} alt="refresh" />
                    <img src={HistoryImg} alt="history" />
                    <img src={SettingImg} alt="setting" />
                </div>
            </div>
            <div className="w-full mt-[20px] flex flex-row items-center justify-between">
                <div className="flex flex-row w-[250px] items-center justify-between">
                    <p className="text-white font-Roboto text-[14px] font-[400]">
                        From
                    </p>
                    <DropDown showModal={showModal} setShowModal={setShowModal} />
                </div>
                <p className="text-[#FBBF04] font-Roboto font-[700] text-[14px]">
                    Max:
                </p>
            </div>
            <TokenPanel />

            <div className="relative h-[20px]">
                <button className="absolute top-0 ">
                    <img src={SwapImg} alt="swap" className="z-40" />
                </button>
            </div>

            <div className="w-full bg-[#6B72801A] rounded-[12px] px-2 py-4">
                <div className="w-full mt-[20px] flex flex-row items-center justify-between">
                    <div className="flex flex-row w-[250px] items-center justify-between ">
                        <p className="text-white font-Roboto text-[14px] font-[400]">
                            To
                        </p>
                        <DropDown showModal={showModal} setShowModal={setShowModal} />
                    </div>
                </div>
                <TokenPanel />
            </div>
        </div>
    )
}