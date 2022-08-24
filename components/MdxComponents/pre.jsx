// TODO Agreagar la funcion de copiar capturar y exportar 

import { languageString } from "../../lib/language";

export function PRE(props) {
  // console.log(props);
  const match = props.children.props.className.match(/language-([\0-\uFFFF]*)/);
  const lang = languageString(match[1]);

  return (
    <>
      {/* <textarea value={children.props.children} id={`code-${2}`} /> */}
      <pre className="bg-gray-900 p-1 rounded-xl w-full max-w-4xl m-auto shadow-2xl">
        <div className="w-full p-1 flex justify-between items-center pl-4 pr-4">
          <div className="flex flex-row justify-center items-center gap-2">
            <div
              className="w-4 h-4 bg-red-600 rounded-full cursor-pointer hover:bg-red-500 duration-200"
              title="export"
            ></div>
            <div
              className="w-4 h-4 bg-yellow-600 rounded-full cursor-pointer hover:bg-yellow-500 duration-200"
              title="captura"
            ></div>
            <div
              className="w-4 h-4 bg-green-600 rounded-full cursor-pointer hover:bg-green-500 duration-200"
              title="copy"
            ></div>
          </div>
          {/* <h1 className="text-gray-50">main.js</h1> */}
          <h1 className="text-gray-50">{lang}</h1>
        </div>
        <div className="p-4 w-full flex flex-col flex-wrap">
          {props.children}
        </div>
      </pre>
    </>
  );
}
