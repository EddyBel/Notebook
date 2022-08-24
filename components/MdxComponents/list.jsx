import { UnorderedList, ListItem } from "@chakra-ui/react";

export function UL(props) {
  return <UnorderedList>{props.children}</UnorderedList>;
}

export function LI(props) {
  return <ListItem>{props.children}</ListItem>;
}
