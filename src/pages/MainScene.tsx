import { useEffect, useState } from "react";
import Header from "../components/Header";
import MainPanel from "../components/MainPanel";
import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit';

import { LiFiWidget } from '@lifi/widget';

export default function MainScene() {
    const [showModal, setShowModal] = useState(false);
    const { openConnectModal } = useConnectModal();



    return (
        <div className="flex items-center justify-center h-screen w-full bg-[#06070A] ">
            <Header />
            {/* <MainPanel showModal={showModal} setShowModal={setShowModal} /> */}

            <div className="w-full px-[20px]">
                <LiFiWidget
                    config={{
                        walletConfig: {
                            onConnect() {
                                openConnectModal?.();
                            },
                        },
                        appearance: 'dark',
                        theme: {
                            container: {
                                boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
                                borderRadius: '16px',
                                borderWidth: '1px',
                                borderColor: '#444'
                            },
                        },
                    }}
                    integrator="cra-example"
                />
            </div>

        </div>
    )
}