import { HPSectionStart } from './HPSectionStart';
import { VerticalSlidingItems } from './VerticalSlidingItems';

const features = [
  {
    step: 'Scaffolder',
    content:
      'Introduce Sheriff in your project with a single command. No more manual setup. A simple wizard will help you kickstart the perfect configuration for your needs. Monorepo compatible.',
  },
  {
    step: 'Config',
    content:
      "From here on, you can enable new rules on-top of Sheriff or disable any existing rules that don't fit your vision.",
  },
  {
    step: 'Doctor',
    content:
      'Keep the Sheriff options in check as time goes by and the project grows. Plug it into your CI pipeline and forget about it.',
  },
];

export const EcosystemSection = () => {
  return (
    <section className="py-20">
      <HPSectionStart
        title="Not just a config"
        description="Just a config if you want. A whole ecosystem if you need it."
        buttonText="Enter the ecosystem"
        buttonLink="/docs/cli-usage/get-started"
      />
      <VerticalSlidingItems features={features} />
    </section>
  );
};
