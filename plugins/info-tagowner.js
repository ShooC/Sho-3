let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let krizyn = 'https://telegra.ph/file/cd37b4f991d633caa6306.jpg'
await conn.send3ButtonImg(m.chat, krizyn, "=====『 TAG TERDETEKSI 』=====\n\nAda perlu apa kak manggil bang sho", '📮 Silahkan Pilih Button dibawah ini', 'Menu', '.menu', m)
                        
}
handler.customPrefix = /(@+62 856-0783-1412|@+6285607831412|@6285607831412|@085607831412)/i
handler.command = new RegExp

module.exports = handler

//let handler = async (m, { conn }) => {
   //let krizyn = `https://telegra.ph/file/cd37b4f991d633caa6306.jpg`
//let caption = `Ada perlu apa panggil panggil bos saya, kangen yaa 🤪`
 
//conn.send3But( m.chat, krizyn, caption, `📮 Silahkan pilih Button dibawah ini`, `Menu`, `.menu`, `Sewa`, `.sewa`, `Group`, `.allgc`, m)
       //}
//handler.customPrefix = /@krizyn|@krizynofc|krizyn|krizynofc|kri|@kri|@kri aceh/i
//handler.command = new RegExp

//module.exports = handler\\
