import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export function Links(props) {
  // console.log(props);
  return (
    <Link href={props.href}>
      {/* Hello World <ExternalLinkIcon mx="2px" /> */}
      {props.children} <ExternalLinkIcon mx="1px" />
    </Link>
  );
}
