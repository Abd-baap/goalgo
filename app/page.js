import HeroSection from './components/HeroSection';
import GoalOptions from './components/GoalOptions';
import ContributionSection from './components/ContributionSection';
import Goal from './components/Goal';

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <div className="ehat is aws256 gap-4 flex flex-col justify-center items-center my-8 p-8 shadow-sm hover:shadow-xl w-[100%] text-xl">
          <span className="font-bold text-2xl text-center">
            The Psychology Behind Setting Goals
          </span>
          <span className="w-[100%]">
            Setting goals is more than just writing down what we want to achieve — it's deeply rooted in psychology. Goals give our actions purpose, helping our brains stay motivated and focused. When we set a specific goal, our mind treats it like a mission, creating a sense of urgency and direction. Studies show that people who write down their goals are significantly more likely to succeed because it activates parts of the brain linked to focus and memory. Goals also trigger the release of dopamine, a "feel-good" chemical, every time we make progress, which keeps us motivated to continue. In short, setting goals isn’t just helpful — it’s how our brains are wired to turn dreams into reality.
          </span>
        </div>
        <GoalOptions />
        <ContributionSection />
      </main>
    </div>
  );
}
