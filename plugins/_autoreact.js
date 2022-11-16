let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['❤️','💓','💞','💖'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /^(sayang|ayangg|loveyou|iloveyou)$/i
handler.command = new RegExp
  
handler.mods = false

module.exports = handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
