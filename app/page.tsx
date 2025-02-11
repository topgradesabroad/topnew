import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ImpactStats from '@/components/ImpactStats';
import ExpertiseSection from '@/components/ExpertiseSection';
import IvyLeagueForm from "@/components/IvyLeagueForm";
import TestimonialSection from '@/components/TestimonialSection'
import StudyDestinations from '@/components/StudyDestinations';
import FAQSection from '@/components/FAQSection';
export default function Home() {
  return (
    <main>
    <HeroSection/>
    <ImpactStats/>
    <ExpertiseSection/>
    <IvyLeagueForm/>
    <TestimonialSection/>
    <StudyDestinations/>
    <FAQSection/>
        
    </main>
  );
}