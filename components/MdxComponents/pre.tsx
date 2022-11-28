// TODO Agreagar la funcion de copiar capturar y exportar
import { languageString } from "../../utils/index";

export function PRE(props: any) {
  // console.log(props);
  const match = props.children.props.className.match(/language-([\0-\uFFFF]*)/);
  const lang = languageString(match[1]);

  return (
    <pre className="section-code">
      <div className="head-code">
        <div className="container-decoration">
          <div className="decoration-delete"></div>
          <div className="decoration-max"></div>
          <div className="decoration-check"></div>
        </div>
        {/* <h1 className="text-gray-50">main.js</h1> */}
        <h1 className="text-lang">{lang}</h1>
      </div>
      <div className="container-code" id="container-code">
        {props.children}
      </div>
    </pre>
  );
}
