import Image from "next/image";
import styles from "./map.module.scss";
import { htmlParse, staticAsset } from "@/helpers/utils";
import moment from "moment";

const EventMap = ({ locationRef, data }: any) => {
  return (
    <section>
      <div className="container" ref={locationRef}>
        <div className="grid grid-cols-1 lg:grid-cols-[410px_1fr] gap-8 lg:gap-[95px]">
          <div>
            <h3 className="mb-6">Get Direction to the Conference Hall</h3>
            <div className="mb-6">
              <ul className="flex flex-col gap-5">
                <li className="grid grid-cols-[24px_1fr] gap-5">
                  <Image
                    src={staticAsset("/images/icons/office-building.png")}
                    width={24}
                    height={24}
                    alt="location"
                  />
                  <span>{data?.address}</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] gap-5">
                  <Image
                    src={staticAsset("/images/icons/calender-outline.png")}
                    width={24}
                    height={24}
                    alt="location"
                  />
                  <span>{moment(data?.eventDate).format("MMM Do YYYY")}</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] gap-5">
                  <Image
                    src={staticAsset("/images/icons/clock-outline.png")}
                    width={24}
                    height={24}
                    alt="location"
                  />
                  <span>{moment(data?.eventDate).format("LT")}</span>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary">
              Get Direction
            </button>
          </div>
          {data?.googleMap && (
            <div className={styles.map_wrapper}>
              {htmlParse(data?.googleMap)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventMap;
