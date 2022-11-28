import Link from "next/link";

type PropsCardTheme = {
  direction: string;
  background: string | undefined;
  matter: string;
  type: string;
};

export function CardTheme({
  direction = "/",
  background = "...pending",
  matter = "Tecnology",
  type = "Script",
}: PropsCardTheme) {
  return (
    <Link href={direction}>
      <a className="container-card-theme">
        <div className="container-text">
          <h3 className="type">{type}</h3>
          <h1 className="matter">{matter}</h1>
        </div>
        <img
          src={background}
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="img-background"
        />
      </a>
    </Link>
  );
}
