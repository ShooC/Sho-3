let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/hijaber'
    conn.sendButtonImg(m.chat, api-hyzer, 'Done By Slime Bot', wm2, 'Next', '.hijaber', m)
}
handler.help = ['hijaber']
handler.tags = ['asupan']
handler.command = /^(hijaber)$/i
handler.limit = true

module.exports = handler
