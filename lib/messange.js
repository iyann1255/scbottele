// smartReply.js
/**
 * reply pintar — jika teks lebih panjang dari batas Telegram, akan dikirim terpotong otomatis
 * @param {Function} sendFn – fungsi reply dari konteks, mis. alpha.reply
 * @param {String} text – teks yang ingin dikirim
 * @param {Object} opts – opsi tambahan (parse_mode, dll.)
 */
async function smartReply(sendFn, text, opts = {}) {
  const max = 4096;

  if (typeof text !== 'string') text = String(text);
  const parts = [];

  while (text.length > 0) {
    parts.push(text.slice(0, max));
    text = text.slice(max);
  }

  for (const part of parts) {
    await sendFn(part, opts);
  }
}

module.exports = smartReply;