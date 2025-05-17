import { Pencil, Settings2, Sparkles } from 'lucide-react';
import { HPSectionTitle } from './HPSectionTitle';
import { HPSectionStart } from './HPSectionStart';

export const StatsSection = () => {
  return (
    <section className="py-20">
      <HPSectionStart title="Sheriff in numbers" />
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-center space-y-3 text-left">
            <div className="text-5xl font-bold">10</div>
            <p>Technologies</p>
          </div>
          <div className="flex flex-col justify-center space-y-2 text-center">
            <div className="text-5xl font-bold">27</div>
            <p>Plugins</p>
          </div>
          <div className="flex flex-col justify-center space-y-2 text-right">
            <div className="text-5xl font-bold">+1332</div>
            <p>Rules</p>
          </div>
          <div className="flex flex-col justify-center space-y-2 text-left">
            <div className="text-5xl font-bold">+155</div>
            <p>Github stars</p>
          </div>
          <div className="flex flex-col justify-center space-y-2 text-center">
            <div className="text-5xl font-bold">+70K</div>
            <p>Monthly downloads</p>
          </div>
          <div className="flex flex-col justify-center space-y-2 text-right">
            <div className="text-5xl font-bold">+10</div>
            <p>Contributors</p>
          </div>
        </div>
      </div>
    </section>
  );
};
