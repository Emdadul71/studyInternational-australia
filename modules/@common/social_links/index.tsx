import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
interface propsTypes {
  isLayoutColumn?: boolean;
}

const dummyData = [
  {
    icon: <FiFacebook />,
    link: "https://www.facebook.com/SIBangladesh",
  },
  {
    icon: <FiInstagram />,
    link: "https://www.instagram.com/studyinternationalbangladesh/",
  },
  {
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/company/study-international-bangladesh/",
  },
  {
    icon: <FiYoutube />,
    link: "https://www.youtube.com/@StudyInternationalaustralia",
  },
];

const SocialLinks = ({ isLayoutColumn = false }: propsTypes) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <ul
          className={`flex items-center gap-3 ${
            isLayoutColumn ? "flex-col gap-0" : ""
          }`}
        >
          {dummyData?.map((item: any, i: any) => {
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
  );
};

export default SocialLinks;
