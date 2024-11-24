import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
export default function Footer() {
    return (
        <div className="w-full max-w-[1280px]   p-20 mobile:pt-12 mobile:pb-12 mobile:pr-6 mobile:pl-6 gap-20 mobile:gap-12 bg-[#ffffff] flex flex-col">

            <div className="max-w-[1120px] flex justify-between mobile:flex-col mobile:h-auto mobile:gap-6 ">

                <div className=" font-roboto  text-[#000000] items-center justify-center">
                    <h4 className="text-lg leading-[27px] font-semibold text-start mobile:text-center">Subscribe to our newsletter</h4>
                    <p className="text-base font-normal  mobile:text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="max-w-[400px] gap-4   mobile:w-full mobile:h-auto ">

                    <div className=" gap-4  fle mobile:flex-col mobile:w-full   ">
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
            <div className="  gap-20  flex  justify-between mobile:flex-col mobile:w-full mobile:gap-8  mobile:justify-center mobile:items-center ">

                <div className=" mobile:w-full   mobile:flex mobile:items-center   mobile:text-center mobile:justify-center">
                    <div className="pt-[29px] pb-[29px]  gap-[10.5px] flex ">
                        <Image
                            src={"/images/logoPic.svg"}
                            alt="logo"
                            width={32.58}
                            height={30.38}>
                        </Image>
                        <h1 className="font-inter font-bold text-[25.07px] leading-[30.34px] ">Ddsgnr</h1></div>
                </div>


                <div className="  h-[225px]  gap-4 font-roboto  ">
                    <h1 className="font-semibold text-base mobile:flex mobile:justify-center">Courses</h1>
                    <div>
                        <p className=" mobile:flex mobile:justify-center pt-2 pb-2 font-normal text-sm leading-[21px] ">Business</p>
                        <p className=" mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Development</p>
                        <p className="mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Technology</p>
                        <p className=" mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Design</p>
                        <p className=" mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Programming</p>
                    </div>
                </div>
                <div className=" h-[225px] gap-4 font-roboto ">
                    <h1 className="font-semibold text-base mobile:flex mobile:justify-center">Resources</h1>
                    <div>
                        <p className="w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] mobile:flex mobile:justify-center ">Career</p>
                        <p className=" mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Resume</p>
                        <p className=" mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Learning</p>
                        <p className="mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Interview Preparation</p>
                        <p className=" mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Jobs</p>
                    </div>
                </div>
                <div className=" h-[225px] gap-4 font-roboto ">
                    <h1 className="font-semibold text-base mobile:flex mobile:justify-center ">About Us</h1>
                    <div>
                        <p className=" mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Contact</p>
                        <p className="mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Help/Support</p>
                        <p className="mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">FAQ</p>
                        <p className="mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Terms and Conditions</p>
                        <p className="mobile:flex mobile:justify-center w-[250px] h-[37px] pt-2 pb-2 font-normal text-sm leading-[21px] ">Partners</p>
                    </div>
                </div>

            </div>

            {/* FOTTER SOCIAL LINKS  */}

            <div className=" gap-8  max-w-[1120px] h-[57px]  border-t-[0.5px] border-[#000000] flex mobile:flex-col  justify-between  pt-8">
                <div className=" flex gap-6 ">
                    <p className="font-roboto text-sm leading-[21px] font-light text-[#000000] ">2023 Ddsgnr. All right reserved.</p>
                    <p className="font-roboto text-sm leading-[21px] font-light text-[#000000] underline ">Privacy Policy</p>
                    <p className="font-roboto text-sm leading-[21px] font-light text-[#000000] underline ">Terms of Service</p>
                    <p className="font-roboto text-sm leading-[21px] font-light text-[#000000] underline ">Cookies Settings</p>

                </div>
                <div className=" gap-3 flex mobile:justify-center mobile:items-center">
                    <Link href="https://www.facebook.com" target="_blank">
                        <svg className="h-6 w-6" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 3H6.5C5.9477 3 5.5 3.44772 5.5 4V7H9.5C9.6137 6.99748 9.7216 7.0504 9.7892 7.1419C9.8568 7.2334 9.8758 7.352 9.84 7.46L9.1 9.66C9.0318 9.8619 8.8431 9.9984 8.63 10H5.5V17.5C5.5 17.7761 5.2761 18 5 18H2.5C2.22386 18 2 17.7761 2 17.5V10H0.5C0.22386 10 0 9.7761 0 9.5V7.5C0 7.2239 0.22386 7 0.5 7H2V4C2 1.79086 3.7909 0 6 0H9.5C9.7761 0 10 0.22386 10 0.5V2.5C10 2.77614 9.7761 3 9.5 3Z" fill="black" />
                        </svg>

                    </Link>
                    <Link href="https://www.instagram.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                        </svg>
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                    </Link>
                    <Link href="https://www.linkedin.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8.339 19H5.662V9h2.677v10zm-1.339-11.59c-.842 0-1.523-.682-1.523-1.523S6.158 4.364 7 4.364c.842 0 1.523.682 1.523 1.523S7.842 7.41 7 7.41zm12.337 11.59h-2.676v-4.843c0-1.152-.023-2.634-1.604-2.634-1.604 0-1.851 1.254-1.851 2.548v4.93H10.53V9h2.567v1.364h.035c.357-.676 1.23-1.39 2.535-1.39 2.712 0 3.213 1.788 3.213 4.11v5.916z" />
                        </svg></Link>
                </div>
            </div>


        </div>
    )
}