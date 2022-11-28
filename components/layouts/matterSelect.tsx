import { useEffect } from "react";
import { themes } from "../../configs/index";

type PropsMatterSelect = {
  setTheme: (value: any) => void;
};

export function MatterSelect({ setTheme }: PropsMatterSelect) {
  const changeThemeSelection = () => {
    const buttons = document.querySelectorAll(".option-matter");

    buttons.forEach((button) => {
      button.addEventListener("click", (event: any) => {
        const value: string = event.target.innerHTML;
        setTheme(value);
        button.classList.add("activate");
        buttons.forEach((ohterButton) => {
          if (ohterButton != button) {
            ohterButton.classList.remove("activate");
          }
        });
      });
    });
  };

  useEffect(() => {
    changeThemeSelection();
  }, []);

  return (
    <ul className="container-matters-notes">
      <li className="option-matter activate" id={`option-matter-Todo`}>
        Todo
      </li>
      {themes.map((theme: any) => {
        return (
          <li
            className="option-matter"
            id={`option-matter-${theme.matter}`}
            key={`option-matter-${theme.matter}-key`}
          >
            {theme.matter}
          </li>
        );
      })}
    </ul>
  );
}
