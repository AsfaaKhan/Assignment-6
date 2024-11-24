"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";



export default function Header() {
    const [navbar, setNavbar] = useState(false)
    const toggleNavbar = () => {
        setNavbar(!navbar);
    }
    return (
        <div>
            {/* Container  */}
            <div className=" mobile:hidden w-full max-w-[1280px] h-[72px]  bg-[#F7F7F7]  border-b-[1px]  border-[#676767]  px-16 pl-16   " >

                <nav className="flex justify-between items-center w-[1152px] h-[44px] mobile:w-[428px] mobile:flex mobile:justify-between ">

                    {/* LOGO */}
                    <div className="flex items-center  pt-[29px] gap-[10.5px] w-[130.6px] h-[41px]">
                        <Image
                            src={"/images/logoPic.svg"}
                            alt="logo pic"
                            width={32.58}
                            height={30.38}>
                        </Image>
                        <h1 className="font-inter font-bold text-[25.07px] text-[#000000] ">Ddsgnr</h1>

                    </div>

                    {/* NAVBAR ITEMS */}
                    <div className="pt-7 mobile:hidden">
                        <div className=" bg-[#FFFFFF] w-[910px] h-[44px] gap-[10px] items-center font-roboto text-base font-normal text-[#000000]">
                            <ul className="flex justify-between">
                                <li className="p-[10px] hover:border-b-[1px] hover:border-[#000000] gap-[10px] "><Link href="/">Home</Link></li>
                                <li className="p-[10px] hover:border-b-[1px] hover:border-[#000000] "><Link href="#courses">Courses</Link></li>
                                <li className="p-[10px] hover:border-b-[1px] hover:border-[#000000] "><Link href="#services">Services</Link></li>
                                <li className="p-[10px] hover:border-b-[1px] hover:border-[#000000] "><Link href="#acheivement">Achievement</Link></li>
                                <li className="p-[10px] hover:border-b-[1px] hover:border-[#000000] "><Link href="#about">About Us</Link></li>
                                <li className="p-[10px] hover:border-b-[1px] hover:border-[#000000] "><Link href="#testimonial">Testimonial</Link></li>

                                {/*     Anths Button     */}
                                <div className="flex space-x-4 w-[191px] h-[40px] gap-4 mt-[2px]">
                                    {/* Button 1 */}
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="buttonStyle1">Login</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>Login </DialogTitle>
                                                <DialogDescription>
                                                    Enter Your Email and Password For Login 
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="email" className="text-right">
                                                        Email
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        defaultValue="abc@gmail.com"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="password" className="text-right">
                                                        Password
                                                    </Label>
                                                    <Input
                                                        id="username"
                                                        defaultValue="1234abc@"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button type="submit">LOGIN</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    {/* Button 2 */}
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="buttonStyle2">Sign Up</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>Sign Up</DialogTitle>
                                                <DialogDescription>
                                                    Create Your Account With Your Valid Email
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="email" className="text-right">
                                                        Email
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        defaultValue="abc@gmail.com"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="password" className="text-right">
                                                        Create Password 
                                                    </Label>
                                                    <Input
                                                        id="username"
                                                        defaultValue="1234abc@"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="password" className="text-right">
                                                        Confirm Password
                                                    </Label>
                                                    <Input
                                                        id="username"
                                                        defaultValue="1234abc@"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button type="submit">SIGN UP</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </ul>
                            <div>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>

            {/* HAMBURGER MOBILE SIZE   */}
            <div className=" tablet:hidden mobile:fixed mobile:top-0  mobile:mb-6   mobile:w-[428px]  h-[72px]  bg-[#F7F7F7]  border-b-[1px]  border-[#676767]  px-16 pl-16   " >

                <nav className="flex justify-between items-center h-[44px] ">

                    {/* LOGO */}
                    <div className="flex items-center  pt-[29px] gap-[10.5px] w-[130.6px] h-[41px]">
                        <Image
                            src={"/images/logoPic.svg"}
                            alt="logo pic"
                            width={32.58}
                            height={30.38}>
                        </Image>
                        <h1 className="font-inter font-bold text-[25.07px] text-[#000000] ">Ddsgnr</h1>
                    </div>

                    <div className="relative  pt-6 w-12 h-12 gap-6 p-3">
                        <button onClick={toggleNavbar}
                            className="flex flex-col items-center justify-center w-10 h-10 space-y-1  rounded-md focus:ring-offset-2 focus:ring-gray-500">
                            <span
                                className={`block h-1 w-8 bg-[#000000] rounded transition-transform ${navbar ? "rotate-45 translate-y-2.5" : ""
                                    }`}>
                            </span>
                            <span className={`block h-1 w-8 bg-[#000000] rounded transition-opacity ${navbar ? "opacity-0 " : ""}`}>
                            </span>
                            <span className={`block h-1 w-8 bg-[#000000] rounded transition-transform ${navbar ? "-rotate-45 -translate-y-2.5 " : ""}`}>
                            </span>
                        </button>
                        <div className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-opacity ${navbar ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                            <ul className="py-2">
                                <li className="block p-[10px] hover:border-b-[1px] hover:border-[#000000] gap-[10px] "><Link href={"./"}>Home</Link></li>
                                <li className="block p-[10px] hover:border-b-[1px] hover:border-[#000000] "><Link href="#courses">Courses</Link></li>
                                <li className="block  p-[10px] hover:border-b-[1px] hover:border-[#000000] "><Link href="#services">Services</Link></li>
                                <li className="block p-[10px] hover:border-b-[1px] hover:border-[#000000] "><Link href="#acheivement">Achievement</Link></li>
                                <li className="block p-[10px] hover:border-b-[1px] hover:border-[#000000] "><Link href="#about">About Us</Link></li>
                                <li className="block p-[10px] hover:border-b-[1px] hover:border-[#000000] "><Link href="#testimonial">Testimonial</Link></li>

                                {/*     Anths Button     */}
                                <div className="flex space-x-4 w-[191px] h-[40px] gap-4 mt-[2px]">
                                    {/* Button 1 */}
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="buttonStyle1">Login</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>Login </DialogTitle>
                                                <DialogDescription>
                                                    Enter Your Email and Password For Login 
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="email" className="text-right">
                                                        Email
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        defaultValue="abc@gmail.com"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="password" className="text-right">
                                                        Password
                                                    </Label>
                                                    <Input
                                                        id="username"
                                                        defaultValue="1234abc@"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button type="submit">LOGIN</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    {/* Button 2 */}
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="buttonStyle2">Sign Up</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>Sign Up</DialogTitle>
                                                <DialogDescription>
                                                    Create Your Account With Your Valid Email
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="email" className="text-right">
                                                        Email
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        defaultValue="abc@gmail.com"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="password" className="text-right">
                                                        Create Password 
                                                    </Label>
                                                    <Input
                                                        id="username"
                                                        defaultValue="1234abc@"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="password" className="text-right">
                                                        Confirm Password
                                                    </Label>
                                                    <Input
                                                        id="username"
                                                        defaultValue="1234abc@"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button type="submit">SIGN UP</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}
