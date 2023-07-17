import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const dataImages = [
  { name: "person 1", src: "/images/misc/avatar-placeholder-colored.webp" },
  { name: "person 1", src: "/images/misc/avatar-placeholder-colored.webp" },
  { name: "person 1", src: "/images/misc/avatar-placeholder-colored.webp" },
  { name: "person 1", src: "/images/misc/avatar-placeholder-colored.webp" },
  { name: "person 1", src: "/images/misc/avatar-placeholder-colored.webp" },
];

interface propTypes {
  classes?: {
    root?: string;
  };
}

const ServiceHeroLanding = ({ classes }: propTypes) => {
  return (
    <section
      className={`py-10 lg:py-[100px] bg-bluelight mb-10 lg:mb-[80px] ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-5 lg:gap-[40px] items-center">
          <div>
            <h1 className="mb-5 lg:mb-10">
              Providing you the pathway to excellence
            </h1>
            <Link href="/counsellors" className="btn btn-secondary">
              Speak to an Expert
            </Link>
          </div>

          <div>
            <p className="mb-5 lg:mb-10">
              Allow us the opportunity to foster a harmonious transition from
              school to university with exceptional personalized overseas
              education counselling. Our Education Counsellors can get you on
              the right track towards an amazing career.
            </p>

            <ul className="flex mb-3 items-center">
              {dataImages?.map((item, i) => {
                return (
                  <li
                    key={i}
                    className={`w-[40px] h-[40px] rounded-full border-white border-2 ${
                      i !== 0 ? "ml-[-10px]" : ""
                    }`}
                  >
                    <Image
                      src={
                        item?.src || "/images/misc/avatar-placeholder-big.webp"
                      }
                      alt="Study International Logo"
                      width={50}
                      height={50}
                      blurDataURL="/images/misc/avatar-placeholder-big.webp"
                      placeholder="blur"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </li>
                );
              })}
            </ul>
            <div className="font-medium">66k+ Visa Approved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroLanding;
