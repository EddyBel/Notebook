export function IMG({ src, alt }: any) {
  return (
    <img
      src={`/Images/${src}`}
      loading="lazy"
      alt={alt}
      className="imagen-note"
    />
  );
}
