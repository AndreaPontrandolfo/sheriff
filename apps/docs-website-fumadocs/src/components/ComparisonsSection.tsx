import React from 'react';
import { HPSectionStart } from './HPSectionStart';
import ComparisonTableHP from './ComparisonTableHP';

export const ComparisonsSection = () => {
  return (
    <section className="relative py-20">
      <HPSectionStart
        title="wip"
        description="wip."
        buttonText="wip"
        buttonLink="/docs/prior-art"
      />
      <ComparisonTableHP />
    </section>
  );
};
