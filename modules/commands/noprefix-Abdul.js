const fs = require("fs");
module.exports.config = {
	name: "arman",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Abdul")==0 || event.body.indexOf("ABDUL")==0 || event.body.indexOf("Abdul JI")==0 || event.body.indexOf("ABDUL JI")==0) {
		var msg = {
				body: "𝗛𝗲 𝗶𝘀 𝗕𝗲𝘀𝘁 𝗙𝗿𝗶𝗲𝗻𝗱 𝗢𝗳 𝗠𝘆 𝗕𝗼𝘀𝘀 𝗣𝗿𝗶𝘆𝗮𝗻𝘀𝗵𝗶 \n 💞 \n 🌹Abdul Khan😘♥️🌹",
				attachment: fs.createReadStream(__dirname + `/noprefix/arman.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍿", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
