
import Image from "next/image"

export default function CompanyLogo() {
    return (
        <div>
            <div className=" flex flex-col justify-center md:flex-row md:justify-between  h-auto pt-20 pb-20  bg-[#F7F7F7]  ">

                {/* HEADING */}
                <div className=" text-left  font-roboto font-bold md:text-2xl text-[18px] leading-[27px] md:leading-[33.6px] text-[#000000]  ">
                    <p>Trusted by 2000+ companies worldwide.</p>
                </div>

                {/* COMPANIES LOGO  */}
                <div className=" grid gird-cols-3 sm:grid-cols-3 md:grid-cols-6  justify-center md:justify-end  w-full h-14  pb-[8.74px]   ">
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