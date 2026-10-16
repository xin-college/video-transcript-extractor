const CryptoJS = require('crypto-js');
if (typeof window !== 'undefined') {
  window.CryptoJS = CryptoJS;
}
if (typeof globalThis !== 'undefined') {
  globalThis.CryptoJS = CryptoJS;
}
module.exports = CryptoJS;
