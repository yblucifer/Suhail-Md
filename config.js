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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_54_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDUyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICAxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICA1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDkzLFxuICAgICAgICAyNyxcbiAgICAgICAgODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzUsXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidk1vUEJQZGMrd3M1UkErVXpublgwcXg3a1BFVHNoS1Q4QmEzTm41akxWZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN2MxLXBXanFRbldMdmRVSElpZS13Z1wiLFxuICBcInBob25lSWRcIjogXCI3MDM5ZGRmNC1mODU2LTQ0YmMtODhhMy03N2Y2OTM1YWEyMWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgNTAsXG4gICAgICA1MixcbiAgICAgIDIwMixcbiAgICAgIDM4LFxuICAgICAgMjM4LFxuICAgICAgNTAsXG4gICAgICAxOTcsXG4gICAgICAyMDksXG4gICAgICAxNzYsXG4gICAgICAyMDUsXG4gICAgICA5MyxcbiAgICAgIDI2LFxuICAgICAgNzUsXG4gICAgICAyMDEsXG4gICAgICAxMTAsXG4gICAgICAxMDgsXG4gICAgICAxLFxuICAgICAgNTYsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgMTUxLFxuICAgICAgMjE4LFxuICAgICAgMTQ2LFxuICAgICAgMTM3LFxuICAgICAgMjcsXG4gICAgICA4NyxcbiAgICAgIDIwNCxcbiAgICAgIDIyMixcbiAgICAgIDc4LFxuICAgICAgOTMsXG4gICAgICAyMDksXG4gICAgICAxMzksXG4gICAgICAxMixcbiAgICAgIDE3LFxuICAgICAgNjYsXG4gICAgICAxNyxcbiAgICAgIDE2NixcbiAgICAgIDUxLFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlc5WkJZMjdYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYwNTI1NjYwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQyMTM3OTkxMjkxOTc6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWEs0MWNRbDRYU3NnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjA2UGRqc25XZFZLQVRJa3FtVkNiTTdFeVh1blNxcFBMUG01ZGtHZ1hNQ0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM0tibzhtWG9wZllTL2hNZmdpTTV5bk9Dbi82VHpOQUhzVVpDWjIyM1dKd2tFc3dCRjVBcklxT2pVaW41WFhCM2pUd1J0aEZIVmRGN1hPWGJrMTdLRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM3dJSUNKTlo1eGdnbDJPb0RYQVlYN2xDRTA2eW9nakNOOVE0WStzempSWVVJeWw2QytvTUI1cUZLWHJKZTc5VWxZaytzRTE2Y3RYakViZnZ5TDNjRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MDUyNTY2MDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2ODE0NDkxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
