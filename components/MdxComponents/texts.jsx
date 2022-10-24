import { Text, Heading } from "@chakra-ui/react";

export function H1(props) {
  return (
    <Text className="text-center dark:text-slate-200" fontSize="6xl">
      {props.children}
    </Text>
  );
}
export function H2(props) {
  return (
    <Text fontSize="5xl" className="dark:text-slate-100">
      {props.children}
    </Text>
  );
}
export function H3(props) {
  return (
    <Text fontSize="4xl" className="dark:text-slate-100">
      {props.children}
    </Text>
  );
}
export function H4(props) {
  return (
    <Text fontSize="3xl" className="dark:text-slate-100">
      {props.children}
    </Text>
  );
}
export function H5(props) {
  return (
    <Text fontSize="2xl" className="dark:text-slate-200">
      {props.children}
    </Text>
  );
}
export function H6(props) {
  return (
    <Text fontSize="xl" className="dark:text-slate-200">
      {props.children}
    </Text>
  );
}
