const fs = require("fs");
const {
   indonesia
} = require("./language");
const nextCover = require('./lib/image');
 // sekarang benar‑benar 1→2→3→4→5→1...
global.APIs = {
   alfa: 'https://ndikz.my.id', //apabila link api eror, segera laporkan ke owner
} // gk usah  di ganti

global.APIKeys = {
   'https://ndikz.my.id': 'jembot ireng',
} // gk usah di ganti

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot
global.domain = 'https://sgpoil.hirapanel.my.id' // Isi Domain Lu jangan kasih tanda / di akhir link
global.linkpanel = 'https://www.mediafire.com/file/9as7td5lvtx8zqb/hiraXzV58.apk/file' // ganti link apk panel kalo ndak pkek apk panel ganti domain panel
global.apikey = 'ptla_jUch729s6oMGgmNEyVQS1mCQwnEiOISNafAxFpHlE7Q' // Isi Apikey Plta Lu
global.capikey = 'ptlc_XENTCyClo5h0l2gnqJowwyPDByyrB1ZdyIPcBdChaQG' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location3 = '1' // id location
global.mypp = 'https://files.catbox.moe/er1w71.jpg'
global.BOT_TOKEN = "7685292743:AAFiNEjHdpDSTwBalbidyGPW2So3tYWI" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "Nd-Mdོ" //your bot name
global.OWNER_NAME = "ᴹᴿ᭄ NdikzOneོ ×፝֟͜×" //your name
global.OWNER_NUMBER = "6281325600199" //your telegram number
global.OWNER = ["https://t.me/DIKUZUONE", "https://t.me/DIKUZUONE"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.idown = '5585327044'
const covers = [
  './image/1.jpg',
  './image/2.jpg',
  './image/3.jpg',
  './image/4.jpg',
  './image/5.jpg'
];
const cita = covers[Math.floor(Math.random() * covers.length)];
global.THUMBNAIL = cita
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}
