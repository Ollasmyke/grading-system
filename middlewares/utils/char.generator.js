const crypto = require('crypto');

const generateUUID = () => crypto.randomUUID();

const generateMatricNumber = () => {
  return customStringGenerator('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 7);
}

const generateCourseCode = name => {
  let prefix = name.substring(0, 3);
  let suffix = '101';
  return `${prefix}${suffix}`;
}

const customStringGenerator = (characters, size) => {
  let result = "", charactersLength = characters.length;
  for (let i = 0; i < size; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

const slugGenerator = name => {
  return name.replace(/\s+/g, '-').toLowerCase();
}

const camelCaseGenerator = text => {
  let array = text.split(' '), generatedWord = "";
  for (let [index, eachWord] of array.entries()) {
    if (index === 0) generatedWord = eachWord.charAt(0).toLowerCase() + eachWord.slice(1);
    else generatedWord = `${generatedWord}${eachWord.charAt(0).toUpperCase() + eachWord.slice(1)}`;
  }
  return generatedWord;
}

const findCharInArray = (array, key, value) => {
  return array.find((forEach) => forEach[key] === value);
}

const getTimeStampString = () => {
  let date = new Date();
  let month = (date.getMonth() + 1).toString(10).length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let day = (date.getDate() + 1).toString(10).length === 1 ? `0${date.getDate() + 1}` : date.getDate() + 1;
  let hour = (date.getHours() + 1).toString(10).length === 1 ? `0${date.getHours() + 1}` : date.getHours() + 1;
  let minutes = (date.getMinutes() + 1).toString(10).length === 1 ? `0${date.getMinutes() + 1}` : date.getMinutes() + 1;
  let seconds = (date.getSeconds() + 1).toString(10).length === 1 ? `0${date.getSeconds() + 1}` : date.getSeconds() + 1;
  return `${date.getFullYear()}${month}${day}${hour}${minutes}${seconds}`;
}

const checkIfValueIsEmail = value => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const checkIfValueIsJWT = value => {
  return /(\w)*\\(?!\\)(\w)*\\(?!\\)(\w)*(?!\\)/g.test(value);
}


const tokenGenerator = () => {
  return customStringGenerator('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 8);
}

const checkIfValidUUID = str => {
  const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  return regexExp.test(str);
}

module.exports = {
  generateUUID,
  generateMatricNumber,
  generateCourseCode,
  slugGenerator,
  camelCaseGenerator,
  findCharInArray,
  getTimeStampString,
  checkIfValueIsEmail,
  checkIfValueIsJWT,
  tokenGenerator,
  checkIfValidUUID
};
