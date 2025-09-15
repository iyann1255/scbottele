/**
 * Upload buffer ke Catbox dan kembalikan URL‑nya
 * @param {Buffer} buff  – data file
 * @param {String} filename – nama file + ekstensi (mis. photo.jpg, video.mp4)
 * @param {String} mime – MIME type (mis. image/jpeg, video/mp4)
 * @returns {Promise<String>} – URL Catbox
 */
const fetch = require('node-fetch');
const FormData = require('form-data');

async function uploadCatbox(buff, filename = 'file', mime = 'application/octet-stream') {
  const form = new FormData();
  form.append('reqtype', 'fileupload');
  form.append('fileToUpload', buff, { filename, contentType: mime });

  const res = await fetch('https://catbox.moe/user/api.php', {
    method: 'POST',
    body: form
  });

  if (!res.ok) throw new Error(`Catbox error ${res.status}: ${await res.text()}`);
  const url = (await res.text()).trim();
  if (!url.startsWith('https://')) throw new Error('Upload gagal: ' + url);
  return url;
}

module.exports = uploadCatbox;