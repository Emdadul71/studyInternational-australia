import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import React from "react";

const OfficeAddress = () => {
  return (
    <section className="bg-secondarylight">
      <div className="container">
        <div className="max-w-[870px] mx-auto pt-[40px] lg:pt-[80px]">
          <h3 className="text-center mb-[40px]">Our Office Address</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[30px]">
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  src={staticAsset("/images/contact/paramatta.png")}
                  width={50}
                  height={50}
                  alt="bangladesh office"
                />
              </div>
              <p className="m-0 text-lg text-black mt-[30px] whitespace-nowrap">
                <span className="font-bold">Sydney Office </span>
                (Paramatta)
              </p>
              <p className="m-0 text-center mt-3">
                7/12-20 Main Street Blacktown NSW 2148
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  src={staticAsset("/images/contact/blacktown.png")}
                  width={50}
                  height={50}
                  alt="bangladesh office"
                />
              </div>
              <p className="m-0 text-lg  text-black mt-[30px]">
                <span className="font-bold">Sydney Office </span>(Blacktown)
              </p>
              <p className="m-0 text-center mt-3">
                Ground Floor, 146 Marsden Street Parramatta NSW 2150
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  src={staticAsset("/images/contact/bangladesh.png")}
                  width={50}
                  height={50}
                  alt="bangladesh office"
                />
              </div>
              <p className="m-0 text-lg font-bold text-black mt-[30px]">
                Bangladesh Office
              </p>
              <p className="m-0 text-center mt-3">
                Level 8, Hamlet Tower, 16 Kamal Ataturk Avenue, Banani, Dhaka
                1213, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeAddress;
