let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/loli'
conn.sendFile(m.chat, supa, null, 'Done', m)
}
handler.help = ['asupanloli']
handler.tags = ['asupan']
handler.command = /^(asupanloli)$/i
handler.limit = true

module.exports = handler
