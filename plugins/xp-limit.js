let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: wm, 
                            }
                          }
                        }
conn.sendBut(m.chat, `${global.db.data.users[who].limit} Limit Tersisa`, wm, 'Beli Limit', '.shop buy limit', fdoc)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler
