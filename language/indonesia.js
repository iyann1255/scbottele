var link = " "
exports.noToken = "Bot token tidak boleh kosong, silahkan buat bot melalui https://t.me/BotFather"

exports.first_chat = (botname, pushname) => {
    return `Halo ${pushname}! Nama saya ${botname} - Saya adalah Bot Telegram multi fungsi! Klik /menu untuk mengetahui lebih lanjut tentang cara menggunakan bot ini.

Kirim perintah /privacy untuk melihat syarat dan ketentuan penggunaan bot.
`
}
exports.snk = "Syarat & Ketentuan Bot\n\n1. isi sendiri"
exports.getStyle = (style, style2) => {
    return `**${style2} Yg Kamu Masukkan Salah**\n\n__Berikut List ${style2} Yg Benar, Total__ **${style}** __${style2}__\n\n`
}
exports.wait = "`⏳ Mohon tunggu sebentar`"
exports.ok = `Done ✅`
exports.menu = async (ndikz, thumbnail, pushname, OWNER_NAME, OWNER, prefix, hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, user_id) => {
const axios = require("axios")
const path = require("path")
const fs = require("fs")
const FILE_PATHDATABASE = path.join(__dirname, '../database.json');

// Ambil data dari file lokal
const fetchRPGData = async () => {
  try {
    const data = fs.readFileSync(FILE_PATHDATABASE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Gagal baca database.json:', err);
    return {};
  }
};
const db = await fetchRPGData()
    const user = db[user_id] = db[user_id] || {}
    var ini_anu = `
╭─❒ ૮₍｡• •｡₎ა 「 Bᴏᴛ Iɴꜰᴏ 」 
├ 🧑‍💻 Cʀᴇᴀᴛᴏʀ   : [@${OWNER_NAME}](${OWNER[0]})
├ 🤝 Sᴘᴏɴꜱᴏʀ    : [@BotFather](https://t.me/BotFather)
├ ✨ Pʀᴇꜰɪx      : ${prefix}
├ 📊 Tᴏᴛᴀʟ Hɪᴛꜱ : ${hitall}
├ ⚡ Sᴘᴇᴇᴅ      : ${latensii.toFixed(4)} sec
├ 💾 Rᴀᴍ        : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ 🖥️ Hᴏꜱᴛ      : ${os.hostname()}
├ ⚙️ Pʟᴀᴛꜰᴏʀᴍ  : ${os.platform()}
╰❒ ⏱️ Rᴜɴᴛɪᴍᴇ  : ${simple.runtime(process.uptime())}

╭─❒ ʕっ•ᴥ•ʔっ 「 Dᴀᴛᴇ Iɴꜰᴏ 」 
├ 📅 Mᴀꜱᴇʜɪ     : ${week}, ${date}
╰ 🕌 Hɪᴊʀɪᴀʜ     : ${dateIslamic}

╭─❒ (๑•́‿•̀๑) 「 Uꜱᴇʀ Iɴꜰᴏ 」 
├ 🧸 Nᴀᴍᴀ        : ${pushname}
├ 🪪 Uꜱᴇʀɴᴀᴍᴇ    : [@${pushname}](https://t.me/${username})
├ 🆔 Iᴅ          : ${ndikz.message.chat.id}
├ ✨ Tᴇʀᴅᴀꜰᴛᴀʀ   : ${user.tanggaldaftar || '-'}
╰❒ 👑 Oᴡɴᴇʀ      : ${isCreator ? '✅ True' : '❌ False'}
`
    var button = [
        [{
                text: '🃏 Anime',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'Panel ⚡',
                callback_data: 'panelcmd ' + user_id
            }
        ],
        [{
                text: '👧 Cecan',
                callback_data: 'cecancmd ' + user_id
            },
            {
                text: 'Tools️ 🛠',
                callback_data: 'toolscmd ' + user_id
            }
        ],
        [{
                text: '📥 Download',
                callback_data: 'downloadcmd ' + user_id
            },
            {
                text: 'AI 🤖',
                callback_data: 'aicmd ' + user_id
            },
        ],
        [{
                text: '👨‍💻Menu Owner',
                callback_data: 'ownercmd ' + user_id
            },
            {
                text: 'Islamic 🕌',
                callback_data: 'islamcmd ' + user_id
            },
        ],
        [{
                text: '🪵⛏️Menu Rpg',
                callback_data: 'menurpg ' + user_id
            },
            {
                text: 'Menu Game🎮',
                callback_data: 'menugame ' + user_id
            },
        ],
        [{
                text: '👙 Nsfw & Sfw',
                callback_data: 'nsfwcmd ' + user_id
            },
            {
                text: 'Menu Group🏢',
                callback_data: 'menugroup ' + user_id
            },            
        ],
        [{
                text: '😹Menu Fun',
                callback_data: 'menufun ' + user_id
            },
            {
                text: 'Menu Jasher📨',
                callback_data: 'menujasher ' + user_id
            },
            ],
        [{
            text: '⚘ Delete🚯 ⚘',
            callback_data: 'pepek ' + user_id
        }, ]
    ]
    try {
        await ndikz.editMessageMedia({
            type: "photo",
            media: {
                source: thumbnail
            },
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true
        }, {
            reply_markup: {
                inline_keyboard: button
            }
        })
    } catch {
        await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
    }
}
exports.animecmd = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menujasher ' + user_id
            },
            {
                text: 'panel ⚡',
                callback_data: 'panelcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ANIME 」 
» [/akame](${link})
» [/anna](${link})
» [/asuna-yuki](${link})
» [/ayuzawa](${link})
» [/chitoge](${link})
» [/emilia](${link})
» [/erza](${link})
» [/hinata](${link})
» [/inori](${link})
» [/kaga-kouko](${link})
» [/kaori-miyazono](${link})
» [/kotori-minami](${link})
» [/killua](${link})
» [/mikasa](${link})
» [/mio-akiyama](${link})
» [/mizore-sirayuki](${link})
» [/nakiri-alice](${link})
» [/naruto](${link})
» [/riyas-gremori](${link})
» [/sakura](${link})
» [/sento-isuzu](${link})
» [/shana](${link})
» [/shiina](${link})
» [/shinka](${link})
» [/winry](${link})
» [/yukino](${link})
» [/yuzuki](${link})
» [/mikosiba](${link})
» [/luffy](${link})
» [/zoro](${link})
» [/ussop](${link})
» [/sanji](${link})
» [/minato](${link})
» [/boruto](${link})
» [/sarada](${link})
» [/mitsuki](${link})
» [/orochimaru](${link})
» [/tsunade](${link})
» [/kakashi](${link})
» [/rimuru](${link})
» [/sagiri](${link})
» [/natsu](${link})
» [/tanjirou](${link})
╰──────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.panelcmd = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'Cecan 👧',
                callback_data: 'cecancmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 PANEL 」 
» [/1GB](${link})
» [/2GB](${link})
» [/3GB](${link})
» [/4GB](${link})
» [/5GB](${link})
» [/6GB](${link})
» [/7GB](${link})
» [/8GB](${link})
» [/9GB](${link})
» [/10GB](${link})
» [/addusr](${link})
» [/createadmin](${link})
» [/detusr](${link})
» [/listsrv](${link})
» [/listusr](${link})
» [/listadmin](${link})
» [/detusr](${link})
» [/delsrv](${link})
» [/delusr](${link})
╰──────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.cecancmd = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'panelcmd ' + user_id
            },
            {
                text: 'Tools️ 🛠',
                callback_data: 'toolscmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 CECAN 」 
» [/china](${link})
» [/indonesia](${link})
» [/thailand](${link})
» [/korea](${link})
» [/japan](${link})
» [/vietnam](${link})
╰──────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.toolscmd = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'cecancmd ' + user_id
            },
            {
                text: 'Download 📥 ',
                callback_data: 'downloadcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 TOOLS 」 
» [/tourl <img>](${link})
» [/hd <img>](${link})
» [/toimg <sticker>](${link})
» [/toaudio <vid/vn>](${link})
» [/getpp](${link})
╰──────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.downloadcmd = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'toolscmd ' + user_id
            },
            {
                text: 'Ai 🤖',
                callback_data: 'aicmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 DOWNLOAD 」 
» [/ytmp4](${link})
» [/ytmp3](${link})
» [/play](${link})
» [/ytsearch](${link})
» [/pinterest](${link})
» [/mediafire](${link})
» [/tiktok](${link})
» [/tiktokaudio](${link})
» [/xnxxsearch](${link})
» [/xnxx](${link})
╰──────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.aicmd = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'downloadcmd ' + user_id
            },
            {
                text: '👨‍💻 Menu Owner',
                callback_data: 'ownercmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 AI 」
» [/ai](${link})    
» [/llama](${link})
» [/metaai](${link})
» [/dukun](${link})
» [/gemini](${link})
» [/esia](${link})
» [/deepseek](${link})
» [/dbrx](${link})
» [/claude](${link})
» [/blackbox](${link})
» [/joko](${link})
» [/noushermes](${link})
╰──────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.ownercmd = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'aicmd ' + user_id
            },
            {
                text: 'Islamic 🕌',
                callback_data: 'islamcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 Menu Owner 」 
» [/addprem](${link})
» [/delprem](${link})
» [/delspam](${link})
» [/addip](${link})
» [/delip](${link})
» [/restart](${link})
» [/addtoken](${link})
» [/deltoken](${link})
» [/backup](${link})
» [/ban](${link})
» [/unban](${link})
╰──────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.islamcmd = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'ownercmd ' + user_id
            },
            {
                text: '🪵⛏️Menu Rpg',
                callback_data: 'menurpg ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ISLAMIC 」 
» [/asmaulhusna](${link})
» [/kisahnabi](${link})
» [/jadwalshalat](${link})
» [/alquran](${link})
╰──────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.nsfwcmd = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menugame ' + user_id
            },
            {
                text: 'Menu Group🏢',
                callback_data: 'menugroup ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 NSFW & SFW 」 
» [/waifu](${link})
» [/neko](${link})
» [/shinobu](${link})
» [/megumin](${link})
» [/bully](${link})
» [/cuddle](${link})
» [/cry](${link})
» [/hug](${link})
» [/awoo](${link})
» [/kiss](${link})
» [/lick](${link})
» [/pat](${link})
» [/smug](${link})
» [/bonk](${link})
» [/yeet](${link})
» [/blush](${link})
» [/smile](${link})
» [/wave](${link})
» [/highfive](${link})
» [/handhold](${link})
» [/nom](${link})
» [/bite](${link})
» [/glomp](${link})
» [/slap](${link})
» [/kill](${link})
» [/happy](${link})
» [/wink](${link})
» [/poke](${link})
» [/dance](${link})
» [/cringe](${link})
╰────NSFW 🔞──────◇
» [/hentai](${link})
» [/hneko](${link})
» [/trap](${link})
» [/blowjob](${link})
╰──────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.menurpg = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'islamcmd ' + user_id
            },
            {
                text: 'Menu Game🎮',
                callback_data: 'menugame ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 Menu Rpg 」 
» [/kerja](${link})
» [/money](${link})
» [/bansos](${link})
» [/taxy](${link})
» [/mulung](${link})
» [/buy](${link})
» [/sell](${link})
» [/mining](${link})
» [/nabung](${link})
» [/berburu](${link})
» [/polisi](${link})
» [/berkebon](${link})
» [/crafting](${link})
» [/bet](${link})
» [/bonus](${link})
» [/buah](${link})
» [/bunuh](${link})
» [/bebas](${link})
» [/mancing](${link})
» [/repair](${link})
» [/fight](${link})
» [/gajian](${link})
» [/upgrade](${link})
» [/transfer](${link})
» [/selectskill](${link})
» [/sampah](${link})
» [/roket](${link})
» [/heal](${link})
» [/rob](${link})
» [/ojek](${link})
╰──────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.menugame = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menurpg ' + user_id
            },
            {
                text: '👙 Nsfw & Sfw',
                callback_data: 'nsfwcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 Menu Game 」
» [/asahotak](${link})
» [/caklontong](${link})
» [/family100](${link})
» [/bomb](${link})
» [/tebakanime](${link})
» [/lengkapikalimat](${link})
» [/math](${link})
» [/siapakahaku](${link})
» [/susunkata](${link})
» [/tebakbendera](${link})
» [/tebakgambar](${link})
» [/tebakgame](${link})
» [/tebakheroml](${link})
» [/tebakjkt48](${link})
» [/tebakkata](${link})
» [/tebakkimia](${link})
» [/tebaklagu](${link})
» [/tebaklirik](${link})
» [/tebaklogo](${link})
» [/tebaktebakan](${link})
» [/tekateki](${link})
» [/tictactoe](${link})
╰────────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.menugroup = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'nsfwcmd ' + user_id
            },
            {
                text: 'Anime 🃏',
                callback_data: 'animecmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 Menu Group 」
» [/kick](${link})
» [/add](${link})
» [/promote](${link})
» [/demote](${link})
» [/bukagc](${link})
» [/tutupgc](${link})
» [/pinchat](${link})
» [/unpin](${link})
» [/setbiogc](${link})
» [/setnamegc](${link})
» [/setppgc](${link})
» [/antilink](${link})
» [/welcome](${link})
» [/antispam](${link})
╰────────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.menufun = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menugroup ' + user_id
            },
            {
                text: 'Jasher 📨',
                callback_data: 'menujasher ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 Menu Fun 」
» [/cekkontol](${link})
» [/cekmemek](${link})
» [/wibucek](${link})
» [/artinama](${link})
» [/truth](${link})
╰────────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}
exports.menujasher = async (ndikz, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menufun ' + user_id
            },
            {
                text: 'Anime 🃏',
                callback_data: 'animecmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 Menu Jasher 」
» [/addjasher](${link})
» [/listjasher](${link})
» [/deljasher](${link})
» [/setjasher](${link})
» [/jasher](${link})
╰────────────◇
`
    await ndikz.replyWithPhoto({
            source: thumbnail
        }, {
            caption: caption,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
}

