import { useEffect, useRef } from "react";

export const ModalPage = ({ isOpen, toggle }) => {
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} className="bg-secondaryColor">
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ModalBody>
        <ModalFooter>
          <button
            onClick={toggle}
            className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-red-500"
          >
            Close
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

/*Logic*/

const style = {
  body: `flex-shrink flex-grow p-4  `,
  headerTitle: `text-2xl md:text-3xl font-light`,
  content: `relative flex flex-col bg-lightColor pointer-events-auto h-auto`,
  header: `items-start justify-between p-4 border-b border-gray-300`,
  container: `fixed top-[12rem] overflow-y-auto left-0 z-40 w-full h-full m-0`,
  overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-darkColor opacity-70`,
  footer: `flex flex-wrap items-center justify-end p-3 border-t border-gray-300`,
  orientation: `mt-12 mx-8 pb-6 md:m-auto md:w-6/12 lg:w-4/12 md:pt-12 focus:outline-none`,
};

function Modal({ children, isOpen, toggle }) {
  const ref = useRef();

  // close modal when you click on "ESC" key
  useEffect(() => {
    const handleEscape = (event) => {
      if (!isOpen) return;
      if (event.key === "Escape") {
        toggle(false);
      }
    };
    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isOpen, toggle]);

  // hide scrollbar and prevent body from moving when modal is open
  //put focus on modal dialogue
  useEffect(() => {
    if (!isOpen) return;

    ref.current?.focus();

    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    html.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      html.style.overflow = "";
      html.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div className={style.overlay} />
          <div className={style.container}>
            <div
              aria-modal={true}
              className={style.orientation}
              ref={ref}
              role="dialogue"
              tabIndex={-1}
            >
              <div className={style.content}>{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function ModalHeader({ children }) {
  return (
    <div className={style.header}>
      <h4 className={style.headerTitle}>{children}</h4>
    </div>
  );
}

function ModalBody({ children }) {
  return <div className={style.body}>{children}</div>;
}

function ModalFooter({ children }) {
  return <div className={style.footer}>{children}</div>;
}
