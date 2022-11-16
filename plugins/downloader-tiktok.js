let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Berikan link tiktok'
m.reply('tunggu')
let res = await fetch(`https://botcahx.ddns.net/api/dowloader/tikok?url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { video, description, username } = json.result
await conn.sendFile(m.chat, video, 'tiktok.mp4', `
\n📜 *Deskripsi*: ${description}\n\n👾 *Username*: ${username}\n\n📮 *By*: Slime Bot
`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: false }})
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)$/i
handler.limit = true

module.exports = handler
