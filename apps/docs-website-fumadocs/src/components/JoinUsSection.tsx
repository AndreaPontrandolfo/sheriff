import { StargazerSection } from '@/components/StargazerSection';
import { HPSectionStart } from './HPSectionStart';

export function JoinUsSection() {
  return (
    <section className="py-20">
      <HPSectionStart title="Join the revolution" />
      <StargazerSection />
    </section>
  );
}
