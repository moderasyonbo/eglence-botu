const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')
module.exports.run = async (bot, message, args) => {
    const text = args.slice().join(' ');
    if (!text) {
        return message.channel.send(
            ':rednono: Lütfen bir metin yaz.',
        );
    }

    const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${text};`

    let response;
    try {
        response = await fetch(url).then(res => res.json());
    }
    catch (e) {
        return message.channel.send(':rednono: Ufak bir hata,lütfen daha sonra tekrar dene!');
    }
    const attachment = new MessageAttachment(response.message, 'clyde.png');
    return message.channel.send(attachment);

}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kn"],
    permLevel: 0
  };
   
  module.exports.help = {
    name: 'clyde',
    category: 'Kullanıcı',
    description: 'Anime Karakterlerinin Posterine Yazı Koyar',
    usage: 'trump '
  };