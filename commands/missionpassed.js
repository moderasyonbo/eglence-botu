const {MessageAttachment} = require('discord.js');
var Jimp = require('jimp');

module.exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author


  const bg = await Jimp.read(user.displayAvatarURL({ format: 'png' }));
  bg.resize(295, 295)
  bg.greyscale()
  bg.gaussian(1)

  const userimg = await Jimp.read("https://cdn.discordapp.com/attachments/448115127951294466/508244450141667329/missnpasted.png")
userimg.resize(295, 295)
bg.composite(userimg, 0, 0).write(`./img/missionpassed/${user.id}.png`);

  setTimeout(function () {
    message.channel.send({ files: [new MessageAttachment(`./img/missionpassed/${user.id}.png`)] }).catch(e => { })
  }, 1000)

    };

exports.conf = {
  aliases: []
}

exports.help = {
  name: 'mp'
};