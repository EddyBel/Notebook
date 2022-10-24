import { useUser } from "../contexts/userContext";
import { Text } from "@chakra-ui/react";
import { getAllFiles } from "../lib/mdx";
import { params } from "../configs/index";

function Info({ totalFiles, numberFilesByTheme }) {
  const { user } = useUser();

  return (
    <div className="min-h-screen w-screen dark:bg-slate-900 pt-14 pb-14">
      <div className="W-10/12 dark:bg-slate-800 p-4 shadow-lg m-3 lg:m-24 lg:p-12 rounded-md mt-14">
        <div className="w-full h-36 lg:h-80 rounded-xl overflow-hidden">
          <img
            src={params.backgrounds[1]}
            alt="Imagen de fondo"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <img
            src={user.img}
            alt="imagen-user"
            className="w-28 h-28 lg:w-48 lg:h-48 rounded-full -translate-y-14 lg:-translate-y-28 "
          />
        </div>
        <div className="w-full h-auto p-2 lg:p-10">
          <Text
            fontSize="6xl"
            className="text-center mb-10 dark:text-slate-200"
          >
            Estadistica
          </Text>

          {numberFilesByTheme.map((stats) => {
            const percentage = CalculateThePercentage(
              totalFiles,
              stats.numberFiles
            );

            const id = ValidateID(stats.theme);
            const theme = ValidateName(stats.theme);

            return (
              <div
                className="w-full flex flex-row justify-between items-center gap-12 mb-5"
                key={stats.theme}
              >
                <Text className="w-auto md:w-36 text-sm lg:text-xl dark:text-slate-200">
                  {theme}
                </Text>
                <div className="bar-range w-full h-5 bg-gray-400 bg-opacity-60 rounded-lg overflow-hidden">
                  <div
                    className="w-full h-full bg-blue-700 duration-200 rounded-lg"
                    id={id}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <Text className="w-12 text-sm lg:text-xl dark:text-slate-200">{`${Math.round(
                  percentage
                )}%`}</Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Info;

function CalculateThePercentage(total, number) {
  return (number * 100) / total;
}

function ValidateID(name) {
  if (name === "C++") return "CPP";
  else return name;
}

function ValidateName(name) {
  if (name === "CS") return "C#";
  else return name;
}

export async function getStaticProps() {
  const { data, numberFilesByTheme } = await getAllFiles();
  const totalFiles = data.length;

  return {
    props: {
      totalFiles,
      numberFilesByTheme,
    },
  };
}
