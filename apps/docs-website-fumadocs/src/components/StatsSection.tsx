import { AnimatedNumberInView } from './AnimatedNumberOnview';
import { HPSectionStart } from './HPSectionStart';

// TODO: most of these numbers could be inferred dynamically

export const StatsSection = () => {
  return (
    <section className="py-20">
      <HPSectionStart title="Sheriff in numbers" />
      <div className="mx-auto max-w-2xl space-y-8 px-6 md:max-w-5xl md:space-y-16">
        <div className="relative mx-auto grid max-w-4xl grid-cols-1 divide-y border *:p-6 sm:grid-cols-2 sm:divide-x sm:*:p-8 lg:grid-cols-3 lg:divide-y lg:*:p-12">
          <div className="flex flex-col justify-center space-y-3 text-center sm:text-left">
            <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <AnimatedNumberInView number={10} />
            </div>
            <p>Technologies</p>
          </div>
          <div className="flex flex-col justify-center space-y-2 text-center">
            <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <AnimatedNumberInView number={27} />
            </div>
            <p>Plugins</p>
          </div>
          <div className="flex flex-col justify-center space-y-2 text-center sm:text-right lg:text-right">
            <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
              +
              <AnimatedNumberInView
                number={1332}
                durationInMilliseconds={1500}
              />
            </div>
            <p>Rules</p>
          </div>
          <div className="flex flex-col justify-center space-y-2 text-center sm:text-left">
            <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
              +
              <AnimatedNumberInView
                number={155}
                durationInMilliseconds={1200}
              />
            </div>
            <p>Github stars</p>
          </div>
          <div className="flex flex-col justify-center space-y-2 text-center">
            <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
              +
              <AnimatedNumberInView number={70} durationInMilliseconds={2000} />
              K
            </div>
            <p>Monthly downloads</p>
          </div>
          <div className="flex flex-col justify-center space-y-2 text-center sm:text-right lg:text-right">
            <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
              +<AnimatedNumberInView number={10} />
            </div>
            <p>Contributors</p>
          </div>
        </div>
      </div>
    </section>
  );
};
