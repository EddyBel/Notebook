import Img from "next/image";
import { options_nav_bar } from "../../options.config";
import { Button_Burguer } from "../common/buttons";
import { useUser } from "../../contexts/userContext";
import { formatDate, getDate } from "../../lib/date";

export function NavBar({ onClick }) {
  const { user } = useUser();

  return (
    <nav className="w-screen p-2 pl-8 pr-8 bg-gray-900 flex flex-row justify-between items-center z-20">
      <Button_Burguer onClick={onClick} />
      <div className="flex flex-row justify-center items-center gap-4">
        {/* <img src={user.img} className="w-10 h-10 rounded-full" alt="" />
        <h1 className="text-gray-100 text-lg">{user.name}</h1> */}
        <h1 className="text-gray-100 text-lg" >{formatDate(getDate(), "dd/mm/yy text")}</h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <ul>
          {options_nav_bar.map((option) => {
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
