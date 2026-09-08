import {
  awardRepository,
  collectionRepository,
  contentRepository,
} from "@/lib/repositories";
import { HeroSection } from "@/components/home/HeroSection";
import { AwardTicker } from "@/components/home/AwardTicker";
import { PremierAwardsSection } from "@/components/home/PremierAwardsSection";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { FounderQuote } from "@/components/home/FounderQuote";

export default function HomePage() {
  const site = contentRepository.getSite();
  const awards = awardRepository.getFeatured();
  const collections = collectionRepository.getAll();
  const steps = contentRepository.getProcessSteps();

  return (
    <>
      <HeroSection
        content={site.hero}
        established={site.brand.established}
      />
      <AwardTicker names={awardRepository.getTickerNames()} />
      <PremierAwardsSection awards={awards} collections={collections} />
      <ProcessStrip steps={steps} />
      <FounderQuote quote={site.quote} />
    </>
  );
}
