/*
Made by https://github.com/balhisyhrl
*/
const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Mau pass nya apa kk?\nContoh : ${usedPrefix + command} pass`
  let textfilter = text.toLowerCase().replace(listkatakotor, 'astaghfirullah')
  let res = await fetch(global.API('https://anonyzoom.herokuapp.com', '/index.php', {
    pass: textfilter
  }))
  //if (!res.ok) throw await m.reply('error')
  let json = await res.json()
  if (json.Join_URL == '') {
      throw 'API ERROR'
  } else {
    let zoomA = `
*[ ZOOM MEETING GENERATOR ]*\n
*Link Zoom* : ${json.Join_URL}\n
*Password* : ${json.Password}\n
*Start Time* : ${json.Start_Time}\n
*Durasi (Menit)* : ${json.Duration}`
    await conn.reply(m.chat, zoomA, m)
    //conn.reply(m.chat, hashh, null)
  }
}

handler.help = ['zoom <pass>']
handler.tags = ['sptools']
handler.command = /^(zoom|zoomgen)$/i

module.exports = handler
