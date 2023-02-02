import ReactDOM from "react-dom";

const Backdrop = ({ onClick }: any) => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-full h-screen bg-[#0000004f] z-10"
      onClick={onClick}
    ></div>,
    document.getElementById("backdrop")!
  );
};

export default Backdrop;
