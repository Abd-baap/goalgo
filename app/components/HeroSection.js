import Image from "next/image";

export default function HeroSection() {
    return (
      <div className="herosection my-8 shadow-sm flex flex-col-reverse sm:flex-row gap-1 gap-x-3 py-5 sm:gap-0 justify-evenly items-center px-4 hover:shadow-lg">
        <div className="text w-[338px] flex flex-col gap-2 px-2">
          <h1 className="text-2xl sm:text-3xl font-bold">Failing In Achieving Your Goals?</h1>
          <p>Achieve Your Dreams With Us, Work Hard, Work Together. We Will Help You In Achieving Your Goals</p>
        </div>
        <div className="Image">
          <Image
            alt="Herosection"
            loading="lazy"
            width="335"
            height="335"
            className="rounded-lg w-[335px] sm:w-[250px] lg:w-[400px] lg:h-[400px]"
            src="/creamherosection.svg"
          />
        </div>
      </div>
    );
  }