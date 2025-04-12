
import Link from "next/link";

export default function Support() {
  return (
    <div>

      {/* Hero Section */}
      <div className="w-screen flex flex-col h-[100%] justify-center items-center">
        <div className="heading w-[100%] shadow-sm hover:shadow-lg p-8 py-20 bg-cyan-600 text-white text-center gap-2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">GoalGo Support Page</h1>
        </div>

        {/* Welcome Card */}
        <div className="card my-8 p-10 shadow-sm hover:shadow-lg w-[100%] justify-center items-center flex flex-col gap-5">
          <div className="card sm:w-[50%] w-[90%] h-[100%] gap-5 rounded-sm bg-cyan-600 shadow-sm hover:shadow-lg text-white flex flex-col justify-center items-center sm:p-7 text-center p-4 my-8">
            <p className="w-[90%] lg:w-[70%] text-xl">
              Welcome to GoalGo Support Center! Here, we've got all the
              information you need to make the most of your experience with
              GoalGo. <br /> Let's help you achieve your Goals!
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="text flex flex-col w-[100%]">
          <div className="core-values shadow-sm hover:shadow-lg flex flex-col gap-5 p-12">
            <h2 className="text-3xl font-bold text-cyan-600">Features:</h2>
            <ul className="gap-3 text-xl justify-start flex w-[90%] lg:w-[70%] flex-col list-decimal">
              <li>
                <span className="font-bold">No Sign In Required:</span> Start
                using GoalGo instantly. No accounts, no passwords—just you and
                your goals.
              </li>
              <li>
                <span className="font-bold">Set One Goal at a Time:</span> Focus
                on what matters most. Write down a single goal and set a timer
                to complete it.
              </li>
              <li>
                <span className="font-bold">Motivational Quotes:</span> Stay
                inspired as motivational quotes refresh every minute to keep
                your energy high.
              </li>
              <li>
                <span className="font-bold">Track Your Progress:</span> When you
                finish your goal within the time, click the checkbox button to
                mark it as complete.
              </li>
              <li>
                <span className="font-bold">Instant Feedback:</span> We provide
                instant notifications whenever you fail, achieve, or delete a
                goal.
              </li>
            </ul>
          </div>

          {/* FAQs Section */}
          <div className="faq flex shadow-sm hover:shadow-lg flex-col gap-5 p-12">
            <h2 className="text-3xl font-bold text-cyan-600">
              Frequently Asked Questions:
            </h2>
            <ul className="gap-14 text-xl flex flex-col list-decimal">
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">
                How do I set my goal and timer?
                <span className="text-xl font-medium">
                  ⇒ Simply type your goal in the text box and set the timer
                  using the dropdown or input field provided.
                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">
                What happens if I don’t complete the goal on time?
                <span className="text-xl font-medium">
                  ⇒ If the timer runs out, you’ll receive a friendly toast
                  notification encouraging you to refocus and try again.
                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">
                Can I use GoalGo on mobile devices?
                <span className="text-xl font-medium">
                  ⇒ Yes! GoalGo is fully optimized for use on desktops, tablets,
                  and mobile devices.
                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">
                Why can I only focus on one goal at a time?
                <span className="text-xl font-medium">
                  ⇒ Focusing on one goal helps reduce overwhelm and improves
                  your chances of success.
                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">
                How often do the motivational quotes change?
                <span className="text-xl font-medium">
                  ⇒ A new motivational quote is displayed every minute to keep
                  you inspired throughout your session.
                </span>
              </li>
            </ul>
          </div>

          {/* Troubleshooting Section */}
          <div className="troubleshoot shadow-sm hover:shadow-lg flex flex-col gap-5 p-12">
            <h2 className="text-3xl font-bold text-cyan-600">Troubleshooting:</h2>
            <ul className="gap-14 text-xl flex flex-col list-decimal">
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">
                My toast notifications aren’t appearing.
                <span className="text-xl font-medium">
                  ⇒ Ensure your browser’s notifications are enabled.
                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">
                The timer doesn’t seem to work.
                <span className="text-xl font-medium">
                  ⇒ Try refreshing the page and setting the timer again. If the
                  issue persists, contact us using the form below.
                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">
                I accidentally closed my goal. Can I recover it?
                <span className="text-xl font-medium">
                  ⇒ Unfortunately, GoalGo doesn’t save your goals since it
                  doesn’t require a sign-in. Write it down before closing the
                  page!
                </span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col shadow-sm hover:shadow-lg gap-5 p-12 justify-center items-center">
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
  );
}