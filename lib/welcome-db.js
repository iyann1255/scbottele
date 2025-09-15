const fs = require('fs');
const path = './lib/welcome.json';

function loadWelcomeList() {
  if (!fs.existsSync(path)) fs.writeFileSync(path, '[]');
  return JSON.parse(fs.readFileSync(path));
}

function saveWelcomeList(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

function enableWelcome(chatId) {
  let data = loadWelcomeList();
  if (!data.includes(chatId)) {
    data.push(chatId);
    saveWelcomeList(data);
  }
}

function disableWelcome(chatId) {
  let data = loadWelcomeList().filter(id => id !== chatId);
  saveWelcomeList(data);
}

function isWelcomeEnabled(chatId) {
  return loadWelcomeList().includes(chatId);
}

module.exports = {
  enableWelcome,
  disableWelcome,
  isWelcomeEnabled
}