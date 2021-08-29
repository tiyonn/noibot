module.exports = ({
    name: "afk",
    code: `$setGlobalUserVar[afk;evet]
$setGlobalUserVar[afkc;0]
$setGlobalUserVar[afks;$message]
$description[Başarıyla AFK moduna girdin. Artık biri seni etiketlediğinde AFK sebebini söyleyeceğim!]
$color[RANDOM]
$onlyIf[$message!=;Lütfen bir AFK sebebi belirtin.]
$onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.com/invite/K8CBJgH) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
`
})