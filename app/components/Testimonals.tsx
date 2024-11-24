
import Image from "next/image";


export default function Testimonails() {
    return (
        <div id="testimonial" className="flex flex-col w-full justify-center  max-w-[1280px]  top-[58886px] pt-28 pb-28 pl-16 pr-16 gap-20 bg-[#f7f7f7] mobile:bg-[#ffffff] font-roboto">

            {/* HEADING */}
            <div className="gap-6 w-full max-w-[560px]  font-roboto flex flex-col">
                <h1 className="mobile:hidden font-bold text-5xl leading-[57.6px] text-[#000000] ">Customer testimonials</h1>
                <h1 className="tablet:hidden font-bold text-[32px] leading-[41.6px] text-[#000000] text-center ">What Our Student Say </h1>
                <p className="font-normal text-lg leading-[28px] text-[#000000] mobile:text-center items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* CUSTOMER */}
            <div className="  gap-12  flex flex-col ">

                <div className="  gap-8 grid grid-cols-3 mobile:grid-cols-1">
                    <div className="  border-[1px] p-8 gap-6 border-[#000000] flex flex-col ">
                        <div className="gap-1 flex ">
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                        </div>

                        <div className=" gap-6 flex flex-col ">
                            <p className="  font-normal text-lg leading-[27px] "> {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros  elementum tristique. Duis cursus, mi quis viverra ornare."`}</p>
                            <div className="gap-5 flex  ">
                                <Image
                                    src={"images/test1.svg"}
                                    alt="testimonial"
                                    width={56}
                                    height={56}>
                                </Image>
                                <div className=" " >
                                    <h4 className="text-base font-semibold">James Nduku</h4>
                                    <p className="text-base font-normal ">Software Developer</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className=" mobile:hidden border-[1px] p-8 gap-6 border-[#000000] flex flex-col  ">
                        <div className="gap-1 flex ">
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                        </div>

                        <div className=" gap-6 flex flex-col ">
                            <p className="  font-normal text-lg leading-[27px] "> {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros  elementum tristique. Duis cursus, mi quis viverra ornare."`}</p>
                            <div className="gap-5 flex ">
                                <Image
                                    src={"images/test2.svg"}
                                    alt="testimonial"
                                    width={56}
                                    height={56}>
                                </Image>
                                <div className="w-[178px] h-12" >
                                    <h4 className="text-base font-semibold">Erick Kipkemboiu</h4>
                                    <p className="text-base font-normal ">Scrum Master</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className=" mobile:hidden border-[1px] p-8 gap-6 border-[#000000] flex flex-col   ">
                        <div className="gap-1 flex ">
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                            <Image
                                src={"/images/star2.svg"}
                                alt="stars"
                                width={20}
                                height={18.89}
                            ></Image>
                        </div>

                        <div className=" gap-6 flex flex-col ">
                            <p className="  font-normal text-lg leading-[27px] "> {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros  elementum tristique. Duis cursus, mi quis viverra ornare."`}</p>
                            <div className="gap-5 flex ">
                                <Image
                                    src={"images/test3.svg"}
                                    alt="testimonial"
                                    width={56}
                                    height={56}>
                                </Image>
                                <div className="w-[178px] h-12" >
                                    <h4 className="text-base font-semibold">Stephen Kerubo</h4>
                                    <p className="text-base font-normal ">UI/UX Designer</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className=" flex justify-between">
                    <Image
                        src={"/images/Slider Dots.svg"}
                        alt="button"
                        width={72}
                        height={8}></Image>
                    <Image
                        src={"/images/Slider Buttons.svg"}
                        alt="button"
                        width={111}
                        height={48}></Image>
                </div>


            </div>
        </div>
    )
}