import Link from "next/link";

export const HomeHeroOne = () => {
  return (
    <section>
      <div className="min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-75px)] relative bg-center bg-no-repeat bg-cover bg-[url('/images/home/hero-bg.webp')] ">
        <div
          className="overlay w-full h-full absolute left-0 top-0 z-1"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0, 47, 91, 0) 0%, #002F5B 100%)",
          }}
        ></div>
        <div className="max-w-[1020px] px-5 mx-auto min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-75px)] text-white relative z-10 ">
          <div className="w-full absolute left-0 bottom-[10vh]">
            <div className="max-w-full lg:max-w-[700px] p-4 lg:p-0 text-center lg:text-left">
              <h1 className="mb-3 text-white">
                Your Trusted Solution For Education and Migration in Australia
              </h1>
              <div className="lg:max-w-[600px] mb-5">
                With almost two decades of experience and over 20,000
                international student success stories.
              </div>
              <Link
                href="/counsellors"
                className="btn btn-secondary text-primary hover:bg-[#e6ce1e] hover:text-primary hover:border hover:border-[#e6ce1e]"
              >
                Speak to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroOne;
