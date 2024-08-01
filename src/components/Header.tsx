import LogoImg from "../../src/assets/images/logo.png"
import WalletConnectBtn from "./WalletConnectBtn"
import HistoryImg from "../../src/assets/images/history.png"
import FlashImg from "../../src/assets/images/flash.svg"
import { useMediaQuery } from 'react-responsive'

export default function Header() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })

    return (
        <div className="absolute top-0 flex flex-row items-center justify-between p-[20px] h-[60px] w-full bg-[#06070A] ">
            <img src={LogoImg} alt="logo" />
            <div className="flex flex-row items-center gap-2">
                {
                    !isTabletOrMobile &&
                    <div className="flex flex-row items-center gap-1">
                        <img src={FlashImg} className="rounded-full w-[30px] h-[30px] bg-white" />
                        <p className="text-[16px] text-white  font-Roboto font-[400]">
                            $0.000317
                        </p>
                    </div>
                }
                {/* <WalletConnectBtn /> */}
            </div>
        </div>
    )
}