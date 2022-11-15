let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/cecan'
    conn.sendButtonImg(m.chat, api-hyzer, 'By Slime Bot', wm2, 'Next', '.cecan', m)
}
handler.help = ['cecan']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i
handler.limit = 3

module.exports = handler
