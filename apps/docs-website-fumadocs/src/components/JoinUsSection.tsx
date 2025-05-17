import { StargazerSection } from '@/components/StargazerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HPSectionStart } from './HPSectionStart';

export const JoinUsSection = () => {
  return (
    <section className="py-20">
      <div className="animate-in mt-10 text-center sm:mt-16">
        <HPSectionStart title="Join the revolution" />
        <StargazerSection />
      </div>
    </section>
  );
};
