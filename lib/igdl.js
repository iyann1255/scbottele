// igNekorinn.js
const fetch = require('node-fetch');

/**
 * Unduh media Instagram via api.nekorinn.my.id
 * @param {String} url – tautan Instagram (post/Reels)
 * @returns {Promise<{isVideo:Boolean, caption:String|null, username:String, links:String[]}>}
 */
async function igNekorinn(url) {
  const api = 'https://api.nekorinn.my.id/downloader/instagram?url=' + encodeURIComponent(url);
  const res = await fetch(api);
  if (!res.ok) throw new Error('API error: ' + res.status);

  const json = await res.json();
  if (!json.status || !json.result) throw new Error('API: respon tidak valid');

  const { metadata, downloadUrl } = json.result;
  return {
    isVideo : metadata.isVideo,
    caption : metadata.caption,
    username: metadata.username,
    links   : downloadUrl
  };
}

module.exports = igNekorinn;