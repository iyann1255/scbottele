const { createCanvas, loadImage, registerFont } = require('canvas');
const fetch = require('node-fetch');
registerFont('./fonts/BebasNeue-Regular.ttf', { family: 'BebasNeue' });

async function loadImageFromUrl(url) {
    const res = await fetch(url);
    const buffer = await res.buffer();
    return await loadImage(buffer);
}

module.exports = async function makeCard({ type = 'welcome', username, ppUrl, backgroundUrl, memberCount }) {
    const canvas = createCanvas(800, 400);
    const ctx = canvas.getContext('2d');

    // Background
    const bg = await loadImageFromUrl(backgroundUrl);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    // Overlay hitam di kiri
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, 250, canvas.height);

    // PP user (lingkaran)
    const avatar = await loadImageFromUrl(ppUrl);
    ctx.save();
    ctx.beginPath();
    ctx.arc(125, 130, 70, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 55, 60, 140, 140);
    ctx.restore();

    // Judul: Welcome / Goodbye
    ctx.fillStyle = '#ffffff';
    ctx.font = '48px BebasNeue';
    ctx.fillText(type.toUpperCase(), 300, 100);

    // Username
    ctx.font = '36px BebasNeue';
    ctx.fillText(username, 300, 160);

    // Member info
    ctx.font = '28px BebasNeue';
    ctx.fillText(`${memberCount}th member`, 300, 200);

    return canvas.toBuffer();
};