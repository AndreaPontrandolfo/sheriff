import { ComparisonTableHP } from './ComparisonTableHP';
import { HPSectionStart } from './HPSectionStart';

export function ComparisonsSection() {
  return (
    <section className="relative py-20">
      <HPSectionStart
        title="Comparisons"
        description="Sheriff strive to offer the best possible combination of features and ease of use among every other option in the wild."
        buttonText="Learn why Sheriff came to be"
        buttonLink="/docs/prior-art"
      />
      <div className="mx-auto max-w-2xl">
        <ComparisonTableHP />
      </div>
    </section>
  );
}
