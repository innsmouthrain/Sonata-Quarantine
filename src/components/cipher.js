let alpha = "abcdefghijklmnopqrstuvwxyzåäö";
let keyword = process.argv[2] ? process.argv[2] : "filifjonkan";
let text = process.argv[3] ? process.argv[3] : "Finns inte mycket att säga men vi testar";

let cipherThis = (alphArg, keyArg, textArg) => {
  let uniqKA = removeDuplicateCharacters(keyArg);
  let cip = removeDuplicateCharacters(uniqKA.concat(alphArg));
  let retArr = [];
  textArg = textArg.toLowerCase().replace(/ /g, '');
  console.log("alphArg: " + alphArg);
  console.log("cip[5]: " + cip[5]);
  console.log("alphArg.indexOf(n) : " + alphArg.indexOf("n"));
  textArg.split("").forEach( (curVal) => {
    console.log(curVal + "" + cip[alphArg.indexOf(curVal) % 28]);
    retArr.push(cip[alphArg.indexOf(curVal) % 28]);
  });
  return retArr.toString();
}

let shiftThis = (alphArg, shiftAmt, textArg) => {
  let retArr = [];
  textArg.split("").forEach( (curVal) => {
    retArr.push(alphArg[alphArg.indexOf(curVal) + shiftAmt % 28]);
  });
  return retArr.toString().replace(/,/g, '');
}

console.log(shiftThis(alpha, -3, cipherThis(alpha, keyword, text)));


function removeDuplicateCharacters(string) {
  return string
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');
}
