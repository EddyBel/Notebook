import { useUser } from "../../contexts/userContext";
import { footer } from "../../options.config";

export function Footer() {
  const { user } = useUser();

  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#85C1E9] to-gray-100 mt-16 w-full">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              src={user.img}
              className="mr-5 h-6 sm:h-9 rounded-full"
              alt="logo"
            />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Programador web.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              {footer.icons.map((icon) => {
                return (
                  <a
                    className="hover:opacity-75"
                    href={icon.direccion}
                    target="_blank"
                    rel="noreferrer"
                    key={`icon-${icon.title}`}
                  >
                    <span className="sr-only"> {icon.title} </span>
                    {icon.svg}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            {/* inicio de enlaces */}
            <div>
              <p className="font-medium">Paginas</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {footer.paginas.map((option) => {
                  return (
                    <a
                      className="hover:opacity-75"
                      href={option.direccion}
                      key={`option-pages-${option.title}`}
                    >
                      {option.title}
                    </a>
                  );
                })}
              </nav>
            </div>
            {/* fin de enlaces */}
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">© 2022 Eduardo Rangel</p>
      </div>
    </footer>
  );
}
