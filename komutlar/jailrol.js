module.exports = ({
    name: "jailrol",
    code: `$title[Başarılı!]
$description[Jail rolü başarıyla <@&$mentionedRoles[1]> olarak ayarlandı!]
$color[303136]
$setServerVar[jailrol;$mentionedRoles[1]]
$onlyPerms[manageroles;{title:Hata!}{description:Bu komutu sadece **Rolleri Yönet** yetkisine sahip olanlar kullanabilir}{color:RED}]

`
})
