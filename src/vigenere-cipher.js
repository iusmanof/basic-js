const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  type;
  constructor(type = true) {
    this.type = type;
  }

  isReverse(result) {
    return this.type ? result : result.split("").reverse().join("");
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("One or both param is/are UNDEFINED");

    key = key.repeat(Math.ceil(message.length / key.length));
    let result = "";

    key = key.toUpperCase();
    message = message.toUpperCase();

    let i_key = 0;

    for (let i = 0; i < message.length; i++) {
      // check letters in range
      if (message[i].match("[A-Z]")) {
        result += String.fromCharCode(
          ((message[i].charCodeAt() + key[i_key].charCodeAt()) % 26) + 65
        );
        i_key++;
      } else {
        result += message[i];
      }
    }
    return this.isReverse(result);
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error("One or both param is/are UNDEFINED");

    key = key.repeat(Math.ceil(message.length / key.length));
    let result = "";

    key = key.toUpperCase();
    message = message.toUpperCase();

    let i_key = 0;

    for (let i = 0; i < message.length; i++) {
      // check letters in range
      if (message[i].match("[A-Z]")) {
        result += String.fromCharCode(
          ((message[i].charCodeAt() + 26 - key[i_key].charCodeAt()) % 26) + 65
        );
        i_key++;
      } else {
        result += message[i];
      }
    }
    return this.isReverse(result);
  }
}

module.exports = VigenereCipheringMachine;
