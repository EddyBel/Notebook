import { Text, Highlight } from "@chakra-ui/react";

export function Underlined(props) {
  return (
    <Text fontSize="md">
      <Highlight
        query={props.words}
        styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
      >
        {props.children.props.children}
      </Highlight>
    </Text>
  );
}

export function EM(props) {
  return (
    <Highlight
      query={[props.children]}
      styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
    >
      {props.children}
    </Highlight>
  );
}
