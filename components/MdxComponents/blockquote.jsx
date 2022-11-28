import { useEffect } from "react";

export function Blockquote(props) {
  useEffect(() => {
    let contents = document.querySelectorAll(".content-blockquote");
    let decorations = document.querySelectorAll(".decoration-blockquote");

    decorations.forEach((element, index) => {
      element.style.height = `${contents[index].clientHeight}px`;
    });

    window.addEventListener("resize", () => {
      decorations.forEach((element, index) => {
        element.style.height = `${contents[index].clientHeight}px`;
      });
    });
  }, []);
  return (
    <blockquote className="container-blockquote">
      <div className="decoration-blockquote"></div>
      <div className="content-blockquote">{props.children}</div>
    </blockquote>
  );
}
