let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/korea'
    conn.sendButtonImg(m.chat, api-hyzer, 'Done', wm2, 'Next', '.korea', m)
}
handler.help = ['korea']
handler.tags = ['asupan']
handler.command = /^(korea)$/i
handler.limit = 3
module.exports = handler

