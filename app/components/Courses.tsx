import Link from "next/link"
import Image from "next/image"

// BUTTON
import { Button } from "@/components/ui/button"



export default function Courses() {
    return (
        <div>
            {/*Course Container  */}
            <div id="courses" className=" w-full max-w-[1280px] pr-6 pb-12 pt-12 pl-6 gap-20 left-[100px] bg-[#ffffff]  flex flex-col justify-center items-center  font-roboto">

                {/* COURSES DISPLAY */}
                <div className="flex  flex-col justify-center items-center  gap-16">

                    {/* HEADING */}
                <div className=" flex flex-col  gap-6  font-roboto  ">
                    <h1 className=" font-bold text-[56px] leading-[67.2px] text-center mobile:text-[32px] mobile:leading-[41.6px]">Courses</h1>
                    <p className="font-normal text-[18px] leading-[27px] text-center ">Your Ultimate Guide to learning</p>
                </div>

                    {/* CATEGORIES NAME */}
                    <div className="flex mt-9  ">
                        <ul className="w-[336px] h-[40px] flex justify-between font-normal text-base ">
                            <li className="w-[87px] h-[40px] hover:border-b-[1px] pt-2 pb-2 pr-4 pl-4 gap-2 hover:border-b-[#676767]"><Link href={"./"} >Popular</Link></li>
                            <li className="w-[140px] h-[40px] hover:border-b-[1px] pt-2 pb-2 pr-4 pl-4 gap-2 hover:border-b-[#676767]"><Link href={"./"}>Recommended</Link></li>
                            <li className="w-[109px] h-[40px] hover:border-b-[1px] pt-2 pb-2 pr-4 pl-4 gap-2 hover:border-b-[#676767]  "><Link href={"./"}>Best Price</Link></li></ul>
                    </div>

                    {/* CATEGORIES SECTION */}
                   
                    <div  className="gap-16 grid mobile:grid-cols-1 ">
                         {/* 1ST ROW */}

                        <div className="  gap-8 grid grid-cols-3 mobile:grid-cols-1 mobile:gap-16">
                            <div className="  rounded-[5px] gap-6 bg-[#F7F7F7] ">
                                <Image
                                    src={'/images/card1.svg'}
                                    alt="card img"
                                    width={416}
                                    height={300}>
                                </Image>
                                <div className="flex flex-col   pr-4 pb-6 pl-4 pt-6 gap-6">
                                    <div className=" gap-2">
                                        <div className="flex justify-between">
                                            <h4 className="font-roboto font-semibold text-sm leadig-[21px] text-[#000000]">Design</h4>
                                            <Image
                                                src={'/images/star.svg'}
                                                alt="star"
                                                width={48}
                                                height={24}>
                                            </Image>
                                        </div>
                                    </div>
                                    <h1 className="font-roboto font-bold text-2xl leading-[33.6px] text-[#000000] ">UX/UI Design 201</h1>
                                    <p className="font-roboto font-normal text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    <div className=" gap-4 flex items-center text-center">
                                        <Button variant={"buttonStyle1"} className="">Enroll Now </Button>
                                        <h1 className="rounded-[5px] pt-2 pb-2 pl-5 pr-5 gap-2 " >$400</h1>

                                    </div>
                                </div>
                            </div>

                            <div className="  rounded-[5px] gap-6 bg-[#F7F7F7]">
                                <Image
                                    src={'/images/card2.svg'}
                                    alt="card img"
                                    width={416}
                                    height={300}>
                                </Image>
                                <div className="flex flex-col  pr-4 pb-6 pl-4 pt-6 gap-6">
                                    <div className=" gap-2">
                                        <div className="flex justify-between">
                                            <h4 className="font-roboto font-semibold text-sm leadig-[21px] text-[#000000]">Programmimg</h4>
                                            <Image
                                                src={'/images/star.svg'}
                                                alt="star"
                                                width={48}
                                                height={24}>
                                            </Image>
                                        </div>
                                    </div>
                                    <h1 className="font-roboto font-bold text-2xl leading-[33.6px] text-[#000000] ">Introduction to Python</h1>
                                    <p className="font-roboto font-normal text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    <div className=" gap-4 flex items-center text-center">
                                        <Button variant={"buttonStyle1"} className="">Enroll Now </Button>
                                        <h1 className="rounded-[5px] pt-2 pb-2 pl-5 pr-5 gap-2 " >$400</h1>

                                    </div>
                                </div>
                            </div>


                            <div className="  rounded-[5px] gap-6 bg-[#F7F7F7]">
                                <Image
                                    src={'/images/card3.svg'}
                                    alt="card img"
                                    width={416}
                                    height={300}>
                                </Image>
                                <div className="flex flex-col   pr-4 pb-6 pl-4 pt-6 gap-6">
                                    <div className=" gap-2">
                                        <div className="flex justify-between">
                                            <h4 className="font-roboto font-semibold text-sm leadig-[21px] text-[#000000]">Business</h4>
                                            <Image
                                                src={'/images/star.svg'}
                                                alt="star"
                                                width={48}
                                                height={24}>
                                            </Image>
                                        </div>
                                    </div>
                                    <h1 className="font-roboto font-bold text-2xl leading-[33.6px] text-[#000000] ">Data Analysis for Beginners</h1>
                                    <p className="font-roboto font-normal text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    <div className=" gap-4 flex items-center text-center">
                                        <Button variant={"buttonStyle1"} className="">Enroll Now </Button>
                                        <h1 className="rounded-[5px] pt-2 pb-2 pl-5 pr-5 gap-2 " >$400</h1>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2ND ROW */}
                        <div className=" mobile:hidden gap-8 grid grid-cols-3 mobile:grid-cols-1 mobile:gap-16">
                        <div className="  rounded-[5px] gap-6 bg-[#F7F7F7]">
                                <Image
                                    src={'/images/card4.svg'}
                                    alt="card img"
                                    width={416}
                                    height={300}>
                                </Image>
                                <div className="flex flex-col pr-4 pb-6 pl-4 pt-6 gap-6">
                                    <div className=" gap-2">
                                        <div className="flex justify-between">
                                            <h4 className="font-roboto font-semibold text-sm leadig-[21px] text-[#000000]">Art</h4>
                                            <Image
                                                src={'/images/star.svg'}
                                                alt="star"
                                                width={48}
                                                height={24}>
                                            </Image>
                                        </div>
                                    </div>
                                    <h1 className="font-roboto font-bold text-2xl leading-[33.6px] text-[#000000] ">Data Analysis for Beginners</h1>
                                    <p className="font-roboto font-normal text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    <div className=" gap-4 flex items-center text-center">
                                        <Button variant={"buttonStyle1"} className="">Enroll Now </Button>
                                        <h1 className="rounded-[5px] pt-2 pb-2 pl-5 pr-5 gap-2 " >$400</h1>

                                    </div>
                                </div>
                            </div>
                            <div className="  rounded-[5px] gap-6 bg-[#F7F7F7]">
                                <Image
                                    src={'/images/card5.svg'}
                                    alt="card img"
                                    width={416}
                                    height={300}>
                                </Image>
                                <div className="flex flex-col  pr-4 pb-6 pl-4 pt-6 gap-6">
                                    <div className=" gap-2">
                                        <div className="flex justify-between">
                                            <h4 className="font-roboto font-semibold text-sm leadig-[21px] text-[#000000]">Law</h4>
                                            <Image
                                                src={'/images/star.svg'}
                                                alt="star"
                                                width={48}
                                                height={24}>
                                            </Image>
                                        </div>
                                    </div>
                                    <h1 className="font-roboto font-bold text-2xl leading-[33.6px] text-[#000000] ">Rule of Law</h1>
                                    <p className="font-roboto font-normal text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    <div className=" gap-4 flex items-center text-center">
                                        <Button variant={"buttonStyle1"} className="">Enroll Now </Button>
                                        <h1 className="rounded-[5px] pt-2 pb-2 pl-5 pr-5 gap-2 " >$400</h1>

                                    </div>
                                </div>
                            </div>
                            <div className="  rounded-[5px] gap-6 bg-[#F7F7F7]">
                                <Image
                                    src={'/images/card6.svg'}
                                    alt="card img"
                                    width={416}
                                    height={300}>
                                </Image>
                                <div className="flex flex-col  pr-4 pb-6 pl-4 pt-6 gap-6">
                                    <div className=" gap-2">
                                        <div className="flex justify-between">
                                            <h4 className="font-roboto font-semibold text-sm leadig-[21px] text-[#000000]">Tech</h4>
                                            <Image
                                                src={'/images/star.svg'}
                                                alt="star"
                                                width={48}
                                                height={24}>
                                            </Image>
                                        </div>
                                    </div>
                                    <h1 className="font-roboto font-bold text-2xl leading-[33.6px] text-[#000000] ">Introduction to webflow</h1>
                                    <p className="font-roboto font-normal text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    <div className=" gap-4 flex items-center text-center">
                                        <Button variant={"buttonStyle1"} className="">Enroll Now </Button>
                                        <h1 className="rounded-[5px] pt-2 pb-2 pl-5 pr-5 gap-2 " >$400</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* SEE MORE BUTTON */}
                <Link href="/courses" target="_blank">
                    <Button variant={"seeMoreBtn"} > View All Courses</Button>
                </Link>   
            


                </div>

            </div>

        </div>
    )
}