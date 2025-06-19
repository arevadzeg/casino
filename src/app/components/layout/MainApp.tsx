'use client'

import GameTray from "../features/GameTray"
import PromoSection from "../features/PromoSection"

const MainApp = () => {
    return (
        <div
            className="ml-[60px] bg-[#1C2E3D] px-[300px]"
        >
            <PromoSection />
            <GameTray type="featured-games" />
            <GameTray type="new-releases" />
            <GameTray type="hot-games" />
            <GameTray type="bonus-buy" />
            <GameTray type="live-games" />
        </div>
    )
}

export default MainApp