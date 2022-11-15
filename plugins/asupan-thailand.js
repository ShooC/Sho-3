let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/thailand'
    conn.sendButtonImg(m.chat, api-hyzer, 'Done', wm2, 'Nezt', '.thailand', m)
}
handler.help = ['thailand']
handler.tags = ['asupan']
handler.command = /^(thailand)$/i
handler.limit = 3
module.exports = handler
