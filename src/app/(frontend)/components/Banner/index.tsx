import Image from "next/image";

const Banner = () => {
  return (
    <div className="mx-auto my-10 px-6 lg:px-8 sm:py-10 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0">
          <div className="py-3 text-center lg:text-start">
            <button className="bg-lightblue hover:bg-black hover:shadow-xl px-6 py-1 rounded-3xl font-bold text-blue text-sm md:text-lg hover:text-white tracking-wider">
              DESIGN & DEVELOPMENT AGENCY
            </button>
          </div>
          <div className="py-3 text-center lg:text-start">
            <h1 className="font-bold text-6xl text-darkpurple lg:text-80xl">
              Dedicated to <br /> bring your <br /> ideas to life.
            </h1>
          </div>
          <div className="my-7 text-center lg:text-start">
            <button className="bg-blue hover:bg-hoblue hover:shadow-xl px-6 md:px-14 py-3 md:py-5 rounded-full font-semibold text-sm text-white md:text-xl">
              Get Started
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="lg:block hidden lg:-m-24 lg:pt-20">
          <Image
            src="/images/banner/banner.svg"
            alt="hero-image"
            width={800}
            height={642}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
