import { htmlParse, staticAsset } from "@/helpers/utils";
import LeadForm from "@/modules/@common/lead_form_section";
import SocialLinks from "@/modules/@common/social_links";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";

const TeamDetail = ({ teamDetail }: any) => {
  const icons = [
    {
      icon: <FiFacebook />,
      link: teamDetail?.socialLink?.facebook,
    },
    {
      icon: <FiInstagram />,
      link: teamDetail?.socialLink?.instagram,
    },
    {
      icon: <FiLinkedin />,
      link: teamDetail?.socialLink?.linkedin,
    },
    {
      icon: <FiYoutube />,
      link: teamDetail?.socialLink?.youtube,
    },
  ];

  return (
    <>
      <section className="bg-bluelight py-8 lg:py-[120px]">
        <div className="container">
          <h1 className=" mb-[15px]">{teamDetail?.name}</h1>
          <div className="flex items-center gap-[15px]">
            {teamDetail?.level?.name && (
              <>
                <div className="w-[4px] h-[24px] bg-secondary"></div>
                <p className="m-0 font-medium">{teamDetail?.level?.name}</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="pt-[40px]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-[30px]">
            <div>
              <div className="flex flex-col md:flex-row lg:flex-row items-start gap-[30px] mb-[30px]">
                <div className="w-full h-[363px]">
                  <Image
                    src={teamDetail?.profileImage}
                    width={330}
                    height={363}
                    alt={teamDetail?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="mb-[15px]">Education</h5>
                  <div className="from_texteditor_wrapper">
                    {htmlParse(teamDetail?.education)}
                  </div>
                </div>
              </div>
              <div>{htmlParse(teamDetail?.description)}</div>
              <div className="flex flex-col  lg:flex-row items-start lg:items-end gap-5 lg:gap-[115px] px-5 lg:px-[50px] py-5 lg:py-[40px] bg-primary rounded-[8px]">
                <div>
                  <h5 className="text-white text-[26px] font-bold mb-[28px]">
                    Contact Details
                  </h5>
                  <div className="flex flex-col gap-[10px]">
                    {teamDetail?.mobile && (
                      <div className="flex items-start gap-[10px]">
                        <BsTelephoneFill className="text-secondary shrink-0	text-lg" />
                        <p className="mb-0 text-white">{teamDetail?.mobile}</p>
                      </div>
                    )}
                    {teamDetail?.email && (
                      <div className="flex items-start gap-[10px]">
                        <HiEnvelope className="text-secondary shrink-0 text-xl" />
                        <p className="mb-0 text-white">{teamDetail?.email}</p>
                      </div>
                    )}
                    {teamDetail?.location && (
                      <div className="flex items-start gap-[10px]">
                        <HiLocationMarker className="text-secondary shrink-0 text-xl" />
                        <p className="mb-0 text-white s">
                          {teamDetail?.location}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-white">
                  <p className="whitespace-nowrap text-white ps-2 text-start mb-[10px]">
                    Social Profiles
                  </p>
                  <ul className={`flex items-center gap-3`}>
                    {icons?.map((item: any, i: any) => {
                      return (
                        <li key={i}>
                          <a
                            target="_blank"
                            className="block px-1 text-lg py-2 hover:text-[#ffffff]"
                            href={item?.link}
                            rel="nofollow"
                          >
                            {item?.icon}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <LeadForm isSmall />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetail;
