let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `β ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.sendBut(m.chat, `*γ ABSEN γ*

πTanggal: ${date}
${conn.absen[id][2]}

β *Yang sudah absen:*
β 
β Total: ${absen.length}
${list}
β 
βββββ
`, wm, 'β±οΈ Absen', '.absen', m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.group = true
module.exports = handler
