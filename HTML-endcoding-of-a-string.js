// Link: https://learnersbucket.com/examples/interview/html-encoding-of-a-string/

// Given a string and an array representing the HTML encoding of the string from and to with the given tag. Return the HTML encoded string.

const str = "Hello, world";
const styleArr = [
  [0, 2, "i"],
  [4, 9, "b"],
  [7, 10, "u"],
];

const encodeToHTML = (str, styleArr) => {
  let encodedStr = "";
  let lastIndex = 0;
  styleArr.forEach((style) => {
    const [start, end, tag] = style;
    encodedStr =
      encodedStr +
      str.slice(lastIndex + 1, start) +
      "<" +
      tag +
      ">" +
      str.slice(start, end + 1);
    encodedStr = encodedStr + "</" + tag + ">";
    lastIndex = end;
  });
  return encodedStr;
};

const output = encodeToHTML(str, styleArr);
console.log(output);
