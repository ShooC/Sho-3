let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/japan'
    conn.sendButtonImg(m.chat, api-hyzer, 'Done By Slime Bot', wm2, 'Next', '.jepang', m)
}
handler.help = ['jepang']
handler.tags = ['asupan']
handler.command = /^(jepang)$/i
handler.limit = 3

module.exports = handler

