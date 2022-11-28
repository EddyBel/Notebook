import { GetStaticProps, NextPage } from "next";
import { Percentage, SetID, SetName } from "../utils/index";
import { MarkdownJSX } from "../lib/mdx";
import { settings } from "../configs/index";

type Props = {
  totalFiles: number;
  numberFilesByTheme: any[];
};

const Info: NextPage<Props> = ({ totalFiles, numberFilesByTheme }) => {
  console.log(numberFilesByTheme);
  return (
    <div className="INFO">
      <div className="container-info">
        <div className="container-background">
          <img
            src={settings.backgroundDefault}
            alt="Imagen de fondo"
            className="background"
          />
        </div>
        <div className="container-front">
          <img
            src={settings.frontDefault}
            alt="imagen-user"
            className="front"
          />
        </div>
        <div className="container-info-text">
          <h1 className="title">Porcentaje de Notas</h1>

          {numberFilesByTheme.map((stats: any) => {
            const percentage = Percentage(totalFiles, stats.numberFiles);

            const id = SetID(stats.matter);
            const matter = SetName(stats.matter);

            return (
              <div className="container-range" key={stats.theme}>
                <h1 className="matter-range"> {matter}</h1>
                <div className="range">
                  <div
                    className="full-range"
                    id={id}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <h1 className="percentaje">{`${Math.round(percentage)}%`}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;

export const getStaticProps: GetStaticProps = async () => {
  const mdx = new MarkdownJSX();
  const { data, numberFilesByTheme } = mdx.GetAllFiles();
  const totalFiles = data.length;

  return {
    props: {
      totalFiles,
      numberFilesByTheme,
    },
  };
};
