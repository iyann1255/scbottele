// helpers/getProfilePic.js
const fetch = require('node-fetch');

/**
 * Kembalikan buffer foto profil terbaru user Telegram
 * @param {import('telegraf').Telegraf} bot
 * @param {Number|String} userId
 * @returns {Promise<Buffer>}  buffer JPG/PNG
 */
async function getProfilePic(bot, userId) {
  const photos = await bot.telegram.getUserProfilePhotos(userId, 0, 1);
  if (!photos.total_count) throw new Error('User tidak memiliki foto profil');

  // ambil resolusi tertinggi dari array terakhir
  const fileId = photos.photos[0].pop().file_id;
  const link   = await bot.telegram.getFileLink(fileId);
  const res    = await fetch(link.href);
  if (!res.ok) throw new Error('Gagal mengunduh foto');
  return res.buffer();
}

module.exports = getProfilePic;