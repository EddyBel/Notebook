import { useEffect } from "react";
import { NavBarOptions } from "../../configs/index";
import { Button_Burguer } from "../common/buttons";
import { useUser } from "../../contexts/userContext";
import { currentDate } from "../../utils/index";

export function NavBar({ onClick }) {
  const { user } = useUser();

  useEffect(() => {
    watchAndHiddenNavBar();
  }, []);

  return (
    <nav
      className="w-11/12 p-2 pl-8 pr-8 bg-gradient-to-r from-slate-800 to-violet-900 flex flex-row justify-between items-center z-20 fixed left-0 right-0 m-auto mt-2 rounded-full shadow-xl duration-300"
      id="navbar-container"
    >
      <Button_Burguer onClick={onClick} />
      <div className="flex flex-row justify-center items-center gap-4">
        <h1 className="text-gray-100 text-sm lg:text-lg">{currentDate()}</h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <ul>
          {NavBarOptions.map((option) => {
            return (
              <li key={`options-nav-bar-${option.title}`}>
                <a href={option.direccion}>{option.svg}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

// Esconde la navbar si el scroll es hacia abajo y muestralo si es hacia arriba
const watchAndHiddenNavBar = () => {
  const navbar = document.getElementById("navbar-container");

  let scrollPos = 0;

  // Saber si el scroll es hacia arriba o hacia abajo
  window.addEventListener("scroll", () => {
    const positionDOM = document.body.getBoundingClientRect().top; // Posicion actual

    // Compara la posicion actual con la variable de posicion de scroll
    if (positionDOM > scrollPos) {
      navbar.style.transform = "translateY(0%)";
      navbar.style.opacity = 100;
    } else {
      navbar.style.transform = "translateY(-120%)";
      navbar.style.opacity = 0;
    }
    // Actualiza la posicion de scroll
    scrollPos = document.body.getBoundingClientRect().top;
  });
};
