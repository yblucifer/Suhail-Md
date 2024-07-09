const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_16_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyLFxuICAgICAgICA0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDkxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MixcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3LFxuICAgICAgICA2NixcbiAgICAgICAgMjM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICA1NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNyxcbiAgICAgICAgODcsXG4gICAgICAgIDMxLFxuICAgICAgICA1MixcbiAgICAgICAgMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqYlYrWEVhMzZxcTlhQTVhekRSNU14NndnVFZ1UDdkeithdWQwOUgrR3M4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1dXpWdlN6SlFHT3pTMTVkZ0FhZUl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ2MjJiZmM5LTc0ZTctNGU4Zi1iYzVmLTc5M2RhNWUxMGQxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDE3MSxcbiAgICAgIDE2LFxuICAgICAgODcsXG4gICAgICA3MCxcbiAgICAgIDEyMSxcbiAgICAgIDEzLFxuICAgICAgNTgsXG4gICAgICAzNCxcbiAgICAgIDIwNCxcbiAgICAgIDE4NCxcbiAgICAgIDI2LFxuICAgICAgMjIwLFxuICAgICAgMTU1LFxuICAgICAgMTA0LFxuICAgICAgMTE0LFxuICAgICAgMjYsXG4gICAgICAxODcsXG4gICAgICA0OSxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICA2OSxcbiAgICAgIDIyMyxcbiAgICAgIDUzLFxuICAgICAgMjQ0LFxuICAgICAgMzgsXG4gICAgICAxNjMsXG4gICAgICA2LFxuICAgICAgMzEsXG4gICAgICAyMzIsXG4gICAgICAxNjYsXG4gICAgICA3MyxcbiAgICAgIDEyOCxcbiAgICAgIDE1MixcbiAgICAgIDEwNyxcbiAgICAgIDE4NyxcbiAgICAgIDIyMixcbiAgICAgIDE4MyxcbiAgICAgIDk5LFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc2WldMTDZZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYwNTI1NjYwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MjEzNzk5MTI5MTk3OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lmSzQxY1F6WXkxdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMDZQZGpzbldkVktBVElrcW1WQ2JNN0V5WHVuU3FwUExQbTVka0dnWE1DST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrbHhJK3NZVWE4cnJPNXlzb3JQWUtOVG9NeEZNY0dzMTlpdW5qY0k5TFJHUE9sbEY4ckJUeCtGYVdpMlRVckVhTExYWnRCVHdHNkJJc0ExUmNvQ3dCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEYjdPSFVFWXFVNnUwVzRtbE9XdGtjOXlONEt4MkkrdXM2SkVOT21DQzMrTmhZMlF3L2gyUnRMNElmOWFZNHQvSis5SzVKSkFwMy83M2grdGdSSHZoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYwNTI1NjYwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTM0NjA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnNKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOc0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3RkVFaG4za3lOTVYzK1FGSWJsdUtxQ283Sy9HUUU1enJYMndjMFhsODc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDA4MzcxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
