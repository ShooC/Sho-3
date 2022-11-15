let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/santuy'
conn.sendFile(m.chat, supa, null, 'Done', m)
}
handler.help = ['santuy']
handler.tags = ['asupan']
handler.command = /^(santuy)$/i
handler.limit = 5

module.exports = handler
