module.exports = ({
    name: "jailkanal",
    code: `$title[Başarılı!]
$description[Jail kanalı başarıyla <#$mentionedChannels[1]> olarak ayarlandı!]
$footer[Noibot Jail Sistemi]
$color[303136]
$setServerVar[jailkanal;$mentionedChannels[1]]
$onlyPerms[managechannels;{title:Hata!}{description:Bu komutu sadece **Kanalları Yönet** yetkisine sahip olanlar kullanabilir!}{color:RED}]
$onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.com/invite/K8CBJgH) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
`

})