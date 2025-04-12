import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: "GoalGo - Achieve Your Dreams",
  description: "GoalGo helps you set, track, and achieve your goals. Transform your dreams into reality with tools, inspiration, and expert guidance.",
  openGraph: {
    title: "GoalGo - Home of Goal-Driven Success",
    description: "Plan smart. Work hard. Achieve big. GoalGo is where your dream journey begins.",
    url: "https://GoalGo.vercel.app",
    siteName: "GoalGo",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <meta name="google-site-verification" content="MIDLOYFbs4SS5EOC6oQcQd2CU6R4U0gxy70ESi1oLew" />
        </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
