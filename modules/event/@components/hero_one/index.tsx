import Link from "next/link";

const EventHeroOne = () => {
  return (
    <section>
      <div className="h-[350px] lg:h-[450px] relative bg-center bg-no-repeat bg-cover bg-[url('/images/events/events.webp')] ">
        <div
          className="overlay w-full h-full absolute left-0 top-0 z-1"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0, 47, 91, 0.9), rgba(0, 47, 91, 0.9))",
          }}
        ></div>
        <div className="container">
          <div className="h-[350px] lg:h-[450px] text-white relative z-10 grid place-items-center">
            <div>
              <h1 className="mb-3 text-white text-center">
                Study International Events
              </h1>
              <div className="flex justify-center gap-2 text-center">
                <Link href="/">Home</Link> / <span>Events</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHeroOne;
