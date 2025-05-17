import { HPSectionStart } from './HPSectionStart';
import { VerticalSlidingItems } from './VerticalSlidingItems';

export const EcosystemSection = () => {
  return (
    <section className="py-20">
      <HPSectionStart
        title="Not just a config"
        description="Just a config if you want. A whole ecosystem if you need it."
        buttonText="Enter the ecosystem"
        buttonLink="/docs/cli-usage/get-started"
      />
      <VerticalSlidingItems />
    </section>
  );
};
