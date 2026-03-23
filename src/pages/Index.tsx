import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import PlayAreaSection from '@/components/PlayAreaSection';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <PlayAreaSection />
      <ReservationSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}