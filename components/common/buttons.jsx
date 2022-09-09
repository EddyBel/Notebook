import { useEffect } from "react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { Burguer } from "./svg";

export function Button_Burguer({ onClick }) {
  return (
    <button
      className="p-2 flex justify-center items-center rounded-xl"
      onClick={onClick}
    >
      <Burguer />
    </button>
  );
}

export function Button_UP() {
  useEffect(() => {
    scrollInit();
    watchButtonInitScroll();
  }, []);

  const scrollInit = () => {
    const button = document.getElementById("button-scroll-init");

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  const watchButtonInitScroll = () => {
    const button = document.getElementById("button-scroll-init");

    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;

      if (scroll > 300) {
        button.style.opacity = 100;
        button.style.transform = "translateX(0%)";
        button.style.cursor = "pointer";
      } else {
        button.style.opacity = 0;
        button.style.transform = "translateX(100%)";
        button.style.cursor = "auto";
      }
    });
  };

  return (
    <button
      className="bg-indigo-400 p-1 rounded-full fixed right-10 bottom-8 hover:scale-110 duration-200"
      id="button-scroll-init"
    >
      <ChevronUpIcon width="40px" height="40px" color="#fefefe" />
    </button>
  );
}
