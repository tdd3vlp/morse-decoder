const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let morseCode = '';
  let arr = [];

  for (let i = 0; i < expr.length; i += 10) {
    arr.push(
      expr
        .slice(i, i + 10)
        .replace(/11/g, '-')
        .replace(/10/g, '.')
        .replace(/0/g, '')
        .replace('**********', ' ')
    );
  }

  arr.forEach((k) => {
    if (k === ' ') {
      morseCode += ' ';
    }
    if (k in MORSE_TABLE) {
      morseCode += Object.values(MORSE_TABLE[k]);
    }
  });

  return morseCode;
}

module.exports = {
  decode,
};
