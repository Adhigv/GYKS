import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EnrollmentForm from "../components/EnrollmentForm";
import Footer from "../components/Footer";
import SkillCard from "../components/SkillCard";
import SkillsSection from "../components/SkillsSection";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <SkillsSection />
       <SkillCard />
      <Testimonial />
      <EnrollmentForm />
      <Footer />

      
    
    </>
  );
}
export default Home;