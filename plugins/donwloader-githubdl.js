let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'Usernamenya mana om'
if (!args[1]) throw 'Repo nya mana?'
if (!args[2]) throw 'Masukkan nama branch'
let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/${args[2]}.zip`
//F
m.reply(`compressing data to file zip*`)
conn.sendFile( m.chat, url, `${args[1]} ${args[2]}.zip`, null, m)

}
handler.help = ['githubdl']
handler.tags = ['github']
handler.command = /githubdl/i
handler.limit = true

module.exports = handler
