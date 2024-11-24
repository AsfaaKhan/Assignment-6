import HeadLine from "./components/Headline"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection";
import CompanyLogo from "./components/CompanyLogo";
import SubCourse from "./components/SubCourses";
import Achivement from "./components/Achivement";
import Course from "./components/Courses";
import Team from "./components/Team";
import Testimonails from "./components/Testimonals";
import Footer from "./components/Footer";




export default function Home() {
  return(
    <div>
      <HeadLine/>
      <Header/>
       <HeroSection/>
      <CompanyLogo/>
      <SubCourse/>
      <Achivement/>
      <Course/>
      <Team/>
      <Testimonails/>
      <Footer/> 
      
     
      </div>
  )
}
