module.exports = ({
    name: "jailyetkili",
    code: `$title[Başarılı!]
$description[Jail yetkilisi rolü başarıyla <@&$mentionedRoles[1]> olarak ayarlandı!]
$color[303136]
$setServerVar[jailyetkili;$mentionedRoles[1]]
$onlyPerms[manageroles;{title:Hata!}{description:Bu komutu sadece **Rolleri Yönet** yetkisine sahip olanlar kullanabilir}{color:RED}]
$onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.com/invite/K8CBJgH) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
`
})