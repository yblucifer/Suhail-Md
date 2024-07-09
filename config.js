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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_43_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk1LFxuICAgICAgICA1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICA1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NSxcbiAgICAgICAgNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMwLFxuICAgICAgICA1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjIzLFxuICAgICAgICA0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU4LFxuICAgICAgICA5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNyxcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyLFxuICAgICAgICA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMixcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjksXG4gICAgICAgIDYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc1LFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNixcbiAgICAgICAgMjE1LFxuICAgICAgICA4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAzMixcbiAgICAgICAgNjksXG4gICAgICAgIDEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyempucDNzUWNpZys2QkQ3U2IvOU9Nai8rK2RXNG1HK1BOc2ppQlVqb2FRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTS2RBQi1OZlFlLWh1TkltMTdZS2Z3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ0ZjVkNTM4LWVlM2UtNGUyNi1hYzM3LTYwZWZiY2RkNjA3OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICA1OCxcbiAgICAgIDI1MyxcbiAgICAgIDIzMyxcbiAgICAgIDQ5LFxuICAgICAgMjMwLFxuICAgICAgMTAwLFxuICAgICAgMjIwLFxuICAgICAgMTIzLFxuICAgICAgNzUsXG4gICAgICAxODQsXG4gICAgICAyMjUsXG4gICAgICAxNzQsXG4gICAgICAxODIsXG4gICAgICAxOTgsXG4gICAgICAyMDAsXG4gICAgICAxMyxcbiAgICAgIDUzLFxuICAgICAgMTc4LFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMjQzLFxuICAgICAgMjIsXG4gICAgICAyMjQsXG4gICAgICA3OCxcbiAgICAgIDE2NSxcbiAgICAgIDM2LFxuICAgICAgMjQ5LFxuICAgICAgMTA1LFxuICAgICAgMTk5LFxuICAgICAgNDEsXG4gICAgICAxNzgsXG4gICAgICAyMDMsXG4gICAgICAxNzUsXG4gICAgICA4MyxcbiAgICAgIDE0MCxcbiAgICAgIDI0MyxcbiAgICAgIDE1OSxcbiAgICAgIDIwNyxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxQjExUzJHTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2MDUyNTY2MDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MjEzNzk5MTI5MTk3OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWJLNDFjUTlmeTB0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwNlBkanNuV2RWS0FUSWtxbVZDYk03RXlYdW5TcXBQTFBtNWRrR2dYTUNJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpkQ3YyWTc2anNEdzdFRW8vL2tOaHU5WGQyV01tS0d5bVF0anpzTkcwbEFSaEZDdUNFSTczdHR5bGRXS1RJNnRJK1hMZWEvMlVTVUFkekowK0tGWUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlmeFZ4QmRlQWxvMDNYSVBRZXhDVy9WaU1jY0VjVnAzNnQwTnpBSFFkeTRkK2VhUTE3SllUMStCSmIwbDErU1haZks4ZS9zVVYyeERsS3JUZElPV0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjA1MjU2NjA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUzMjYwMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
