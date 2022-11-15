const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
 let moment = require('moment-timezone')
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
let handler = async (m, {conn}) => {
 let name = conn.getName(m.sender)
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ᯤ Sho
item.ORG: ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ
item1.TEL;waid=6285607831412:6285607831412@s.whatsapp.net
item1.X-ABLabel: Nomor Creator Bot
item2.EMAIL;type=INTERNET: shoo@gmail.com
item2.X-ABLabel:📫 Gmail
item3.ADR:;;📍 Bekasi - Indonesian;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📮 Location Owner
item4.URL:https://youtube.co
item4.X-ABLabel:Youtube
item5.URL:https//github.com
item5.X-ABLabel:Github
item6.URL:https//instagram.com
item6.X-ABLabel:Instagram
item7.URL:https://nekopoi.care
item7.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let krizyn = 'https://a.uguu.se/XbnfGVop.png'
await conn.send3ButtonImg(m.chat, hanz, `${ucapan()}\n\nHallo mypren, @${m.sender.split`@`[0]} 👋\nIni nomor owner bot nya\nJika ada kepentingan, chat owner\n\n⫹⫺ Tanggal : *${week} ${date}*\n⫹⫺ Waktu : *${wib}*`, wm3, 'Source', '.sc', 'Menu', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "⊙─❲ *SELAMAT DINIHARI* ❳"
  if (time >= 4) {
    res = "⊙─❲ *SELAMAT PAGI* ❳"
  }
  if (time > 10) {
    res = "⊙─❲ *SELAMAT SIANG* ❳"
  }
  if (time >= 15) {
    res = "⊙─❲ *SELAMAT SORE* ❳"
  }
  if (time >= 18) {
    res = "⊙─❲ *SELAMAT MALAM* ❳"
  }
  return res
}
