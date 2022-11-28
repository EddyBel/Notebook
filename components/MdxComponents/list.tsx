export function UL({ children }: any) {
  return <ul className="container-list-note">{children}</ul>;
}

export function OL({ children }: any) {
  return <ol className="item-ol">{children}</ol>;
}

export function LI({ children }: any) {
  return (
    <li className="item-li">
      <div className="decoration-li"></div>
      <p className="text-li">{children}</p>
    </li>
  );
}
