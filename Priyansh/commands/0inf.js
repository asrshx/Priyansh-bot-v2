module.exports.config = {
	name: "inf",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/iit7sl4.jpeg", "https://i.imgur.com/fGLKxjH.gif", "https://i.imgur.com/lmxK9dq.jpeg", "https://i.imgur.com/dP8RlXz.jpeg", "https://i.imgur.com/NILOrbu.jpeg", "https://i.imgur.com/YSMgWv7.jpeg", "https://i.imgur.com/NDK8oJZ.jpeg", "https://i.imgur.com/121yKVj.jpeg",];
var callback = () => api.sendMessage({body:`✦𝗔𝗗𝗠𝗜𝗠 𝗔𝗡𝗗 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡✦

⁂BoT NaMe ⊂◉‿◉: ${global.config.BOTNAME}

✡BoT Prefix ◉‿◉: ${global.config.PREFIX}

༻𝐎𝐖𝐍𝐄𝐑:- ☞꧁𓊈𒆜HENRY XWD𒆜𓊉꧂☜ contact my owner for any issue.😁

༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒:- ☞ https://www.facebook.com/Henry.inxide
 
➟UPTIME☆

✬Today Is: ${juswa} 

➳BoT Is Running ${hours}:${minutes}:${seconds}.

✫Thanks For Using ${global.config.BOTNAME} BoT!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
				     
