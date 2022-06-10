const Canvas = require("canvas");
const Discord = require("discord.js");
const GIFEncoder = require("gifencoder");
exports.run = async (client, message, args) => {
  const user = message.mentions.users.first() || message.author;
  const base = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/832356192432685096/843841582322024468/triggered.png"
  );
  const img = await Canvas.loadImage(
    user.avatarURL({ dynamic: true, size: 2048, format: "png" })
  );
  const GIF = new GIFEncoder(256, 310);
  GIF.start();
  GIF.setRepeat(0);
  GIF.setDelay(15);
  const canvas = Canvas.createCanvas(256, 310);
  const ctx = canvas.getContext(`2d`);
  const BR = 20;
  const LR = 10;
  for (var i = 0; i < 9; i++) {
    ctx.clearRect(0, 0, 256, 310);
    ctx.drawImage(
      img,
      Math.floor(Math.random() * BR) - BR,
      Math.floor(Math.random() * BR) - BR,
      256 + BR,
      310 - 54 + BR
    );
    ctx.fillStyle = `#FF000033`;
    ctx.fillRect(0, 0, 256, 310);
    ctx.drawImage(
      base,
      Math.floor(Math.random() * LR) - LR,
      310 - 54 + Math.floor(Math.random() * LR) - LR,
      256 + LR,
      54 + LR
    );
    GIF.addFrame(ctx);
  }
  GIF.finish();
  let attach = new Discord.MessageAttachment(
    GIF.out.getData(),
    "triggered.gif"
  );
  message.channel.send(attach);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["triggered"],
  permLevel: 0,
};
exports.help = {
  name: "triggered",
  description: "triggered",
  usage: "triggered",
};