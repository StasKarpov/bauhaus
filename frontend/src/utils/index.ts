import { STRAPI_BASE_URL } from "../config";

export const toAbsoluteUrl = (url: string | undefined) => {
  var r = new RegExp("^(?:[a-z]+:)?//", "i");
  if (url) {
    if (r.test(url)) {
      //url is absolute
      return url;
    } else {
      return `${STRAPI_BASE_URL}${url}`;
    }
  } else {
    return "";
  }
};
