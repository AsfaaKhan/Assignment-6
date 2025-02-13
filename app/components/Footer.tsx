import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
export default function Footer() {
    return (
        <div className="w-full  p-20 pt-12 pb-12 pr-6 pl-6 gap-20 sm:gap-12 text-black bg-[#ffffff] flex flex-col">

            <div className="flex justify-between mobile:flex-col mobile:h-auto mobile:gap-6 ">

                <div className=" font-roboto  text-[#000000] items-center justify-center">
                    <h4 className="text-lg leading-[27px] font-semibold text-start mobile:text-center">Subscribe to our newsletter</h4>
                    <p className="text-base font-normal  mobile:text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="sm:max-w-[400px] gap-4   w-full  ">

                    <div className=" gap-4 w-full   ">
                        <div className="gap-4 flex mobile:flex-col ">
                            <Input
                                id="email"
                                placeholder="Enter Your Email"
                                required
                                className="col-span-3 w-[265px] h-12 text-[#505050] rounded-[5px] border-[0.5px] p-[12px] gap-2 border-[#000000] justify-start font-roboto font-normal text-base  mobile:border-[#000000] mobile:w-full"
                            />

                            <Button variant="buttonStyle1" className=" mobile:w-full p-[21px]" >Subscribe</Button>
                        </div>
                        <p className="font-normal text-xs mobile:text-center pt-4">By subscribing you agree to with our <span className="font-normal text-xs leading-[18px] border-b-[0.1px] border-[#000000] "> Privacy Policy</span> </p></div>

                </div>

            </div>

            {/*  FOOTER */}
            <div className="  gap-20  grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 justify-center items-center md:gap-8 ">
                <div className="w-full flex items-center   text-center justify-center">
                    <div className="pt-[29px] pb-[29px]  gap-[10.5px] flex ">
                        <Image
                            src={"/images/logoPic.svg"}
                            alt="logo"
                            width={32.58}
                            height={30.38}>
                        </Image>
                        <h1 className="font-inter font-bold text-[25.07px] leading-[30.34px] ">Ddsgnr</h1>
                    </div>
                </div>

                <div className="  h-[225px]  gap-4 font-roboto  ">
                    <h1 className="font-semibold text-base flex mobile:justify-center">Courses</h1>
                    <div>
                        <p className=" mobile:flex mobile:justify-center pt-2 pb-2 font-normal text-sm leading-[21px] ">Business</p>
                        <p className=" mobile:flex mobile:justify-center  h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Development</p>
                        <p className="mobile:flex mobile:justify-center  h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Technology</p>
                        <p className=" mobile:flex mobile:justify-center h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Design</p>
                        <p className=" mobile:flex mobile:justify-center h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Programming</p>
                    </div>
                </div>
                <div className=" h-[225px] gap-4 font-roboto ">
                    <h1 className="font-semibold text-base mobile:flex mobile:justify-center">Resources</h1>
                    <div>
                        <p className="w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] mobile:flex mobile:justify-center ">Career</p>
                        <p className=" mobile:flex mobile:justify-center h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Resume</p>
                        <p className=" mobile:flex mobile:justify-center  h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Learning</p>
                        <p className="mobile:flex mobile:justify-center h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Interview Preparation</p>
                        <p className=" mobile:flex mobile:justify-center h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Jobs</p>
                    </div>
                </div>
                <div className=" h-[225px] gap-4 font-roboto ">
                    <h1 className="font-semibold text-base mobile:flex mobile:justify-center ">About Us</h1>
                    <div>
                        <p className=" mobile:flex mobile:justify-center  h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Contact</p>
                        <p className="mobile:flex mobile:justify-center h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Help/Support</p>
                        <p className="mobile:flex mobile:justify-center h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">FAQ</p>
                        <p className="mobile:flex mobile:justify-center h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Terms and Conditions</p>
                        <p className="mobile:flex mobile:justify-center  h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Partners</p>
                    </div>
                </div>

            </div>

            {/* FOTTER SOCIAL LINKS  */}

            <div className=" gap-8   h-[57px]  border-t-[0.5px] border-[#000000] flex mobile:flex-col  justify-between  pt-8">
                <div className=" flex gap-6 ">
                    <p className="font-roboto text-sm leading-[21px] font-light text-[#000000] ">2023 Ddsgnr. All right reserved.</p>
                    <p className="font-roboto text-sm leading-[21px] font-light text-[#000000] underline ">Privacy Policy</p>
                    <p className="font-roboto text-sm leading-[21px] font-light text-[#000000] underline ">Terms of Service</p>
                    <p className="font-roboto text-sm leading-[21px] font-light text-[#000000] underline ">Cookies Settings</p>

                </div>
                {/* Social Links */}
                <div className=" flex justify-end items-center w-[736px] pr-16  gap-4 text-black ">


                    {/* FACEBOOK */}
                    <Link href="https://www.facebook.com" target="_blank">
                    <FaFacebookF size={24}/>

                    </Link>

                    {/* INSTAGRAM */}
                    <Link href="https://www.instagram.com" target="_blank">
                        <FaInstagram  size={24}/>
                    </Link>

                    {/* TWITTER */}
                    <Link href="https://www.twitter.com" target="_blank" >
                    <FaTwitter size={24}/>
                    </Link>

                    {/* LINKEDIN */}
                    <Link href="https://www.linkedin.com" target="_blank">
                        < FaLinkedin size={24}/>
                        </Link>
                </div>
            </div>


        </div>
    )
}