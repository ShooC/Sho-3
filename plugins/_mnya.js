// DEFAULT BASE By Nurutomo
// POWERED By KrizynOfc
// MAU BIKIN MENU LIST DIPLUGINS LAIN JUGA BISA
// CONTOH NYA ADA DIMENU LAIN

//━━━━━━━━[ DEFAULT SETTINGS ]━━━━━━━━//
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let jimp = require('jimp')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')

let tags = {
  'main': 'UTAMA',
  'owner': 'OWNER',
  'advanced': 'ADVANCED',
  'anime': 'ANIME',
  'game': 'GAME',
  'sticker': 'STICKER & CONVERT',
  'downloader': 'DOWNLOADER',
  'xp': 'EXP & LIMIT',
  'fun': 'FUN',
  'github': 'GITHUB',
  'group': 'GROUP',
  'image': 'IMAGE',
  'info': 'INFO',
  'internet': 'INTERNET',
  'islam' : 'ISLAMI',
  'kerang': 'KERANG',
  'maker': 'MAKER',
  'absen': 'ABSEN',
  'Pengubah Suara': 'PENGUBAH SUARA',
  'premium': 'PREMIUM',
  'quotes' : 'QUOTES',
  'rpg': 'RPG',
  'stalk': 'STALK',
  'shortlink': 'SHORT LINK',
  'tools': 'TOOLS',
  'vote': 'VOTING',
  'nsfw': 'NSFW', 
  'asupan': 'ASUPAN', 
  'random': 'RANDOM', 
  'textpro': 'TEXT PRO',  
  }
	
//━━━━━━━━[ DEFAULT MENU ]━━━━━━━━//
const defaultMenu = {
  before: `%readmore`.trimStart(), 
  header: '╓─┈──┈≻「 %category 」',
  body: '┆  ➦ %cmd %isPremium %islimit',
  footer: '╙─┈──┈──┈──┈──┈─┈\n\n', 
  after: `
%admen
`,
}

