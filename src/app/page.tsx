import {
  awardRepository,
  // collectionRepository,
  contentRepository,
} from '@/lib/repositories';
import { HeroSection } from '@/components/home/HeroSection';
import { AwardTicker } from '@/components/home/AwardTicker';
// import { PremierAwardsSection } from '@/components/home/PremierAwardsSection';
import { ProcessStrip } from '@/components/home/ProcessStrip';
import { FounderQuote } from '@/components/home/FounderQuote';
import { RushOrdersSection } from '@/components/home/RushOrdersSection';
import { CrystalInMotion } from '@/components/home/CrystalInMotion';

export default function HomePage() {
  const site = contentRepository.getSite();
  // const awards = awardRepository.getFeatured();
  // const collections = collectionRepository.getAll();
  const steps = contentRepository.getProcessSteps();

  return (
    <>
      <HeroSection content={site.hero} established={site.brand.established} />
      <AwardTicker names={awardRepository.getTickerNames()} />
      <RushOrdersSection />
      {/* <PremierAwardsSection awards={awards} collections={collections} /> */}
      <CrystalInMotion />
      <ProcessStrip steps={steps} />
      <FounderQuote quote={site.quote} />
    </>
  );
}
