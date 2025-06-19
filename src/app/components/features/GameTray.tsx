import useGetGames from "@/app/api/hooks/useGetGames";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

function formatTitle(slug: string): string {
    return slug
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

interface GameTrayProps {
    type: string;
}

const GameTray = ({ type }: GameTrayProps) => {
    const { data: games } = useGetGames({ type });
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        const el = containerRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    useEffect(() => {
        checkScroll();
        const el = containerRef.current;
        if (!el) return;

        const handleResize = () => checkScroll();
        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scroll = (dir: "left" | "right") => {
        const el = containerRef.current;
        if (!el) return;
        const scrollAmount = el.clientWidth * 0.8;
        el.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    };

    return (
        <div className="text-white font-poppins">
            <div className="flex justify-between items-center pt-4 mb-4">
                <div className="flex items-center gap-2">
                    <Image height={22} width={22} alt="" src={`/${type}.svg`} />
                    <h2 className="text-base font-medium">{formatTitle(type)}</h2>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={`h-[35px] rounded-lg w-[35px] border-2 border-[#253241] grid place-items-center transition-opacity ${canScrollLeft ? "opacity-100 cursor-pointer" : "opacity-40 cursor-not-allowed"
                            }`}
                    >
                        <Image src={'/arrowLeft.svg'} alt="" width={22} height={22} />

                    </button>
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`h-[35px] rounded-lg w-[35px] border-2 border-[#253241] grid place-items-center transition-opacity ${canScrollRight ? "opacity-100 cursor-pointer" : "opacity-40 cursor-not-allowed"
                            }`}
                    >
                        <Image src={'/arrowRight.svg'} alt="" width={22} height={22} />

                    </button>
                </div>
            </div>

            <div
                ref={containerRef}
                className="flex overflow-x-auto overflow-y-hidden gap-4 scroll-smooth scrollbar-hide"
            >
                {games?.data.map(game => (
                    <div key={game.id} className="group relative flex-shrink-0">
                        <img
                            alt={game.name}
                            src={game.image}
                            className="w-[150px] h-[200px] object-cover transition-transform group-hover:scale-105"
                        />

                        <div
                            className="absolute inset-0 flex items-center justify-center bg-slate-500/60 p-2 text-center text-white opacity-0 transition-opacity group-hover:opacity-100"
                        >
                            <span className="font-bold">{game.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameTray;
