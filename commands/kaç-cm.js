const Discord = require ("discord.js")
const client = new Discord.Client();

exports.run = (client, message) => {
 
 message.channel.send("Ölçüyorummm").then(message => {
 var çalmayın = ["1","2","3","4","4","5","6","7","8","9","10","11","12","13","140","150","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100"]
  var Covid = çalmayın[Math.floor(Math.random() * çalmayın.length)];
  if(Covid < 10) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${Covid} :(`)
    .setTitle("Godzilla - Kaç-Cm")
    .setTimestamp()
  );
  if(Covid >= 10) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${Covid} Yakında seninde uzar :flushed:`)
    .setTitle("Godzilla - Kaç-Cm")
    .setTimestamp()
  );
  
  if(Covid >= 20) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${Covid} Geçmiş olsun`)
    .setTitle("Godzilla - Kaç-Cm")
    .setTimestamp()
  );
  
  if(Covid >= 30) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${Covid} F16 Mübarek`)
    .setTitle("Godzilla - Kaç-Cm")
    .setTimestamp()
  );
  if(Covid >= 50) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${Covid} Gökdelen :)`)
    .setTitle("Godzilla - Kaç-Cm")
    .setTimestamp()
  );
 });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kaç-cm",
  description: "",
  usage: ""
}; 