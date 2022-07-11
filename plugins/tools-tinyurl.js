let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!text) throw 'url/link nya mana?\n\nContoh:\n${usedPrefix + command} https://instagram.com'

conn.reply(m.chat, await shortlink(text), m)
 
}

handler.help = ['tinyurl'].map(v => v + ' <link>')
handler.tags = ['tools','update']
handler.command = /^tinyurl$/i
handler.limit = true

module.exports = handler

async function shortlink(url){
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : 'INVALID URL'}