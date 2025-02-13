
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
    return (
        <div>
            {/* TEXT PICTURE  */}
            <div id="homePage" className="h-auto  bg-[#FFFFFF] w-screen mt-8">
                <div className="flex flex-col lg:flex-row  gap-6 ">

                    {/* TEXT */}
                    <div className=" flex flex-col justify-center items-center pt-16 pb-16 pl-[80px] pr-[60px] ">
                        <div className=" flex flex-col  gap-6 bg-[#FFFFFF] ">
                            <h1 className="  text-[#000000] font-roboto font-bold md:text-[56px] text-[32px] md:leading-[67.2px] leading-tight ">Learn new skills <br /> online with ease</h1>
                            <p className=" font-roboto font-normal md:text-[18px] text-[16px] leading-[27px] text-[#000000] ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

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