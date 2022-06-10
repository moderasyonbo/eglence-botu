const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
  

  const csfetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let embed = new Discord.MessageEmbed()
.setTitle("Godzilla - Dolar Kuru Yükleniyor!")
.setDescription("Dolar kuru yükleniyor..")
.setColor("RED")
message.channel.send(embed).then(async msg => {    
setTimeout(() => {
    csfetch("https://api.bigpara.hurriyet.com.tr/doviz/headerlist/anasayfa").then(async r => {
    const json = await r.json();
    const dolarobj = json.data.filter(c => c.SEMBOL=="USDTRY")[0]
if (dolarobj.SATIS){
  let embed2 = new Discord.MessageEmbed()
  .setTitle("Godzilla - Güncel Dolar")
  .setDescription(`Güncel Dolar Kuru: **${dolarobj.SATIS}TL**`)
 .setColor("RED")
 .setImage("https://media-cdn.t24.com.tr/media/library/2021/10/1633892793251-baris-soydan.png") 
 msg.edit(embed2)
      } else {
        
      }
})
}, 2000)
  })
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "dolar"
}