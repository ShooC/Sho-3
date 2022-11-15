let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/vietnam'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'Next', '.vietnam', m)
}
handler.help = ['vietnam']
handler.tags = ['asupan']
handler.command = /^(vietnam)$/i
handler.limit = 3
module.exports = handler
