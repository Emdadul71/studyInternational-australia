import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
// import uniData from "./../../../../fakedata/uni-logo.json";
const unidata = [
  {
    id: 1,
    imgsrc: "/images/country/malaysia/curtin-university.png",
  },
  {
    id: 1,
    imgsrc: "/images/country/malaysia/mahsa-university.png",
  },
  {
    id: 1,
    imgsrc: "/images/country/malaysia/kdu-university-college.png",
  },
  {
    id: 1,
    imgsrc:
      "/images/country/malaysia/asia-pacific-university-of-technology-innovation.png",
  },
  {
    id: 1,
    imgsrc: "/images/country/malaysia/segi-university.png",
  },
  {
    id: 1,
    imgsrc: "/images/country/malaysia/university-of-cyberjaya.png",
  },
  {
    id: 1,
    imgsrc: "/images/country/malaysia/ucsi-university.png",
  },
];
const MalaysiaPartners = () => {
  return (
    <section>
      <div className="container">
        <h3 className="text-center mb-[30px]">Malaysia Partners</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-5 place-items-center">
          {unidata?.map((item: any, i: any) => {
            return (
              <Link
                href="#"
                className="w-[160px] md:w-[186px] lg:w-[144px] h-[60px] border p-[10px]"
                key={i}
              >
                <Image
                  src={staticAsset(item.imgsrc)}
                  width={160}
                  height={60}
                  alt="Universities"
                  className="w-full h-full object-contain"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MalaysiaPartners;
