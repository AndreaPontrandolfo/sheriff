import { StargazerSection } from '@/components/StargazerSection';
import { HPSectionStart } from './HPSectionStart';

export function JoinUsSection() {
  return (
    <section className="pt-20 md:pb-8">
      <HPSectionStart title="Join the revolution" />
      <StargazerSection />
    </section>
  );
}
