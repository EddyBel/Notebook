import Link from "next/link";
import { languageIcon } from "../../utils/index";

export function CardTheme(props) {
  return (
    <Link href={props.direccion}>
      <a className="group h-36 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
        <img
          src={props.background}
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
        />

        <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

        <div className="flex flex-col relative">
          <span className="text-gray-300">{props.type}</span>
          <span className="text-white text-lg lg:text-xl font-semibold">
            {props.materia}
          </span>
        </div>
        {/* <h1 style={{ display: "none" }}>{props.materia}</h1> */}
      </a>
    </Link>
  );
}

export function CardNote({
  title = "",
  matter = "",
  date = "",
  route = "",
  materia = "",
  href = "",
}) {
  return (
    <Link href={href} key={`card-note-${route}`}>
      <a>
        <div className="bg-gray-100 bg-gradient-to-tr dark:from-slate-800 dark:to-violet-900 rounded-lg p-5 shadow-xl hover:scale-105 duration-200 cursor-pointer dark:shadow-violet-900 dark:shadow-lg">
          <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
            <h3 className="text-indigo-500 dark:text-blue-300 sm:text-lg md:text-xl font-semibold">
              {title}
            </h3>
            <img src={languageIcon(matter).src} alt="" className="w-8 h-8" />
          </div>
          <p className="text-gray-500 dark:text-white">{date}</p>
        </div>
      </a>
    </Link>
  );
}
