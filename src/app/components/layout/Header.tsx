import Image from "next/image";

const Header = () => {
    return (
        <header
            className="ml-[60px] h-[60px] flex items-center justify-between px-[300px]"
            style={{ background: "#152535" }}
        >
            <div
                className="w-[75px] h-[40px] rounded-[5px]"
                style={{ background: "#253241" }}
            ></div>

            <div className="flex gap-[8px]">
                <div className="flex h-[40px] rounded-[8px] text-white border" style={{ borderColor: "#273344" }}>
                    <span
                        className="flex items-center gap-[16px] px-[16px] rounded-l-[8px]"
                        style={{ background: "#10202D" }}
                    >
                        <Image height={22} width={22} alt="" src="/dollar.svg" />
                        10,566.12
                    </span>
                    <span
                        className="flex items-center px-[16px] rounded-r-[8px] cursor-pointer"
                        style={{ background: "#0F70DC" }}
                    >
                        DEPOSIT
                    </span>
                </div>

                <div
                    className="w-[40px] h-[40px] rounded-[8px] flex items-center justify-center border"
                    style={{ background: "#1C2E3D", borderColor: "#273344" }}
                >
                    <Image height={20} width={20} alt="" src="/bell.svg" />
                </div>

                <div
                    className="w-[40px] h-[40px] rounded-[8px] flex items-center justify-center border"
                    style={{ background: "#1C2E3D", borderColor: "#273344" }}
                >
                    <Image height={20} width={20} alt="" src="/person.svg" />
                </div>
            </div>
        </header>
    );
};

export default Header;
