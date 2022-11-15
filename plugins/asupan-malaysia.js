let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/malaysia'
    conn.sendButtonImg(m.chat, api-hyzer, 'Done', wm2, 'Next', '.malaysia', m)
}
handler.help = ['malaysia']
handler.tags = ['asupan']
handler.command = /^(malaysia)$/i
handler.limit = 3
module.exports = handler
