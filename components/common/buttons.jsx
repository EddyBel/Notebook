import { useEffect } from "react";
import { ArrowUP } from "./svg";

export function Button_Burguer({ onClick }) {
  useEffect(() => {
    const menu = document.querySelector(".MENU");
    const button = document.getElementById("button-burguer");

    button.addEventListener("click", () => {
      if (menu.classList[1] === "hidden") {
        menu.classList.remove("hidden");
        menu.classList.add("watch");
      }
    });
  }, []);
  return (
    <button className="button-burguer" id="button-burguer" onClick={onClick}>
      <div className="rect-burguer one"></div>
      <div className="rect-burguer two"></div>
      <div className="rect-burguer tree"></div>
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
    <button className="button-up" id="button-scroll-init">
      <ArrowUP classN="arrow-up" />
    </button>
  );
}
