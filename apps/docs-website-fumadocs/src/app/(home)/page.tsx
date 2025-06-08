import { ComparisonsSection } from '@/components/ComparisonsSection';
import { EcosystemSection } from '@/components/EcosystemSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HeroSection } from '@/components/HeroSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { JoinUsSection } from '@/components/JoinUsSection';
import { StatsSection } from '@/components/StatsSection';

export default function HomePage() {
  // bg-background and text-foreground were added here because of shadcn compatibility. Reference: https://github.com/fuma-nama/fumadocs-shadcn?tab=readme-ov-file#with-shadcn-ui
  return (
    <main>
      <div className="bg-background text-foreground flex flex-1 flex-col justify-center">
        <div className="center mx-auto h-[85vh] max-w-4xl px-2 lg:h-[90vh]">
          <HeroSection />
          <FeaturesSection />
          <IntegrationsSection />
          <EcosystemSection />
          <ComparisonsSection />
          <StatsSection />
          <JoinUsSection />
        </div>
      </div>
    </main>
  );
}
