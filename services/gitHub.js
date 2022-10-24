import { params } from "../configs/index";

const API = (user) => `https://api.github.com/users/${user}`;

export function getDataUser() {
  const data = fetch(API(params.userGithub)).then((response) =>
    response.json()
  );
  return data;
}
