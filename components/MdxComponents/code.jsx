import Highlight, { defaultProps } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/nightOwl";
import theme from "prism-react-renderer/themes/dracula";
import { languageString } from "../../lib/language";

export function CODE(props) {
  // Variables y constantes
  let count = 0;
  let key = 0;

  // Simplifica el nombre del lenguaje
  const match = props.className.match(/language-([\0-\uFFFF]*)/);

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.children}
      language={match[1]}
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
                {line.map((token, key) => (
                  <span
                    {...getTokenProps({ token, key })}
                    key={`span-${key}`}
                  />
                ))}
              </div>
            );
          }
        })
      }
    </Highlight>
  );
}
