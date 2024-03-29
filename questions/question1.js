
const clothing = ["shirt", "pants", "jacket"]
const color = ["black", "white"]
const size = ["S", "M", "L"]

const generateList = () => {
  let result = [];
  for (item of clothing) {
    for (col of color) {
      for (siz of size) {
        if (item === "shirt" && col === "black" && siz === "L") {
          continue;
        }
        result.push(`${item} ${col} ${siz}`);
      }
    }
  }
  return result;
}

const list = generateList();
console.log(list);