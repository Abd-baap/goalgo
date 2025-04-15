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
  <meta name="google-adsense-account" content="ca-pub-6836466532865002" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6836466532865002" crossorigin="anonymous"></script>

  <meta name="robots" content="index, follow" />
  <meta name="google-site-verification" content="MIDLOYFbs4SS5EOC6oQcQd2CU6R4U0gxy70ESi1oLew" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
</head>
    
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
