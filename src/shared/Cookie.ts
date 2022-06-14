const getCookie = (name: string) => {
  const value = "; " + document.cookie;
  const parts: string[] | undefined = value.split("; " + name + "=");

  if (parts.length === 2) {
    return parts.pop()?.split(";").shift();
  }
};

const setCookie = (name: string, value: string, exp: number) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name} = ${value} ; expires = ${date.toUTCString()}`;
};

const deleteCookie = (name: string) => {
  const date = new Date("2020-01-01").toUTCString();
  console.log(date);
  document.cookie = name + "=; expires=";
};

export { getCookie, setCookie, deleteCookie };
