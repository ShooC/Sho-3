let handler = async (m, { conn }) => {
let caption = `Mohon salam kak, jangan ngomong p kalo chat 🙏`

conn.send2But( m.chat, caption, wm, `Assalamualaikum`, `assalamualaikum`, `Menu`, `.menu`, m)
       }
handler.customPrefix = /^(ppp|pe|p|pp|pee)$/i
handler.command = new RegExp

module.exports = handler
