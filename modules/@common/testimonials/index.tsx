import Slider from "react-slick";
import TestimonialCard from "../testimonial_card";
import { useGetTestimonialsQuery } from "@/appstore/testimonials/testimonials_api";
import Link from "next/link";

interface propTypes {
  classes?: any;
}
const data = [
  {
    id: 1,
    name: "Simran Kamboj",
    country: "Australia",
    imgSrc: "/images/misc/avatar-placeholder-big.webp",
    content:
      "I am so grateful  that I went to study international for my TR. They were very active and helpful throughout the process. I got my visa granted without any trouble. All thanks to study international for their great support.",
  },
  {
    id: 2,
    name: "Faizan Rafiq",
    country: "Australia",
    imgSrc: "/images/misc/avatar-placeholder-big.webp",
    content:
      "Great experience with the team and Specially Disha didi. I am really thankful to the team for guiding me and helping me to get my wife visa . I got my wife’s dependent subclass 485 within a month. Thanks 😊 😇Strongly recommend  !! …",
  },
  {
    id: 3,
    name: "Ali Ahmad Qureshi",
    country: "Australia",
    imgSrc: "/images/misc/avatar-placeholder-big.webp",
    content:
      "Had a very good counselling section with their agent which provided me with a detailed insight on the right college and course to choose for my future in Australia. I will easily recommend Study International to anyone looking for higher studies in Australia. Great service, friendly staff, would approach them again for any similar requirement's. Definitely prefer to all of my friends",
  },
  {
    id: 4,
    name: "Kamaljeet kaur",
    country: "Australia",
    imgSrc: "/images/misc/avatar-placeholder-big.webp",
    content:
      "I am really thank full to Amanpreet and narinder Singh they very hard working and honest staff who did their  job perfectly well I am really happy with services also, handled my all files very carefully  really appreciate their efforts  , supportive and excellent service.😊",
  },
];
const Testimonials = ({ classes }: propTypes) => {
  const limit = 10;
  const { data, isLoading } = useGetTestimonialsQuery<any>({ limit });

  const total = data?.totalCount;

  const length = data?.data?.length;

  const settings = {
    arrow: true,
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: length,
    slidesToScroll: 1,
    centerPadding: "100px",
    className: "invocation_slider",
    autoplay: true,
    speed: 15000,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: length,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: length,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <>
      {length > 0 ? (
        <section
          className={`pt-8 lg:pt-[70px] pb-2 lg:pb-[90px] bg-secondarylight overflow-hidden ${
            classes?.root ? classes?.root : ""
          }`}
        >
          <div className="px-5 mb-4">
            <h2 className="text-center">WHAT CLIENTS SAY ABOUT OUR WORK</h2>
          </div>
          <div>
            <Slider {...settings}>
              {data?.data?.map((item: any, i: any) => {
                return (
                  <TestimonialCard
                    key={i}
                    classes={{ root: "mr-3 lg:m-[15px] p-5 lg:p-[50px]" }}
                    data={item}
                  />
                );
              })}
            </Slider>
          </div>

          {total > limit && (
            <div className="flex justify-center">
              <Link href="/testimonials" className="btn btn-grey ">
                View All
              </Link>
            </div>
          )}
        </section>
      ) : null}
    </>
  );
};

export default Testimonials;
