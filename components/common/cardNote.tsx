import Link from "next/link";
import {
  stringToArray,
  convertDate,
  matterIcon,
  colorRandom,
  convertLevelToIcons,
  subMatterIcon,
} from "../../utils/index";

type PropsCardNote = {
  title: string;
  matter: string;
  date: string;
  route: string;
  tags: string;
  level: string;
};

export function CardNote({
  title = "",
  matter = "",
  date = "",
  route = "",
  tags = "",
  level = "",
}: PropsCardNote) {
  let listTags = stringToArray(tags);
  let newDate = convertDate(date);
  let icon = matterIcon(matter).src;
  let newLevel = convertLevelToIcons(level);
  let subIcons = subMatterIcon(listTags);

  return (
    <Link href={`/Themes/${matter}/${route}`}>
      <a className="container-card">
        <div className="container-data">
          <img src={icon} alt="" className="icon-tec" />
          <div className="container-data-note">
            <div className="container-title-note">
              <h2 className="title-note">{title}</h2>
              {!subIcons ? (
                <></>
              ) : (
                subIcons.map((icon) => {
                  return <img src={icon.src} alt="" className="sub-icon" />;
                })
              )}
            </div>
            <p className="date-note">{newDate}</p>
            {!level ? <></> : <p>{newLevel}</p>}
          </div>
        </div>
        <div className="container-tags">
          {listTags.map((tag) => {
            let color = colorRandom();
            return (
              <h3
                className={`tag ${color}`}
                key={`tag-key-${tag}-${Math.random()}`}
              >
                {tag}
              </h3>
            );
          })}
        </div>
      </a>
    </Link>
  );
}
