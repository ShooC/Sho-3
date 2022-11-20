 let fs = require('fs')
 
 let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
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
  
   let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
   let totalreg = Object.keys(global.db.data.users).length
    
   let ehe = `${ucapan()}
   `
   
    let inpo = `
╭─❒〘 *I N F O* 〙
├◌ *Fitur By Sho*
├◌ *Jangan lupa donasi ya*
╰─❒

╭─❒〘 *N O T E* 〙
├◌ *Jangan spam*
├◌ *Fitur ini menggunakan limit*
├◌ *Ketik #limit buat cek limit*
├◌ *For fun only*
╰─❒`.trim()

    const sections = [
   {
	title: `Game ✦-------`,
	rows: [
	    {title: "Susunkata", rowId: '.susunkata'},
	    {title: "Tebak Kata", rowId: '.tebakkata'},
	{title: "Asah Otak", rowId: '.asahotak'},
	{title: "Cak lontong", rowId: '.caklontong'},
	{title: "Siapakah aku", rowId: '.siapakahaku'},
        {title: "Menu Bot", rowId: '.menu'},
  ]},]
  const listMessage = {
  text: ehe,
  footer: inpo,
  title: '',
  buttonText: "Klik",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m })

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(listgame|gamelist|game|menugame)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Slime Bot"
  if (time >= 4) {
      res = "Slime Bot Whatsapp"
  }
  if (time >= 12) {
      res = "Slime Bot By Sho"
  }
  if (time >= 15) {
      res = "Simple Bot By Sho"
  }
  if (time >= 19) {
      res = "⛱️ Slime Bot"
  }
  return res

}
