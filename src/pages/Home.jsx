import { BackgroundEffect } from "../components/BackgroundEffect";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Toaster } from "react-hot-toast";

export default function Home(){

    return (
        <div className="min-h-screen bg-background overflow-x-hidden scroll-smooth text-foreground">
            <Toaster/>

            {/* Background effects */}
            <BackgroundEffect/>
            {/* Navbar */}
            <Navbar/>
            {/* Main contents */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectSection/>
                <ContactSection/>
            </main>
            {/* Footer */}
            <Footer/>
        </div>
    )
}