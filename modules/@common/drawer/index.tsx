"use client";

import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";

const Drawer = (props: any) => {
  //   const closeOnEscapeKeyDown = (e: { charCode: any; keyCode: any }) => {
  //     if ((e.charCode || e.keyCode) === 27) {
  //       props.onClose();
  //     }
  //   };

  //   useEffect(() => {
  //     document.body.addEventListener("keydown", closeOnEscapeKeyDown);
  //     return function cleanup() {
  //       document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  //     };
  //   }, []);

  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="drawer" onClick={props.onClose}>
        <div
          className="drawer-content w-full max-w-[370px]"
          onClick={(e) => e.stopPropagation()}
        >
          {props.children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Drawer;
