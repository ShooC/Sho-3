let xfar = require('xfarr-api')
let handler = async (m, { usedPrefix, command, conn, args }) => {
	 	  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} image`
xfar.Pinterest(args[0]).then(async data => {
let pincpt = `🔗 Link media : ${data.url}\n⫹⫺ Done Kak`
conn.sendFile(m.chat,data.url, 'pin.jpg', pincpt,m)})
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet', 'downloader']
handler.command = /^(pinterest)$/i
handler.limit = true

module.exports = handler
