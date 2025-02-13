
import Link from "next/link"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function HeadLine() {
    return (

        // container 
        <div className="  pr-[64px] pl-[62px] bg-[#F7F7F7] top-[100px] left-[100px] border-b-2 border-[#000000] flex mb-[14px] mobile:hidden">

            <div className="pt-3 pb-3 gap-8 flex justify-between">
                {/*     EMAIL & PHONE  */}
                <div className="gap-4 flex  ">
                    <p className="font-roboto w-[205px] h-[21px] font-normal text-sm text-[#000000] pt-3 pb-3 ">Phone Number: 956 742 455 678</p>

                    <div className="border-l-[1px]  border-[#676767]"></div>

                    <p className="font-roboto font-normal text-sm text-[#000000] w-[205px] pt-3 pb-3 gap-8">Email: info@addsgnr.com</p>
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