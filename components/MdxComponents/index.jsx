import { PRE } from "./pre";
import { CODE } from "./code";
import { Underlined, EM } from "./subR";
import { H1, H2, H3, H4, H5, H6 } from "./texts";
import { Paragraphs } from "./paragraphs";
import { UL, LI } from "./list";
import { IMG } from "./img";
import { Links } from "./link";

const MDXComponents = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  h5: (props) => <H5 {...props} />,
  h6: (props) => <H6 {...props} />,
  p: (props) => <Paragraphs {...props} />,
  a: (props) => <Links {...props} />,
  ul: (props) => <UL {...props} />,
  li: (props) => <LI {...props} />,
  pre: (props) => <PRE {...props} />,
  code: (props) => <CODE {...props} />,
  img: (props) => <IMG {...props} />,
  em: (props) => <EM {...props} />,
  Underlined,
};

export default MDXComponents;
