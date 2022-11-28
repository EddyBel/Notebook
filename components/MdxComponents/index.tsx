import { PRE } from "./pre";
import { CODE } from "./code";
import { Underlined, EM } from "./subR";
import { H1, H2, H3, H4, H5, H6 } from "./titles";
import { Paragraphs } from "./paragraphs";
import { UL, LI, OL } from "./list";
import { IMG } from "./img";
import { Links } from "./link";
import { Blockquote } from "./blockquote";
import { HR } from "./divide";

const MDXComponents = {
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  h4: (props: any) => <H4 {...props} />,
  h5: (props: any) => <H5 {...props} />,
  h6: (props: any) => <H6 {...props} />,
  p: (props: any) => <Paragraphs {...props} />,
  a: (props: any) => <Links {...props} />,
  ul: (props: any) => <UL {...props} />,
  ol: (props: any) => <OL {...props} />,
  li: (props: any) => <LI {...props} />,
  pre: (props: any) => <PRE {...props} />,
  code: (props: any) => <CODE {...props} />,
  img: (props: any) => <IMG {...props} />,
  em: (props: any) => <EM {...props} />,
  blockquote: (props: any) => <Blockquote {...props} />,
  hr: (props: any) => <HR {...props} />,
  Underlined,
};

export default MDXComponents;
