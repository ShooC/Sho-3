let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/indonesia'
    conn.sendButtonImg(m.chat, api-hyzer, 'Done', wm2, 'Next', '.indonesia', m)
}
handler.help = ['indonesia']
handler.tags = ['asupan']
handler.command = /^(indonesia)$/i
handler.limit = 3
module.exports = handler
