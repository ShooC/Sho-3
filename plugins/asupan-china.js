let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/china'
    conn.sendButtonImg(m.chat, api-hyzer, 'Done', wm2, 'Next', '.china', m)
}
handler.help = ['china']
handler.tags = ['asupan']
handler.command = /^(china)$/i
handler.limit = 3
module.exports = handler
