import { Burguer } from "./svg";

export function Button_Burguer({ onClick }) {
  return (
    <button className="p-2 flex justify-center items-center rounded-xl" onClick={onClick}>
      <Burguer />
    </button>
  );
}