//━━━━━━━━[ CATEGORY ]━━━━━━━━//
let handler = async (m, { conn, usedPrefix: _p, args, command, DevMode }) => {
let hy = fs.readFileSync('./sound/menu.mp3')
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
try {

// DEFAULT MENU
      let dbki = `${global.dbki}`
      let dbka = `${global.dbka}`
      let kime = `${global.kime}`
      let ki = `${global.ki}`
      let dbki2 = `${global.dbki2}`
      let dbka2 = `${global.dbka2}`
      let dba = `${global.dba}`
      
// COMMAND MENU
      let bhki = `${global.bhki}`
      let bhka = `${global.bhka}`
      let bdy = `${global.bdy}`
      let ftb = `${global.ftb}`
      let admen = `${global.admen}`
      
      
//━━━━━━━━[ DATABASE USER ]━━━━━━━━//
  
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let namebot = global.namebot
    let hy = fs.readFileSync('./sound/menu.mp3')
    let name = conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let premium = global.db.data.users[m.sender].premium
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let tag = `wa.me/${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

//━━━━━━━━[ SETTING HELP ]━━━━━━━━//
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })

//━━━━━━━━[ FAKE REPLY ]━━━━━━━━//

let media = global.media
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Hai 🎲"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;SlimeBott;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `${ucapan()}`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(media)).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
   }
   }
   }

let mnya = `     「 Slime Bot 」

❍⃕  I N F O C M D

✗ Ⓟ = Premium
✗ Ⓛ = Limit

❍⃕  I N F O  B O T

✗ Mode : ${global.opts['self'] ? 'Self' : 'public'}
✗ Uptime : ${uptime}
✗ User : *${Object.keys(global.db.data.users).length}* Pengguna

❍⃕  I N F O  U S E R
✗ Name : ${name}
✗ Status : ${global.prem ? 'Premium' : 'Gratisan'}
✗ Limit : ${limit}
✗ Money : ${money}
✗ Role : ${role}
✗ Level : ${level}
${readMore}`

	
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                  .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, wib,
      dbki, dbka, kime, ki, dbki2, dbka2, dba, bhki, bhka, bdy, ftb, admen,
      readmore: readMore
    }
    
//━━━━━━━━[ BUTTON MENU ]━━━━━━━━//
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

// Krizyn Baik budi ini button Doc ADS
//const _0x5313da=_0x5833;(function(_0x260e43,_0x257ab4){const _0x503b1e=_0x5833,_0xd87a13=_0x260e43();while(!![]){try{const _0x3c8b40=parseInt(_0x503b1e(0x1da))/0x1*(parseInt(_0x503b1e(0x1c9))/0x2)+-parseInt(_0x503b1e(0x1ca))/0x3*(-parseInt(_0x503b1e(0x1cb))/0x4)+parseInt(_0x503b1e(0x1d1))/0x5+-parseInt(_0x503b1e(0x1ce))/0x6*(parseInt(_0x503b1e(0x1d3))/0x7)+-parseInt(_0x503b1e(0x1d9))/0x8*(-parseInt(_0x503b1e(0x1d4))/0x9)+parseInt(_0x503b1e(0x1d7))/0xa+-parseInt(_0x503b1e(0x1d2))/0xb;if(_0x3c8b40===_0x257ab4)break;else _0xd87a13['push'](_0xd87a13['shift']());}catch(_0x2e86ae){_0xd87a13['push'](_0xd87a13['shift']());}}}(_0xac0b,0x9a270));const buttonMessage={'document':{'url':gc},'mimetype':global[_0x5313da(0x1cc)],'fileName':''+ucapan(),'fileLength':fsizedoc,'pageCount':fpagedoc,'contextInfo':{'forwardingScore':0x22b,'isForwarded':![],'externalAdReply':{'showAdAttribution':!![],'mediaUrl':global['instagram'],'mediaType':0x2,'previewType':_0x5313da(0x1d6),'title':tb,'body':wm2,'thumbnail':await(await fetch(media))[_0x5313da(0x1c8)](),'sourceUrl':gc}},'caption':text,'footer':wm,'buttons':[{'buttonId':'.donasi','buttonText':{'displayText':_0x5313da(0x1cd)},'type':0x1},{'buttonId':_0x5313da(0x1cf),'buttonText':{'displayText':_0x5313da(0x1d5)},'type':0x1}],'headerType':0x6};function _0x5833(_0x2462fe,_0x5b86f1){const _0xac0b7e=_0xac0b();return _0x5833=function(_0x58334e,_0xde8e5d){_0x58334e=_0x58334e-0x1c8;let _0x19f059=_0xac0b7e[_0x58334e];return _0x19f059;},_0x5833(_0x2462fe,_0x5b86f1);}await conn[_0x5313da(0x1d0)](m[_0x5313da(0x1d8)],buttonMessage,{'quoted':m});function _0xac0b(){const _0x146b4b=['42FVQhCm','3YOVjEg','4001436ZAnWDJ','ddocx','Donasi','150gycguR','.owner','sendMessage','3334420XygTyH','32703748UQMNeS','6713HuAlrz','13410KnLwWm','Owner','pdf','10421530PjPRjj','chat','80dZDWSf','43055rzNNec','buffer'];_0xac0b=function(){return _0x146b4b;};return _0xac0b();}
	
conn.reply(m.chat, `*🇱🇷 Play bots wisely*\n*🇲🇨 Bermain bot dengan bijak*\n*🇯🇵 ボットを賢くプレイする*\n🇰🇷 현명하게 봇 플레이`, ftroli)
await conn.send2ButtonLoc(m.chat, imgloc, mnya, text.trim(), `Donation`, `${_p}donasi`, `Creator`, `${_p}owner`, m)
 await conn.sendFile(m.chat, hy, 'menu.mp3', null, fkontak, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true,// true diatas ga work, sebab dipaksa tanpa convert ;v
contextInfo: { 
         externalAdReply: { 
         showAdAttribution: true,
 	     sourceUrl: `${pickRandom([`https://chat.whatsapp.com/G0ZPtvZHk0lFJxU5qDpeR4`, `tiktok.com/@itsshooc`])}`,
           title: `${ucapan()}`,  
            body: wm3, 
           thumbnail: await (await fetch(`${pickRandom(['https://telegra.ph/file/e2fd6875a41cce1700198.jpg', 'https://telegra.ph/file/f54ecc7b4ce7b0d430863.jpg'])}`)).buffer()
}
     }
})
} catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(m|menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3
module.exports = handler

//━━━━━━━━[  JANGAN DI UBAH  ]━━━━━━━━//
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat Dini hari 🌛"
  if (time >= 4) {
    res = "Selamat Pagi 🌤"
  }
  if (time > 10) {
    res = "Selamat Siang 🌞"
  }
  if (time >= 15) {
    res = "Selamat Sore ⛅"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌙"
  }
  return res
}
