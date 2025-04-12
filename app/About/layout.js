
export const metadata = {
  title: "GoalGo - About Us",
  description: "Learn about GoalGo – a platform dedicated to helping people turn their dreams into reality through motivation, strategy, and actionable steps.",
  openGraph: {
    title: "GoalGo | Empowering You to Achieve Your Dreams",
    description: "Discover how GoalGo helps people achieve their goals and live with purpose. Learn more about our mission, vision, and the story behind our platform."
  },
  robots: "index, follow"
};

export default function AboutLayout({ children }) {
  return (
  <>
      {children}
    </>
  );
}
