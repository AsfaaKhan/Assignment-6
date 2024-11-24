
import Image from "next/image"

export default function CompanyLogo() {
    return (
        <div>
            <div className=" w-full flex justify-between  max-w-[1280px]  h-auto pt-20 pb-20 pr-6  mobile:pl-6 gap-16 bg-[#F7F7F7] mobile:flex-col ">

                {/* HEADING */}
                <div className=" text-left  mobile:w-full w-[320px] font-roboto font-bold text-2xl mobile:text-[18px] mobile:leading-[27px] leading-[33.6px] text-[#000000]  ">
                    <p>Trusted by 2000+ companies worldwide.</p>
                </div>

                {/* COMPANIES LOGO  */}
                <div className=" flex flex-wrap mobile:justify-center justify-end  mobile:w-full w-[880px] h-14  pb-[8.74px]   ">
                    <Image src={"/images/Airbnb Logo1.svg"} alt="company-logo" width={123.8} height={38.52}></Image>
                    <Image src={"/images/Airbnb Logo2.svg"} alt="company-logo" width={123.8} height={38.52}></Image>
                    <Image src={"/images/Airbnb Logo3.svg"} alt="company-logo" width={123.8} height={38.52}></Image>
                    <Image src={"/images/Airbnb Logo4.svg"} alt="company-logo" width={123.8} height={38.52}></Image>
                    <Image src={"/images/Airbnb Logo5.svg"} alt="company-logo" width={123.8} height={38.52}></Image>
                    <Image src={"/images/Airbnb Logo6.svg"} alt="company-logo" width={123.8} height={38.52}></Image>

                </div>
            </div>
        </div>
    )
}