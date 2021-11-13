module.exports = ({
    name: "jail",
    code: `$if[$userRoles[$mentioned[1]]!=]
$title[Kişi jaile atıldı!]
$description[$username[$mentioned[1;yes]] isimli kişi ceza yedi ve hapse atıldı. Kullanıcı artık jailde.]
$footer[Jail cezası veren yetkili: $username;$authorAvatar]
$color[303136]
$channelSendMessage[$channelID;{title:Kullanıcı jaile katıldı}{description:Kullanıcı jaile atıldı

Jaile atılan cezalı: $username[$mentioned[1;yes]]

Cezayı veren yetkili: $username}{footer:$username}{color:303136}]
$takeRoles[$mentioned[1];$joinSplitText[;]]
$textSplit[$userRoles[$mentioned[1];ids];, ]
$else
$title[Kişi jaile atıldı]
$description[$username[$mentioned[1;yes]] isimli kişi ceza yedi ve hapse atıldı. Kullanıcı artık jailde]
$footer[Jaile atan yetkili: $username;$authorAvatar]
$color[303136]
$channelSendMessage[$channelID;{title:Kullanıcı jaile katıldı}{description:Kullanıcı jaile atıldı

Jaile atılan cezalı : $username[$mentioned[1;yes]]

Cezayı veren Gardiyan Yetkili : $username}{footer:$username}{color:303136}]
$endif
$onlyIf[$hasRole[$mentioned[1];$getServerVar[jailrol]]!=true;{title:Hata!}{description:Kullanıcı zaten jailde!}{color:RED}]
$onlyIf[$hasRole[$authorID;$getServerVar[jailyetkili]]==true;{title:Hata!}{description:Bu komutu sadece $roleName[$getServerVar[jailyetkili]] rolüne sahip olanlar kullanabilir!}{color:RED}]
$onlyBotPerms[manageroles;{title:Hata!}{description:Bu komutu kullanabilmem için **Rolleri Yönet** yetkisine sahip olmam gerekiyor!}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823199962136576060/unknown.png}]

`
})