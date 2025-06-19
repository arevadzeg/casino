import Image from "next/image";

const PromoSection = () => {
    return (
        <div className="flex flex-col gap-2 pt-6">
            <div className="flex gap-2">
                <img
                    src={'/png/daily_rewards.png'}
                    alt="Daily Rewards Promotion"
                    className="w-[calc(50%-4px)]"
                />
                <img
                    src={'/png/welcome_bonus.png'}
                    alt="Welcome Bonus Promotion"
                    className="w-[calc(50%-4px)]"
                />
            </div>

            <div className="flex gap-2">
                <img
                    src={'/png/free_spins.png'}
                    alt="Free Spins Promotion"
                    className="w-1/3"
                />
                <img
                    src={'/png/daily_rewards.png'}
                    alt="Daily Rewards Promotion"
                    className="w-1/3"
                />
                <div className="flex w-1/3 flex-wrap gap-2">
                    <img
                        src={'/png/tournament-1.png'}
                        alt="Tournament Promotion 1"
                        className="w-[calc(50%-4px)]"
                    />
                    <img
                        src={'/png/tournament-2.png'}
                        alt="Tournament Promotion 2"
                        className="w-[calc(50%-4px)]"
                    />
                    <img
                        src={'/png/slot-2.png'}
                        alt="Slot Promotion"
                        className="w-[calc(50%-4px)]"
                    />
                    <img
                        src={'/png/slot-2.png'}
                        alt="Slot Promotion"
                        className="w-[calc(50%-4px)]"
                    />
                </div>
            </div>
        </div>
    );
};

export default PromoSection;