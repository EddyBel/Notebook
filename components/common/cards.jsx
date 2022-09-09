import Link from "next/link";

export function CardTheme(props) {
  return (
    <Link href={props.direccion}>
      <a className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
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
