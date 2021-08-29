module.exports = ({
    name: "unjail",
    code: `$title[Kişi jailden çıkarıldı.]
$description[$username[$mentioned[1;yes]] isimli kişi jailden çıkarıldı ve jail rolü kaldırıldı.]
$footer[Jailden çıkaran yetkili: $username;$authorAvatar]
$color[303136]
$channelSendMessage[$getServerVar[jaillog];{title:Kullanıcı jailden Çıkarıldı}{description:Bir kullanıcı jailden çıkarıldı.

Jaildan çıkarılan cezalı : $username[$mentioned[1;yes]]

Jaili bitiren yetkili : $username}{footer:$username}{color:303136}]
$takeRole[$mentioned[1;yes];$getServerVar[jailrol]]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[jailrol]]==false;{title:Hata!}{description:Kullanıcı zaten jailde değil!}{color:RED}]
$onlyIf[$hasRole[$authorID;$getServerVar[jailyetkili]]==true;{title:Hata!}{description:Bu komutu sadece $roleName[$getServerVar[jailyetkili]] rolüne sahip olanlar kullanabilir!}{color:RED}.]
$onlyBotPerms[manageroles;{title:Hata!}{description:Bu komutu kullanabilmem için **Rolleri Yönet** yetkisine sahip olmam gerekiyor!}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823199962136576060/unknown.png}],
$onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.com/invite/K8CBJgH) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}] 
`
})