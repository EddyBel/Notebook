import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";

export function CODE(props) {
  // Variables y constantes
  let count = 0;
  let key = 0;
  let lang = "";

  if (
    props.className === undefined ||
    props.className === null ||
    props.className === ""
  ) {
    lang = "none";
  } else {
    // Simplifica el nombre del lenguaje
    const className = props.className;
    const match = className.match(/language-([\0-\uFFFF]*)/);
    lang = match[1];
  }

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.children}
      language={lang}
    >
      {({ tokens, getLineProps, getTokenProps }) =>
        tokens.map((line, i) => {
          count = count + 1;
          key = key + 1;
          if (count === tokens.length) {
            count = 0;
          } else {
            return (
              <div {...getLineProps({ line, key: i })} key={`line-${key}`}>
                {line.map((token, key) => {
                  return (
                    <span
                      {...getTokenProps({ token, key })}
                      key={`span-${key}`}
                    />
                  );
                })}
              </div>
            );
          }
        })
      }
    </Highlight>
  );
}
