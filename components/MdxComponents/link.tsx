export function Links({ href, children }: any) {
  return (
    <a href={href} className="link">
      {children}
    </a>
  );
}
