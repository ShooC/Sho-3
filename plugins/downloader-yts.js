let yts = require('yt-search') 
 let handler = async (m, { conn, text }) => { 
   if (!text) return conn.reply(m.chat, 'Cari apa?', m) 
   let results = await yts(text) 
   let teks = results.all.map(v => { 
     switch (v.type) { 
       case 'video': return ` 
 💌 *Title :* ${v.title}  
💻 *Url :* (${v.url}) 
⏰ *Durasi :* ${v.timestamp}
📤 *Diupload :* ${v.ago}
👥 *View :* ${v.views} Penonton
  `.trim() 
       case 'channel': return ` 
 🏮 *Name :* ${v.name}
💻 *Url :* (${v.url}) 
👥 *Subscriber :* ${v.subCountLabel} (${v.subCount}) Subscriber
🎥 *Video :* ${v.videoCount} video
 `.trim() 
     } 
   }).filter(v => v).join('\n┄┈┈┈┈┈┈┈┈┈┈┄┈┈┈┈┈┈┈┈┈┈\n') 
  conn.sendButtonDoc(m.chat, '*────────「 Youtube Search 」────────*\n\n' + teks, wm, 'Menu', '.menu', m, {quoted: m, contextInfo: { 
         externalAdReply: { 
             title: global.wm,
             body: 'Apa Benar Ini Yang Ada Cari?',
             description: 'Apa Benar Ini Yang Ada Cari?', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://telegra.ph/file/40a2e4c7bf0aff05f62c6.jpg')).buffer(), 
          mediaUrl: `https://chat.whatsapp.com/L6b4QjsMpgn8vpecqZltBe` 
         } 
      } 
   })
 } 
 handler.help = ['ytsearch <query>'] 
 handler.tags = ['tools', 'internet'] 
 handler.command = /^yts(earch)?$/i 
  
 module.exports = handler
