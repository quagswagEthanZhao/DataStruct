// const string = "Hello!";
// const arr = string.split("");

const arr = "Hello";

const reverseArr = (str) => {
  const arr = str.split("");
  const resoult = [];
  const round = arr.length;
  for (var i = 0; i < round; i++) {
    resoult.push(arr.pop());
  }
  return resoult.toString();
};

function removeDuplicateCharacters(string) {
  return string
    .split("")
    .filter((item, pos, self) => {
      return self.indexOf(item) == pos;
    })
    .join("");
}
const test = "heyyyyyy";
const arrr = ["h", "o", "h", "i"];
const removeDuplicateHashTable = (str) => {
  const arrr = str.split("");
  const map = {};
  for (var i of arrr) {
    if (map[i]) {
      delete arrr[arrr.indexOf(i)];
    }
    map[i] = true;
  }
  return arrr.join("");
};

const removeDuplicateFilterMethod = (str) => {
  return str
    .split("")
    .filter((value, index, self) => {
      return self.indexOf(value) == index;
    })
    .join("");
};

console.log(removeDuplicateHashTable(test));
