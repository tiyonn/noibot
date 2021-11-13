module.exports = ({
    name: "jailkanal",
    code: `$title[Başarılı!]
$description[Jail kanalı başarıyla <#$mentionedChannels[1]> olarak ayarlandı!]
$footer[Noibot Jail Sistemi]
$color[303136]
$setServerVar[jailkanal;$mentionedChannels[1]]
$onlyPerms[managechannels;{title:Hata!}{description:Bu komutu sadece **Kanalları Yönet** yetkisine sahip olanlar kullanabilir!}{color:RED}]

`

})