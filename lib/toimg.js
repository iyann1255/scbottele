/**
 * Konversi stiker .webp Telegram ➜ PNG buffer dengan sharp
 *   npm install sharp
 */

const fs = require('fs');
const tmp = require('tmp-promise');
const fetch = require('node-fetch');   // v2.x (CommonJS)
const sharp = require('sharp');

async function stickerToPng(bot, fileId) {
  // 1. file tmp .webp
  const { path } = await tmp.file({ postfix: '.webp' });

  // 2. unduh stiker
  const link = await bot.telegram.getFileLink(fileId);
  const res  = await fetch(link.href);
  if (!res.ok) throw new Error('Unduh gagal: ' + res.status);
  await fs.promises.writeFile(path, await res.buffer());

  // 3. konversi ke PNG (buffer)
  const pngBuff = await sharp(path).png().toBuffer();
  return pngBuff;
}

module.exports = stickerToPng;