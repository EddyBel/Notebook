export function IMG(props) {
  return (
    <img
      src={props.src}
      loading="lazy"
      alt={props.alt}
      className="w-full h-full object-cover object-center"
    />
  );
}
