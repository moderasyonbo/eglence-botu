const Discord = require("discord.js");


exports.run = (client, message, params) => {
  if (!message.guild) {
    const emed = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        "**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**"
        
      );

    return message.author.send(emed);
  }
  if (message.channel.type !== "dm") {
    const embed = new Discord.MessageEmbed()

      .setTitle(':police_car:'+ message.author.username + " Polis Geliyor!!")
      .setColor("RANDOM")
      .setTimestamp()
      .setImage(
        "http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif"
      );

    return message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['polis','police','polis-çağır','memur','ara'],
  permLevel: 0
};

exports.help = {
  name: "ara-155",
  description: "155",
  usage: "ara155"
};