let str = prompt("hello! my name is aun").toLocaleLowerCase();
let splitString = str.split(" ");
let finalLine = [];
for (let i = 0; i < splitString.length; i++) {
  let firstLetter = splitString[i].slice(0, 1).toLocaleUpperCase();
  let secLetter = splitString[i].slice(1);
  let concatName = firstLetter + secLetter;
  finalLine.push(concatName);
}
console.log(`Given Line: ${str}`);
document.write(`Given Line: ${str} <br>`);
console.log(`Capitalized Line: ${finalLine.join(" ")}`);
document.write(`Capitalized Line: ${finalLine.join(" ")}`);
