module.exports = {

name: "yetkili", 

aliases: ["moderasyon"], 
code: `

$title[Yetkili Komutlarım]
$description[
**-ban @kişi sebep**: \`Etiketlediğiniz kişiyi sunucudan yasaklar.\`

**-forceban ID sebep**: \`ID'si yazolan kişiyi sunucudan yasaklar.\`

**-kick @kişi sebep**: \`Etiketlediğiniz kişiyi sunucudan atar.\`

**-jail @kişi**: \`Etiketlediğiniz kişiyi jaile gönderir. Ama öncesinde jail rolü ve jail yetkilisi rolü ayarlammalıdır.\`

**-mute @kişi sebep**: \`Etiketlediğiniz kişiyi susturur. Ama öncesinde mute rolü ayarlanmalıdır.\`

$customEmoji[noibot_unlem]|Modlog sistemi için \`-log-sistemi\` komutunu kullanınız.] 
$footer[Noibot daima hizmetinizde!] $color[B89AFF]
`
}

