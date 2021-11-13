module.exports = ({
    name: "jaillog",
    code: `$title[Başarılı!]
$description[Jail log kanalı başarıyla <#$mentionedChannels[1]> olarak ayarlandı!]
$color[303136]
$setServerVar[jaillog;$mentionedChannels[1]]
$onlyPerms[managechannels;Bu komutu sadece **Kanalları Yönet** yetkisine sahip olanlar kullanabilir]

`
})