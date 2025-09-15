// video2mp3.js
const fs = require('fs');
const { execFile } = require('child_process');
const { promisify } = require('util');
const tmp = require('tmp-promise');
const fetch = require('node-fetch');

const exec = promisify(execFile);

/**
 * Konversi file Telegram (video/voice) ➜ MP3 buffer
 * @param {import('telegraf').Telegraf} bot – instance bot
 * @param {String} fileId                      – file_id Telegram
 * @returns {Promise<Buffer>}
 */
async function videoToMp3(bot, fileId) {
  /* 1. download file Telegram ke tmp */
  const srcFile = await tmp.file({ postfix: '.dat' });
  const dstFile = srcFile.path.replace('.dat', '.mp3');
  const link    = await bot.telegram.getFileLink(fileId);
  const res     = await fetch(link.href);
  if (!res.ok) throw new Error('Download gagal: ' + res.status);
  await fs.promises.writeFile(srcFile.path, await res.buffer());

  /* 2. convert via ffmpeg */
  await exec('ffmpeg', [
    '-y',            // overwrite
    '-i', srcFile.path,
    '-vn',           // no video
    '-ab', '128k',   // bitrate audio
    '-ar', '44100',  // sample rate
    '-f', 'mp3',
    dstFile
  ]);

  /* 3. kembalikan buffer MP3 */
  return fs.promises.readFile(dstFile);
}

module.exports = videoToMp3;