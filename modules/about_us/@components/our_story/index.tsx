import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_810px] gap-[30px]">
          <h2 className="mt-8 heading-one ">
            <span className="text-2xl block">About Us</span>
            <span className="block">Our Story</span>
          </h2>
          <div className="mb-5">
            <p>
              Study International is an International Education and Migration
              consulting organization with excellent credentials that provides
              value-based services was founded in 2005. We are one of the
              leading international Student Recruitment & Solutions Company
              based in Sydney, Australia. Study International has the biggest
              network of offices in Australia – Sydney, Melbourne, Adelaide and
              Gold Coast – as well as offices in India, Malaysia & Indonesia.
            </p>

            <p>
              We represent more than 400 education providers including
              Universities, TAFEs and Schools across Australia, New Zealand, USA
              and Europe. Since its inception in 2005, SI has recruited more
              than 6,000 students to its partner institutions. We have been
              assisting international institutes in student recruitment, market
              research, institutional tie ups and exploring new business
              opportunities. Our aim is to maintain the market on a professional
              level with a view to a long-term partnership with the educational
              institutions. Our management teams are professionally qualified
              within their respective fields and have been instrumental in
              forming the basis for many vital affiliations, partnerships and
              strategic alliances. This has been significant in our global
              expansion and ongoing success at an international level.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-[279px_477px_366px] gap-6 items-center">
          <div className="w-full h-[420px]">
            <Image
              src={staticAsset("/images/about/our-story.png")}
              width={279}
              height={420}
              alt="story image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[628px]">
            <Image
              src={staticAsset("/images/about/our-story-center.png")}
              width={477}
              height={628}
              alt="story image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src={staticAsset("/images/about/our-story-right-top.png")}
              width={205}
              height={125}
              alt="story image"
              className="w-full h-full object-cover"
            />
            <Image
              src={staticAsset("/images/about/our-story-right.png")}
              width={366}
              height={296}
              alt="story image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_750px] gap-[20px] mt-20">
          <h3 className="mt-8 heading-two">
            <span className="block">Our </span>
            <span className="block">Mission</span>
            <span className="block">Vision &</span>
            <span className="block">Values</span>
          </h3>
          <div className="mb-5">
            <p>
              We believe that all students should have access to the best
              possible education, to courses that align with their futures, and
              spark the desire for inquiry.
            </p>
            <div>
              <h4>Our aim is to be:</h4>
              <ul className="list-disc pl-6">
                <li>Known for professional attitude towards doing business.</li>
                <li>Known for high quality outcomes.</li>
                <li>
                  Known for being one of the top companies within the industry.
                </li>
              </ul>
            </div>

            <p className="mt-4">
              Study International’s Mission Statement declares our purpose as a
              service providing and recruitment agency. Study International’s
              mission is to serve our clients to build and develop approach
              towards suitable and sustainable pathway in regards to their
              migration or education concerns; and to provide assistance in such
              regards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
