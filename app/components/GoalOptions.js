import Link from "next/link";

export default function GoalOptions() {
    return (
      <div className="function w-screen hover:shadow-lg shadow-sm p-2 my-8 flex py-3 flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold">Which Type Of Goal You Wanna Set:</h1>
        <div className="my-2 buttons gap-6 flex sm:flex-wrap sm:flex-row flex-col sm:gap-x-28 sm:gap-20 w-[70%] justify-center items-center">
          <Link className="sm:w-[35%] w-[100%]" href="/Fitness">
            <button className="text-gray-900 w-[100%] bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-3">
              Fitness
            </button>
          </Link>
          <Link className="sm:w-[35%] w-[100%]" href="/Finance">
            <button className="text-gray-900 w-[100%] bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-3">
              Finance
            </button>
          </Link>
          <Link className="sm:w-[35%] w-[100%]" href="/Education">
            <button className="text-gray-900 w-[100%] bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-3">
              Education
            </button>
          </Link>
          <Link className="sm:w-[35%] w-[100%]" href="/Sports">
            <button className="text-gray-900 w-[100%] bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-3">
              Sports
            </button>
          </Link>
        </div>
        <div className="otherbutton flex w-[100%] my-8 justify-center items-center">
          <Link className="w-[70%] sm:w-[40%]" href="/Confused">
            <button className="text-gray-900 w-[100%] bg-gradient-to-r from-teal-300 to-lime-300 hover:bg-gradient-to-l focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-3">
              Confused In Making Goal?
            </button>
          </Link>
        </div>
      </div>
    );
  }