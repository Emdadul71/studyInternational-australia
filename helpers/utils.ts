import parse from "react-html-parser";

export const isEmpty = (obj: {}) => {
  if (!obj) return true;
  return Object.keys(obj).length === 0;
};
export const htmlParse = (str: string) => {
  if (!str || str == "" || typeof str !== "string") return false;
  return parse(str);
};

//remove tags
export const remove_tags = (_html: any) => {
  let html = _html.toString();
  let strippedString = html.replace(/(<([^>]+)>)/gi, "");
  return strippedString;
};

//printe excerpt
export const excerpt = (_html: any, count = 100) => {
  const text = remove_tags(_html).toString().replaceAll("&nbsp;", " ");
  return text.slice(0, count) + (text.length > count ? "..." : "");
};

export const excerptWithRemoveQuote = (_html: any, count = 100) => {
  const rawText = remove_tags(_html);
  const text = rawText?.replace(/"/g, "");
  return text.slice(0, count) + (text.length > count ? "..." : "");
};

export const wordCount = (str: string) => {
  return str.split(" ").length;
};

//calculate reading time
export const readingTime = (text: string) => {
  let str = remove_tags(text);
  let wordCount = str.match(/(\w+)/g)?.length;
  if (wordCount <= 0) {
    wordCount = 100;
  }
  let count_time = Math.floor(wordCount / 200);

  return count_time;
};

export const shuffledArray = (array: any) => {
  if (array.length == 0) return;
  return array.sort((a: any, b: any) => 0.5 - Math.random());
};

export function shortenLargeNumber(num: number, digits: number): any {
  var units = ["K", "M", "G", "T", "P", "E", "Z", "Y"],
    decimal;

  for (var i = units.length - 1; i >= 0; i--) {
    decimal = Math.pow(1000, i + 1);

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i];
    }
  }

  return num;
}

export function removeFirstForwardSlash(inputString: string): string {
  if (inputString?.startsWith("/")) {
    return inputString.substring(1);
  } else {
    return inputString;
  }
}

export function staticAsset(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}/${removeFirstForwardSlash(path)}`;
}

export const loaderProp = ({ src }: any) => {
  return src;
};
