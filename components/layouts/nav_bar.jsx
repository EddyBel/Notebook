import { NavBarOptions } from "../../configs/index";
import { Button_Burguer } from "../common/buttons";
import { useUser } from "../../contexts/userContext";
import { formatDate, getDate } from "../../lib/date";

export function NavBar({ onClick }) {
  const { user } = useUser();

  return (
    <nav className="w-11/12 p-2 pl-8 pr-8 bg-gradient-to-r from-slate-800 to-violet-900 flex flex-row justify-between items-center z-20 fixed left-0 right-0 m-auto mt-2 rounded-full shadow-xl">
      <Button_Burguer onClick={onClick} />
      <div className="flex flex-row justify-center items-center gap-4">
        <h1 className="text-gray-100 text-lg">
          {formatDate(getDate(), "dd/mm/yy text")}
        </h1>
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
