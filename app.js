//Captializing first alphabet of each word after space

let str = prompt("Enter any text?");
let strtoLowerCase = str.toLocaleLowerCase();
let strSplit = strtoLowerCase.split(" ");
let finalResult = [];

for (let i = 0; i < strSplit.length; i++) {
  // console.log(strSplit[i]);

  let upperLetter = strSplit[i].slice(0, 1).toLocaleUpperCase();
  // console.log(upperLetter);

  let secPart = strSplit[i].slice(1);
  // console.log(secPart);

  let fullStr = upperLetter + secPart;
  // console.log(fullStr);

  finalResult.push(fullStr);
}
console.log(finalResult.join(" "));
document.write(finalResult.join(" "));
