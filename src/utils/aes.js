// import CryptoJS from 'crypto-js'
const CryptoJS = require("crypto-js");

//加密
export function Encrypt(word, keyStr) {
  const key = keyStr || "vmovieeeee1234";
  const ciphertext = CryptoJS.AES.encrypt(word, key).toString();
  return ciphertext;
}

//解密
export function Decrypt(word, keyStr) {
  const key = keyStr || "vmovieeeee1234";
  const bytes  = CryptoJS.AES.decrypt(word, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}


// let statickey = CryptoJS.enc.Utf8.parse("vmovieeeee1234");
// let staticiv = CryptoJS.enc.Utf8.parse("1234vvvvvvomive");
// //加密
// export function Encrypt(word, keyStr, ivStr) {
//   const key = CryptoJS.enc.Utf8.parse(keyStr) || statickey;
//   const iv = CryptoJS.enc.Utf8.parse(ivStr) || staticiv;

//   let srcs = CryptoJS.enc.Utf8.parse(word);
//   //对称解密算法为AES-128-CBC 数据采用PKCS#7填充，key为16位
//   let encrypted = CryptoJS.AES.encrypt(srcs, key, {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   });
//   return encrypted.ciphertext.toString().toUpperCase();
// }
// //解密
// export function Decrypt(word, keyStr, ivStr) {
//   const key = CryptoJS.enc.Utf8.parse(keyStr) || statickey;
//   const iv = CryptoJS.enc.Utf8.parse(ivStr) || staticiv;

//   let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
//   let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
//   let decrypt = CryptoJS.AES.decrypt(srcs, key, {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   });
//   let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
//   return decryptedStr.toString();
// }

