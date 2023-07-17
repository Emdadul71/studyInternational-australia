import Link from "next/link";
import React from "react";

const MigrationHero = () => {
  return (
    <section>
      <div className="h-[350px] lg:h-[560px] relative bg-center bg-no-repeat bg-cover bg-[url('/temp/migration-hero.webp')] ">
        <div
          className="overlay w-full h-full absolute left-0 top-0 z-1"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0, 47, 91, 0) 0%, #002F5B 100%)",
          }}
        ></div>
        <div className="max-w-[930px] w-full px-5 mx-auto h-[560px] text-white relative z-10 ">
          <div className="flex flex-col items-center justify-center max-w-full h-full p-4 lg:p-0 text-center lg:text-left ">
            <h1 className="mb-10 lg:mb-3 text-white">
              Australia Immigration Services
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationHero;
