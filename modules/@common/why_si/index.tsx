import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";

interface propTypes {
  classes?: object | any;
}

const data = [
  {
    title: "Located in 3 Countries",
    icon: "/images/icons/location-large.png",
    // link: "/contact-us",
  },
  {
    title: "End-to-End Application Support",
    icon: "/images/icons/end-to-end-service.png",
    // link: "/services",
  },
  {
    title: "750+ Partner Universities",
    icon: "/images/icons/university.png",
    // link: "/partners",
  },
  {
    title: "High Visa Success Rate",
    icon: "/images/icons/visa.png",
    // link: "/testimonials",
  },
];

export const WhySi = ({ classes }: propTypes) => {
  return (
    <section
      className={`bg-primary pt-8 lg:pt-[80px] ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] text-white items-center">
          <div>
            <h2 className="heading-one text-secondary">
              <span className="block text-3xl mb-1">Why</span>
              <span className="block">Study</span>
              <span className="block">International</span>
            </h2>
          </div>
          <div>
            <p className="mb-10">
              In the hands of experts with more than a decade’s experience in
              this field, Study International is truly passionate about helping
              our students access the best study abroad opportunity for them.
              With over 20,000 students successfully supported on this journey,
              we are keen to continue living up to our philosophy that every
              student deserves the right to a global higher education.
            </p>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
              {data?.map((item: any, i: any) => {
                return (
                  <li key={i}>
                    <Link
                      href={item?.link || "#"}
                      className="hover:text-inherit group"
                    >
                      <div className="group-hover:bg-white transition-all w-[120px] h-[120px] bg-secondary rounded-full mb-4 flex items-center justify-center mx-auto">
                        <Image
                          src={staticAsset(item?.icon)}
                          alt="Location"
                          width={70}
                          height={70}
                        />
                      </div>
                      <div className="text-lg font-bold text-center">
                        {item?.title}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySi;
