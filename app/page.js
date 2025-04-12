
import HeroSection from './components/HeroSection';
import GoalOptions from './components/GoalOptions';
import ContributionSection from './components/ContributionSection';
import Goal from './components/goal';

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <GoalOptions />
        <ContributionSection />
      </main>

    </div>
  );
}