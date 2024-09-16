//EXERCICIO 2

const stringCompression = (phrase) => {
    
  let countLetter = 0;
  let letterPhrase = phrase[0]
  const subString = []

  for (const letter of phrase) {
 
      if (letter !== letterPhrase) {
        subString.push(letterPhrase + countLetter);
        letterPhrase = letter
        countLetter = 0
      }
      countLetter++;
    
  }
  subString.push(letterPhrase + countLetter);
  let result = "";
  for (const key of subString) {
    result += key;
  }

  return result.length > phrase.length ? phrase : result;
};
console.log(stringCompression(`aarrrdd`))

