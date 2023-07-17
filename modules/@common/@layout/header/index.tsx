import Image from "next/image";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import styles from "./header.module.scss";

import { useState, Fragment, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Drawer from "../../drawer";
import { loaderProp, staticAsset } from "@/helpers/utils";

import navData from "@/helpers/data/nav.json";
import dataBurgerMenu from "@/helpers/data/burger-nav.json";

export const Header = () => {
  const [animationParent] = useAutoAnimate();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <header className={`top-0 z-[1000] sticky bg-white py-3 lg:py-0`}>
        <div className="max-w-[1450px] mx-auto px-5 flex items-center justify-between">
          <Link href="/">
            <Image
              src={staticAsset("/images/misc/logo.png")}
              alt="Study International Logo"
              width={155}
              height={40}
              blurDataURL={staticAsset("/images/misc/logo.png")}
              placeholder="blur"
              loader={loaderProp}
            />
          </Link>

          {navData && navData?.length > 0 && (
            <nav className="hidden lg:block font-medium">
              <ul className="flex items-center">
                {navData?.map((item: any, index: any) => {
                  if (item?.isHidden) {
                    return null;
                  } else
                    return (
                      <li
                        key={index}
                        className={`relative text-black border-b-[3px] border-transparent hover:border-b-[3px] hover:border-secondary ${styles.has_submenu}`}
                      >
                        {item?.link ? (
                          <Link
                            href={item.link}
                            className="flex items-center gap-2  cursor-pointer px-2 py-6 hover:text-inherit "
                          >
                            <span className="2lg:text-[15px] xl:text-base">
                              {item?.title}
                            </span>
                            {item?.children && <FiChevronDown />}
                          </Link>
                        ) : (
                          <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit">
                            <span className="2lg:text-[15px] xl:text-base">
                              {item?.title}
                            </span>
                            {item?.children && <FiChevronDown />}
                          </div>
                        )}
                        {item?.children && item?.children?.length > 0 && (
                          <ul
                            className={`absolute bg-white p-4 rounded-lg shadow-xl ${
                              styles.submenu
                            } ${
                              item?.isColTwo
                                ? "grid grid-cols-2 gap-x-[40px]"
                                : ""
                            }`}
                          >
                            {item?.children?.map((cldn: any, i: any) => {
                              return (
                                <li key={i} className="overflow-hidden">
                                  <Link
                                    href={cldn?.link}
                                    className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition delay-200"
                                  >
                                    <span className="w-5 h-[2px] bg-black"></span>
                                    <span>{cldn?.title}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                })}
              </ul>
            </nav>
          )}

          <div className="flex items-center gap-5">
            <Link
              href="/counsellors"
              className="btn btn-secondary p-[4px] md:px-3 lg:px-3 md:py-2 lg:py-2 text-xs order-1 lg:order-2"
            >
              Speak to an Expert
            </Link>
            <div className="block lg:hidden order-2">
              <button className={`text-2xl mt-1`} onClick={() => setOpen(true)}>
                <CgMenu />
              </button>
            </div>

            <div
              className={`relative hidden lg:block  ${styles.burger_wrapper}`}
            >
              <button className={`text-2xl mt-2`}>
                <CgMenu />
              </button>
              {dataBurgerMenu && dataBurgerMenu?.length > 0 && (
                <ul
                  className={`absolute bg-white p-4 rounded-lg shadow-xl min-w-max ${styles.burger_menu}`}
                >
                  {dataBurgerMenu?.map((item, i) => {
                    return (
                      <li className="overflow-hidden" key={i}>
                        <Link
                          href={item?.link || "#"}
                          className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition delay-200"
                        >
                          <span className="w-5 h-[2px] bg-black"></span>
                          <span>{item?.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>

      <Drawer show={open} onClose={() => setOpen(false)}>
        <div className="h-[100vh] overflow-auto">
          <div className="border-b py-[18px] px-5 h-[60px] flex items-center justify-between">
            <Link href="/">
              <Image
                src={staticAsset("/images/misc/logo.png")}
                alt="Study International Logo"
                width={155}
                height={40}
                blurDataURL={staticAsset("/images/misc/logo.png")}
                placeholder="blur"
              />
            </Link>
            <AiOutlineClose
              onClick={() => setOpen(false)}
              size={20}
              className="text-black"
            />
          </div>
          {/* body */}
          <div
            className="flex flex-col overflow-auto"
            style={{ height: "calc(100vh - 60px" }}
          >
            <div className="p-5">
              <>
                {navData && navData?.length > 0 ? (
                  <div className="flex flex-col">
                    {navData?.map((item: any, i: any) => {
                      return (
                        <Fragment key={i}>
                          <div key={i} className="relative">
                            {item?.children && item?.children?.length > 0 ? (
                              <>
                                {item?.isHidden ? null : (
                                  <div
                                    onClick={() => toggle(i)}
                                    className="flex items-center justify-between w-full py-2 z-10 gap-1"
                                  >
                                    <span className="text-left">
                                      {item.title}
                                    </span>
                                    {item?.children && (
                                      <>
                                        {selected == i ? (
                                          <FiChevronUp className="shrink-0" />
                                        ) : (
                                          <FiChevronDown className="shrink-0" />
                                        )}
                                      </>
                                    )}
                                  </div>
                                )}
                              </>
                            ) : (
                              <>
                                <Link
                                  href={item?.link || "#"}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center justify-between w-full py-2 z-10 gap-1"
                                >
                                  <span className="text-left">
                                    {item.title}
                                  </span>
                                </Link>
                              </>
                            )}

                            <div ref={animationParent}>
                              {selected == i && (
                                <ul>
                                  {item.children?.map((cldn: any, i: any) => {
                                    return (
                                      <li
                                        key={i}
                                        onClick={() => setOpen(false)}
                                      >
                                        <Link
                                          href={cldn?.link || "#"}
                                          className="flex p-2"
                                        >
                                          {cldn?.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}

                    {dataBurgerMenu && dataBurgerMenu?.length > 0 && (
                      <ul>
                        {dataBurgerMenu?.map((mnu, i) => {
                          return (
                            <li key={i} onClick={() => setOpen(false)}>
                              <Link href={mnu?.link} className="flex py-2">
                                {mnu?.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ) : null}
              </>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
