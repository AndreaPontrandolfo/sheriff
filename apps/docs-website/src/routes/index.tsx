import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { createFileRoute } from '@tanstack/react-router';
import { ComparisonsSection } from '@/components/ComparisonsSection';
import { EcosystemSection } from '@/components/EcosystemSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HeroSection } from '@/components/HeroSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { JoinUsSection } from '@/components/JoinUsSection';
import { StatsSection } from '@/components/StatsSection';
import { baseOptions } from '@/lib/layout.shared';

function HomePage() {
  // bg-background and text-foreground were added here because of shadcn compatibility. Reference: https://github.com/fuma-nama/fumadocs-shadcn?tab=readme-ov-file#with-shadcn-ui
  return (
    <HomeLayout className="bg-background text-foreground" {...baseOptions()}>
      <div className="bg-background text-foreground">
        <div className="mx-auto max-w-4xl px-2">
          <HeroSection />
          <FeaturesSection />
          <IntegrationsSection />
          <EcosystemSection />
          <ComparisonsSection />
          <StatsSection />
          <JoinUsSection />
        </div>
      </div>
    </HomeLayout>
  );
}

export const Route = createFileRoute('/')({
  component: HomePage,
  ssr: false,
});
