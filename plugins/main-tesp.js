let handler = async (m, { conn }) => {
let caption = `Pa pe pa pe, Utamakan Salam Bkn P Ajg🤬`

conn.send2But( m.chat, caption, wm, `Menu`, `.menu`, `Donasi`, `.donasi`, m)
       }
handler.customPrefix = /^(ppp|pe|p|pp|pee)$/i
handler.command = new RegExp

module.exports = handler
