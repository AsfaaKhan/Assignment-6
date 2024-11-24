
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
    return (
        <div>
            {/* TEXT PICTURE  */}
            <div id="homePage" className=" max-w-[1280px] h-auto top-[141px] mobile:pt-10 bg-[#FFFFFF] ">
                <div className="grid grid-cols-2 mobile:grid-cols-1 gap-6 mobile:gap-0   ">

                    {/* TEXT */}

                    <div className=" flex justify-center items-center pt-16 pb-16 pr-6 pl-6  ">
                        <div className=" flex flex-col   max-w-lg mobile:max-w-md   gap-6 bg-[#FFFFFF]  ">

                            <h1 className="  text-[#000000] font-roboto font-bold text-[56px] mobile:text-[32px] leading-[67.2px] mobile:leading-tight ">Learn new skills <br /> online with ease</h1>
                            <p className=" font-roboto font-normal text-[18px] mobile:text-[16px] leading-[27px] text-[#000000] ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

                            {/* BUTTON */}
                            <div className=" flex flex-wrap gap-4 ">
                                <Button variant={"heroSectionBtn1"}
                                ><Link href="#services">Start learning now</Link> </Button>
                                <Button variant={"heroSectionBtn2"}><Link href="#courses"> Explore Courses</Link>
                                </Button>
                            </div>
                        </div>




                    </div>

                    {/* IMAGE */}
                    <div className=" flex justify-center items-center ">
                        <Image
                            src={"/images/homepage.svg"}
                            alt="home page image"
                            width={720}
                            height={900}
                            className=""
                        >
                        </Image>
                    </div>
                </div>
            </div>
        </div>
    )
}