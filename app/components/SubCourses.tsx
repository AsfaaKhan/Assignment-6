
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Course() {
    return (
        <div id="services" className=" bg-[#FFFFFF]">
            <div className=" flex flex-col max-w-[1280px] gap-20 items-center" >

                {/* heading */}

                <div className=" flex flex-col left-[100px] pt-[112px] pr-[64px]  pl-[64px]  gap-6  ">
                    <h1 className="font-roboto text-center  font-bold text-5xl mobile:text-[32px] leading-[57.6px] text-[#000000]  ">Explore Courses By Category </h1>
                    <p className="font-roboto font-normal text-lg text-[#000000] ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                </div>


                {/* Explore Courses  */}
                <div className="py-10 flex flex-col justify-center  gap-16 ">

                    {/* 1ST ROW */}
                    <div className=" gap-6 flex flex-col  lg:flex-row   ">
                        <div className="flex p-4  h-[132px] rounded-[5px] gap-8 bg-[#F7F7F7]  ">
                            <div className="bg-[#FFFFFF] gap-[10px] h-[100px]  items-center p-[34px] rounded-[5px]">
                                <Image
                                    src={"/images/1.svg"}
                                    alt=""
                                    width={32}
                                    height={32}
                                >
                                </Image>
                            </div>

                            <div className=" w-[246.67px] h-[57px] gap-6 pt-4 font-roboto items-center text-black justify-center">
                                <h3 className=" text-xl font-semibold ">Design & Development</h3>
                                <p className="font-normal text-lg">50+ Courses Available</p>
                            </div>

                        </div>

                        <div className="flex  h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] ">
                            <div className="bg-[#FFFFFF] gap-[10px] h-[100px]  items-center p-[34px] rounded-[5px]">
                                <Image
                                    src={"/images/2.svg"}
                                    alt=""
                                    width={32}
                                    height={32}
                                >
                                </Image>
                            </div>

                            <div className=" w-[246.67px] h-[57px] gap-6 pt-4 font-roboto items-center text-black justify-center">
                                <h3 className=" text-xl font-semibold ">Marketing</h3>
                                <p className="font-normal text-lg">50+ Courses Available</p>
                            </div>

                        </div>

                        <div className="flex  h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] ">
                            <div className="bg-[#FFFFFF] gap-[10px] h-[100px]  items-center p-[34px] rounded-[5px]">
                                <Image
                                    src={"/images/3.svg"}
                                    alt=""
                                    width={32}
                                    height={32}
                                >
                                </Image>
                            </div>

                            <div className=" w-[246.67px] h-[57px] gap-6 pt-4 font-roboto items-center text-black  justify-center">
                                <h3 className=" text-xl font-semibold ">Development</h3>
                                <p className="font-normal text-lg">50+ Courses Available</p>
                            </div>

                        </div>
                    </div>

                    {/* 2ND ROW */}
                    <div className="gap-6 flex flex-col md:hidden">
                        <div className="flex  h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] ">
                            <div className="bg-[#FFFFFF] gap-[10px] h-[100px] items-center p-[34px] rounded-[5px]">
                                <Image
                                    src={"/images/4.svg"}
                                    alt=""
                                    width={32}
                                    height={32}
                                >
                                </Image>
                            </div>

                            <div className=" w-[246.67px] h-[57px] gap-6 pt-4 font-roboto items-center text-black justify-center">
                                <h3 className=" text-xl font-semibold ">Communication</h3>
                                <p className="font-normal text-lg">50+ Courses Available</p>
                            </div>

                        </div>

                        <div className="flex  h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] ">
                            <div className="bg-[#FFFFFF] gap-[10px] h-[100px]  items-center p-[34px] rounded-[5px]">
                                <Image
                                    src={"/images/5.svg"}
                                    alt=""
                                    width={32}
                                    height={32}
                                >
                                </Image>
                            </div>

                            <div className=" w-[246.67px] h-[57px] gap-6 pt-4 font-roboto items-center text-black justify-center">
                                <h3 className=" text-xl font-semibold ">Digital Marketing</h3>
                                <p className="font-normal text-lg">50+ Courses Available</p>
                            </div>

                        </div>

                        <div className="flex  h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] ">
                            <div className="bg-[#FFFFFF] gap-[10px] h-[100px]  items-center p-[34px] rounded-[5px]">
                                <Image
                                    src={"/images/6.svg"}
                                    alt=""
                                    width={32}
                                    height={32}
                                >
                                </Image>
                            </div>

                            <div className=" w-[246.67px] h-[57px] gap-6 pt-4 font-roboto items-center text-black  justify-center">
                                <h3 className=" text-xl font-semibold ">Design & Development</h3>
                                <p className="font-normal text-lg">50+ Courses Available</p>
                            </div>

                        </div>
                    </div>

                    {/* 3RD ROW */}
                    <div className=" gap-6 flex flex-col lg:flex-row ">
                        <div className="flex  h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] ">
                            <div className="bg-[#FFFFFF] gap-[10px] h-[100px]  items-center p-[34px] rounded-[5px]">
                                <Image
                                    src={"/images/7.svg"}
                                    alt=""
                                    width={32}
                                    height={32}
                                >
                                </Image>
                            </div>

                            <div className="w-auto lg:w-[246.67px] h-[57px] gap-6 pt-4 font-roboto items-center text-black justify-center">
                                <h3 className=" text-xl font-semibold ">Business</h3>
                                <p className="font-normal text-lg">50+ Courses Available</p>
                            </div>

                        </div>

                        <div className="flex  h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] ">
                            <div className="bg-[#FFFFFF] gap-[10px] h-[100px] items-center p-[34px] rounded-[5px]">
                                <Image
                                    src={"/images/8.svg"}
                                    alt=""
                                    width={32}
                                    height={32}
                                >
                                </Image>
                            </div>

                            <div className=" w-[246.67px] h-[57px] gap-6 pt-4 font-roboto items-center text-black  justify-center">
                                <h3 className=" text-xl font-semibold ">Finance</h3>
                                <p className="font-normal text-lg">50+ Courses Available</p>
                            </div>
                        </div>

                        <div className="flex h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] ">
                            <div className="bg-[#FFFFFF] gap-[10px] h-[100px]  items-center p-[34px] rounded-[5px]">
                                <Image
                                    src={"/images/9.svg"}
                                    alt=""
                                    width={32}
                                    height={32}
                                >
                                </Image>
                            </div>

                            <div className=" w-[246.67px] h-[57px] gap-6 pt-4 font-roboto items-center text-black  justify-center">
                                <h3 className=" text-xl font-semibold ">Consulting</h3>
                                <p className="font-normal text-lg">50+ Courses Available</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* View Courses Button */}
                <Link href="/courses" target="_blank">
                    <Button variant={"seeMoreBtn"} > View All Courses</Button>
                </Link>




            </div>
        </div>
    )
}