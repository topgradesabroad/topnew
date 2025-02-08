import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ImpactStats from '@/components/ImpactStats';
import ExpertiseSection from '@/components/ExpertiseSection';
import IvyLeagueForm from '@/components/IvyLeagueForm';
export default function Home() {
  return (
    <main>
       <HeroSection />
        <ImpactStats />
        <ExpertiseSection />
        <IvyLeagueForm />
    </main>
  );
}