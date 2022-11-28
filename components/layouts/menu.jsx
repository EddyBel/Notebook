import { useEffect } from "react";
import Link from "next/link";
import { MenuOptions } from "../../configs/index";
import front from "../../assets/img/front.png";

export function Menu({ children }) {
  useEffect(() => {
    const buttonBurguer = document.getElementById("button-burguer");
    const items = document.querySelectorAll(".container-option");
    const menu = document.querySelector(".MENU");
    const doc = document.querySelector(".APP");

    buttonBurguer?.addEventListener("click", () => {
      menu.style.transform = "translateX(0%)";
    });

    doc?.addEventListener("click", () => {
      menu.style.transform = "translateX(-100%)";
    });

    items.forEach((item) => {
      item.addEventListener("click", () => {
        menu.style.transform = "translateX(-100%)";
      });
    });
  }, []);

  return (
    <>
      <div className="MENU hidden">
        <section className="section-user-data">
          <img src={front.src} alt="img-front" className="img-front" />
          <h3 className="name-user">EddyBel</h3>
        </section>
        <div className="decoration-separator"></div>
        <div className="section-options">
          <ul>
            {MenuOptions.map((option) => {
              return (
                <li
                  className="container-option"
                  key={`option_nav_bar_${option.title}`}
                >
                  <Link href={option.direccion}>
                    <a aria-label="dashboard" className="option-menu">
                      {option.svg}
                      <span className="name-option-menu">{option.title}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <main className="APP">{children}</main>
    </>
  );
}
