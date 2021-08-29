module.exports = ({
    name: "jaillog",
    code: `$title[Başarılı!]
$description[Jail log kanalı başarıyla <#$mentionedChannels[1]> olarak ayarlandı!]
$color[303136]
$setServerVar[jaillog;$mentionedChannels[1]]
$onlyPerms[managechannels;Bu komutu sadece **Kanalları Yönet** yetkisine sahip olanlar kullanabilir]
$onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.com/invite/K8CBJgH) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
`
})