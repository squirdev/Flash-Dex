
import { useConnectModal } from '@rainbow-me/rainbowkit';
import WalletImg from "../../src/assets/images/wallet.svg"

export default function WalletConnectBtn() {
    const { openConnectModal } = useConnectModal();

    const handleWalletConnect = () => {
        openConnectModal?.()
    }

    return (
        <button className="flex flex-col items-center justify-center h-[36px] w-[156px] bg-[#FBBF04] rounded-[8px] " onClick={handleWalletConnect} >
            <div className="flex flex-row items-center gap-2">
                <img src={WalletImg} alt="logo" />
                <p className="text-white text-[16px] font-Roboto font-[500]">
                    Connect Wallet
                </p>
            </div>
        </button>
    )
}