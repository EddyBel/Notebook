import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export function Links(props) {
  // console.log(props);
  return (
    <Link href={props.href} color="teal.500">
      {props.children} <ExternalLinkIcon mx="1px" />
    </Link>
  );
}
