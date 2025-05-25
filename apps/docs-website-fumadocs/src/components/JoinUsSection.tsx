import { StargazerSection } from '@/components/StargazerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HPSectionStart } from './HPSectionStart';

export const JoinUsSection = () => {
  return (
    <section className="py-20">
      <HPSectionStart title="Join the revolution" />
      <StargazerSection />
    </section>
  );
};
