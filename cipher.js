const caesarCipher = (str, shift, action) => {

  const alphabetLength = 26;
  const upperCharCode = 65;
  const lowerCharCode = 97;

  if (action === 'encode') {
    const shiftUpperChar = (char) => {
      let newCharCode = (char.charCodeAt(0) - upperCharCode + shift) % alphabetLength;
      if (newCharCode < 0) {
        newCharCode += alphabetLength;
      }
      newCharCode += upperCharCode;
      return String.fromCharCode(newCharCode);
    };

    const shiftLowerChar = (char) => {
      let newCharCode = (char.charCodeAt(0) - lowerCharCode + shift) % alphabetLength;
      if (newCharCode < 0) {
        newCharCode += alphabetLength;
      }
      newCharCode += lowerCharCode;
      return String.fromCharCode(newCharCode);
    };
    return str
      .replace(/[A-Z]/g, shiftUpperChar)
      .replace(/[a-z]/g, shiftLowerChar);

  } else if (action === 'decode') {
    const shiftUpperChar = (char) => {
      let newCharCode = (char.charCodeAt(0) - upperCharCode - shift) % alphabetLength;
      if (newCharCode < 0) {
        newCharCode += alphabetLength;
      }
      newCharCode += upperCharCode;
      return String.fromCharCode(newCharCode);
    };

    const shiftLowerChar = (char) => {
      let newCharCode = (char.charCodeAt(0) - lowerCharCode - shift) % alphabetLength;
      if (newCharCode < 0) {
        newCharCode += alphabetLength;
      }
      newCharCode += lowerCharCode;
      return String.fromCharCode(newCharCode);
    };
    return str
      .replace(/[A-Z]/g, shiftUpperChar)
      .replace(/[a-z]/g, shiftLowerChar);
  }
};

module.exports = {
  caesarCipher,
};