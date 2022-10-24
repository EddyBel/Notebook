import { Text } from "@chakra-ui/react";

export function Paragraphs(props) {
  return (
    <Text fontSize="md" className="dark:text-slate-200">
      {props.children}
    </Text>
  );
}
