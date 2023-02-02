import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import { Backdrop } from "./index";

const ModalOverlay = (props: any) => {
  const content = (
    <div
      className="fixed bg-white rounded-lg shadow-sm z-10 flex gap-3 items-start overflow-hidden p-2 w-11/12 h-max left-4 top-32 flex-col md:flex-row md:p-4 md:w-5/6 md:h-[400px] md:left-16 md:top-32 lg:w-4/6 lg:h-[470px] lg:left-60 lg:top-20"
      ref={props.nodeRef}
    >
      <img
        className="w-full rounded-xl object-cover md:w-2/4"
        src={props.post.photo}
        alt={props.post.prompt}
      />
      <div className="flex flex-col gap-3 m-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
            {props.post.name?.charAt(0)}
          </div>
          <p className="text-black text-sm">{props.post.name}</p>
        </div>
        <p className="text-black text-md overflow-y-auto prompt">
          <span className="font-bold">Prompt: </span>
          {props.post.prompt}
        </p>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal")!);
};

const Modal = (props: any) => {
  const nodeRef = useRef(null);

  return (
    <>
      {props.show && <Backdrop onClick={props.handleModal} />}
      <CSSTransition
        in={props.show}
        nodeRef={nodeRef}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} nodeRef={nodeRef} />
      </CSSTransition>
    </>
  );
};

export default Modal;
