'use client'

import Image from "next/image";
import { useState } from "react";
import HamburgerMenuSVG from "../svg/HamburgerMenuSVG";

const menuItems = [
    [
        { title: 'Promotions', link: '/promotions' },
        { title: 'VIP Club', link: '/vip-club' },
        { title: 'Tournaments', link: '/tournaments' },
    ],
    [
        { title: 'Slots', link: '/games/slots' },
        { title: 'Blackjack', link: '/games/blackjack' },
        { title: 'Roulette', link: '/games/roulette' },
        { title: 'Baccarat', link: '/games/baccarat' },
        { title: 'Live Dealer', link: '/games/live-dealer' },
        { title: 'Crash', link: '/games/crash' },
        { title: 'Dice', link: '/games/dice' },
        { title: 'Video Poker', link: '/games/video-poker' },
    ],
    [
        { title: 'Favorites', link: '/favorites' },
        { title: 'Recent', link: '/recent' },
    ],
    [
        { title: 'Collections', link: '/collections' },
        { title: 'Providers', link: '/providers' },
    ],
    [
        { title: 'Support', link: '/support' },
        { title: 'English', link: '/language/english' },
    ]
];

const SideBar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <nav
            className={`fixed top-0 left-0 flex flex-col p-[10px] transition-all duration-100`}
            style={{
                backgroundColor: '#162231',
                width: isSideBarOpen ? 240 : 60
            }}
        >
            <div
                className="mb-[20px] ml-[10px] cursor-pointer"
                onClick={() => setIsSideBarOpen((prev) => !prev)}
            >
                <HamburgerMenuSVG />
            </div>

            {menuItems.map((group, i) => (
                <div
                    key={i}
                    className={`mb-[8px] rounded-[8px] ${isSideBarOpen ? 'bg-[#1C2E3D]' : ''}`}
                >
                    {group.map((item) => (
                        <div
                            key={item.title}
                            className="h-[40px] w-[200px] text-white text-[16px] font-medium font-[Poppins] px-[10px] flex items-center gap-[8px] cursor-pointer"
                        >
                            <Image height={20} width={20} src={`/${item.title}.svg`} alt="" />
                            <span className={`${isSideBarOpen ? 'inline' : 'hidden'}`}>
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            ))}
        </nav>
    );
};

export default SideBar;
