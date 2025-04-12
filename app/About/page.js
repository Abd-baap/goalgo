
import Link from "next/link";

export default function About() {
  return (
    <div>

      {/* Hero Section */}
      <div className="w-screen flex flex-col p-2 h-[100%] justify-center items-center">
        <div className="heading w-[100%] p-8 py-20 bg-cyan-600 text-white text-center gap-2 flex flex-col justify-center items-center shadow-sm hover:shadow-lg">
          <h1 className="text-5xl font-bold">About GoalGo</h1>
          <h1 className="text-2xl font-bold">Your Journey To Success Starts Here</h1>
        </div>

        {/* Mission */}
        <div className="mission my-8 shadow-sm hover:shadow-lg p-10 w-[100%] justify-center items-center flex flex-col gap-5">
          <div className="justify-start flex flex-col gap-5 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-600">Our Mission:</h2>
            <p className="text-xl w-[90%] lg:w-[70%]">
              At GoalGo, our mission is to empower individuals to set, track,
              and achieve their goals, transforming aspirations into
              accomplishments.
            </p>
          </div>

          {/* About Card */}
          <div className="card sm:w-[50%] w-[90%] h-[100%] gap-5 rounded-sm bg-cyan-600 shadow-sm hover:shadow-lg text-white flex flex-col justify-center items-center sm:p-7 text-center p-4 my-8">
            <h1 className="text-4xl font-bold">About GoalGo</h1>
            <p className="w-[90%] lg:w-[70%] text-xl">
              Welcome to GoalGo, your ultimate partner in turning dreams into
              actionable goals and achieving success step by step.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="text flex flex-col w-[100%]">
        <div className="projects gap-4 my-8  p-8 shadow-sm hover:shadow-xl w-[100%]">
    <span className="head text-3xl font-bold text-blue-700">Beyond GoalGo: Our Digital Ecosystem</span>
    <div className="project flex text-xl">
        <Link href="https://bitaegiris.vercel.app"><span className="font-bold text-blue-700">BitAegiris</span>
        <span> – A platform designed to help people achieve their dreams and goals through planning, motivation, and resources. <br></br>By combining security (GoalGo) and personal growth (Goalgo), we aim to create a safe and productive digital experience for everyone. 
        </span></Link>
    </div>
          <div className="vision flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-600">Our Vision:</h2>
            <p className="text-xl w-[90%] lg:w-[70%]">
              We aim to create a world where everyone has access to the tools
              and motivation they need to reach their full potential, no matter
              how big or small their goals are.
            </p>
          </div>

          {/* Core Values */}
          <div className="core-values flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-600">Our Core Values:</h2>
            <ul className="gap-3 text-xl justify-start flex w-[90%] lg:w-[70%] flex-col list-disc">
              <li>
                <span className="font-bold">Empowerment:</span> Helping users
                take charge of their goals with confidence.
              </li>
              <li>
                <span className="font-bold">Accountability:</span> Encouraging
                consistency and progress through accountable steps.
              </li>
              <li>
                <span className="font-bold">Community:</span> Building a
                supportive environment for collaboration and encouragement.
              </li>
              <li>
                <span className="font-bold">Innovation:</span> Continually
                improving our platform with cutting-edge tools and techniques.
              </li>
            </ul>
          </div>

          {/* Meet the Founder */}
          <div className="meet-the-maker flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-600">Meet the Founder:</h2>
            <ul className="gap-3 text-xl">
              <li className="font-bold">
                Abhigya Ajmani -{" "}
                <span className="text-xl font-medium">
                  A beginner web developer dedicated to building user-friendly
                  tools.
                </span>
              </li>
              <li>
                <span className="font-bold">Age:</span> 14 Years
              </li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="how-it-works flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-600">How It Works:</h2>
            <ul className="gap-3 text-xl">
              <li className="font-bold">
                Set Your Goals:{" "}
                <span className="text-xl font-medium">
                  Define clear, measurable goals that matter to you.
                </span>
              </li>
              <li className="font-bold">
                Track Your Progress:{" "}
                <span className="text-xl font-medium">
                  Use our intuitive tools to monitor and stay on track.
                </span>
              </li>
              <li className="font-bold">
                Achieve Success:{" "}
                <span className="text-xl font-medium">
                  Celebrate your accomplishments along the way.
                </span>
              </li>
            </ul>
          </div>

          {/* FAQs */}
          <div className="faq flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-600">
              Frequently Asked Questions:
            </h2>
            <ul className="gap-5 text-xl flex flex-col list-decimal">
              <li className="font-bold">
                What is GoalGo?
                <span className="text-xl font-medium">
                  {" "}
                  ⇒ GoalGo is a platform designed to help you set, track, and
                  achieve your personal and professional goals with ease.
                </span>
              </li>
              <li className="font-bold">
                Who is GoalGo for?
                <span className="text-xl font-medium">
                  {" "}
                  ⇒ GoalGo is for anyone who wants to stay organized, motivated,
                  and productive—whether you're a student, professional, or
                  entrepreneur.
                </span>
              </li>
              <li className="font-bold">
                Can I use GoalGo on multiple devices?
                <span className="text-xl font-medium">
                  {" "}
                  ⇒ Yes, GoalGo is available on desktop and mobile, so you can
                  access your goals and progress anytime, anywhere.
                </span>
              </li>
              <li className="font-bold">
                How can GoalGo help me stay motivated?
                <span className="text-xl font-medium">
                  {" "}
                  ⇒ With features like progress tracking and motivational
                  insights, GoalGo helps you stay focused and celebrate small
                  wins along the way.
                </span>
              </li>
              <li className="font-bold">
                Who do I contact for support?
                <span className="text-xl font-medium">
                  {" "}
                  ⇒ For any questions or support, feel free to reach out to us
                  at support@abhigya.abd.com.
                </span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col gap-5 p-12 justify-center items-center shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-lime-600">
              Ready to crush your goals?
            </h2>
            <Link href="/">
              <button
                type="button"
                className="text-gray-900 w-[100%] bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-lg px-5 py-3 text-center me-2 mb-2"
              >
                Start Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
</div>
    </div>
  );
}