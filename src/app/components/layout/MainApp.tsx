'use client'

import GameTray from "../features/GameTray"

const MainApp = () => {
    return (
        <div
            className="ml-[60px] bg-[#1C2E3D] px-[300px]"
        >
            <GameTray type="featured-games" />
            <GameTray type="new-releases" />
            <GameTray type="hot-games" />
            <GameTray type="bonus-buy" />
            <GameTray type="live-games" />
        </div>
    )
}

export default MainApp