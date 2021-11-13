module.exports = ({
    name: "jailyetkili",
    code: `$title[Başarılı!]
$description[Jail yetkilisi rolü başarıyla <@&$mentionedRoles[1]> olarak ayarlandı!]
$color[303136]
$setServerVar[jailyetkili;$mentionedRoles[1]]
$onlyPerms[manageroles;{title:Hata!}{description:Bu komutu sadece **Rolleri Yönet** yetkisine sahip olanlar kullanabilir}{color:RED}]

`
})