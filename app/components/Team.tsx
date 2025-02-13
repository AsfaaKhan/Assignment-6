import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Team() {
    return (

        // {/* HEADING */}
        <div id="about" className=" bg-[#f7f7f7]  flex flex-col   gap-4  pt-28  pb-28 mobile:pt-12 text-black  mobile:pb-12 mobile:pr-6 mobile:pl-6 mobile:gap-12 ">
            <div className=" mb-12 gap-6 flex flex-col">
                <h1 className=" font-bold text-5xl leading-[57.6px] text-center text-[#000000]">Our team</h1>
                <p className="font-normal text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>


            {/* TEAM  */}
            <div className=" flex flex-col  max-w-[1280px]  gap-16  mobile:items-center mobile:gap-24">

                {/* 1st row of Team */}
                <div className="gap-12 grid grid-cols-3 mobile:grid-cols-1">

                    <div className="gap-6 flex flex-col items-center">
                        <Image
                            src={"/images/team1.svg"}
                            alt="team member "
                            width={80}
                            height={80}
                        >
                        </Image>
                        <div className=" h-[121px] gap-4 font-roboto">
                            <h4 className="font-semibold text-xl leading-[30px] text-center">James Nduku</h4>
                            <p className="font-normal text-lg leading-[27px] text-center">Marketing Coordinator</p>
                        </div>
                        <div className="flex gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                        </div>
                    </div>
                    <div className="gap-6 flex flex-col items-center">
                        <Image
                            src={"/images/team2.svg"}
                            alt="team member "
                            width={80}
                            height={80}
                        >
                        </Image>
                        <div className=" h-[121px] gap-4 font-roboto">
                            <h4 className="font-semibold text-xl leading-[30px] text-center">Joseph Munyambu</h4>
                            <p className="font-normal text-lg leading-[27px] text-center">Nursing Assistant</p>
                        </div>
                        <div className="flex gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                        </div>
                    </div>
                    <div className="gap-6 flex flex-col items-center">
                        <Image
                            src={"/images/team3.svg"}
                            alt="team member "
                            width={80}
                            height={80}
                        >
                        </Image>
                        <div className=" h-[121px] gap-4 font-roboto">
                            <h4 className="font-semibold text-xl leading-[30px] text-center">Joseph Ngumbau</h4>
                            <p className="font-normal text-lg leading-[27px] text-center">Medical Assistant</p>
                        </div>
                        <div className="flex gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                        </div>
                    </div>
                </div>


                {/* 2nd row of Team */}
                <div className="mobile:hidden gap-12 grid grid-cols-3 mobile:grid-cols-1">
                    <div className="gap-6 flex flex-col items-center">
                        <Image
                            src={"/images/team4.svg"}
                            alt="team member "
                            width={80}
                            height={80}
                        >
                        </Image>
                        <div className=" h-[121px] gap-4 font-roboto">
                            <h4 className="font-semibold text-xl leading-[30px] text-center">Erick Kipkemboi</h4>
                            <p className="font-normal text-lg leading-[27px] text-center">Web Designer</p>
                        </div>
                        <div className="flex gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                        </div>

                    </div>
                    <div className="gap-6 flex flex-col items-center">
                        <Image
                            src={"/images/team5.svg"}
                            alt="team member "
                            width={80}
                            height={80}
                        >
                        </Image>
                        <div className=" h-[121px] gap-4 font-roboto">
                            <h4 className="font-semibold text-xl leading-[30px] text-center">Stephen Kerubo</h4>
                            <p className="font-normal text-lg leading-[27px] text-center">President of Sales</p>
                        </div>
                        <div className="flex gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                        </div>

                    </div>
                    <div className="gap-6 flex flex-col items-center">
                        <Image
                            src={"/images/team6.svg"}
                            alt="team member "
                            width={80}
                            height={80}
                        >
                        </Image>
                        <div className="h-[121px] gap-4 font-roboto">
                            <h4 className="font-semibold text-xl leading-[30px] text-center">John Leboo</h4>
                            <p className="font-normal text-lg leading-[27px] text-center">Dog Trainer</p>
                        </div>
                        <div className="flex gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="social icons"
                                width={24}
                                height={24}>
                            </Image>
                        </div>

                    </div>
                </div>

                {/* Button */}

            </div>
            <div className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:pt-2 mobile:pb-2 mobile:pr-4 mobile:pl-4 tablet:hidden">
                < Button variant="buttonStyle1" >
                    <Link href="/team" target="_blank">View All</Link>
                </Button></div>
        </div>

    )
}