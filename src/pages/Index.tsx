import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { toast } from "sonner";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleSearch = useCallback((query: string) => {
    if (!query.trim()) return;
    toast.info(`Searching for "${query}"...`, { description: "Smart search results would appear here." });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onSearch={handleSearch} />
      <HeroSection onSearch={handleSearch} />
      <AboutSection />
      <AcademicsSection />
      <DepartmentsSection />
      <AnnouncementsSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
      <MobileNav />
      {/* Bottom padding for mobile nav */}
      <div className="h-16 md:hidden" />
    </div>
  );
};

export default Index;
