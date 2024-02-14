const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "2348129859507"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'wizzychizzy20@gmail.com'
global.github = 'https://github.com/WolfieWTF/XLICON-MD'
global.location = 'Owerri NG'
global.gurl = 'false'https://www.instagram.com/wisdomohuche?igsh=cnV6amNuZGJtZTUz' // add your username
global.sudo = process.env.SUDO || '2348129859507' 
global.devs = '2348129859507';
global.website = 'https://github.com/WolfieWTF/XLICON-MD' //https://wa.me/2348129859507
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/96053700d8aede3fc3eb9.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  " ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '𝚆𝚘𝚕𝚏𝚒𝚎𝚆𝚃𝙵',
  packname:  process.env.PACK_NAME || 'whatsapp bot',
   caption: process.env.CAPTION === undefined ? "𝙒𝞗𝙇𝙁𝞘𝞢 𝙒𝙏𝙁" : process.env.CAPTION,
  botname:   process.env.BOT_NAME === undefined ? "𝙒𝞗𝙇𝙁𝞘𝞢-𝞛𝘿" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝚆𝚘𝚕𝚏𝚒𝚎𝚆𝚃𝙵' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ* 

_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ 
_Cʀєαtєd вყ : 𝑾𝒐𝒍𝒇𝒊𝒆𝑾𝑻𝑭 𝒕𝒆𝒄𝒉 𝒊𝒏𝒇𝒐_
_If any query : https://wa.me/2348129859507_' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
