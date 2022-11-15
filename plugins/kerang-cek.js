let handler = async (m, { conn, usedPrefix, command, text }) => { 
let memek = 'https://a.uguu.se/VkhkiGAQ.png'
let anu =`
────〔 *${command}* 〕────

${command.replace('cek', '').toUpperCase()} Level *${Math.floor(Math.random() * 101)}*% 

Seberapapun *${command.replace('cek', '').toUpperCase()}* Mu
Tetap *Syukuri* itu :v`
 conn.sendButtonImg(m.chat, memek, anu, wm2, 'Menu', '.menu', m) 
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].map(v => v + 'cek')
handler.tags = ['kerang']
handler.command = /^(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy|lesbi|goblok|lesbi|overpower)cek/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
