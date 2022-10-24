import { UnorderedList, ListItem, List } from "@chakra-ui/react";

export function UL(props) {
  return <UnorderedList>{props.children}</UnorderedList>;
}

export function OL(props) {
  return <UnorderedList>{props.children}</UnorderedList>;
}

export function LI(props) {
  return <ListItem className="dark:text-slate-300">{props.children}</ListItem>;
}
