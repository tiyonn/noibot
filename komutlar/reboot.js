module.exports = {
    name: "reboot",
    aliases: ['restart', 'yeniden-başlat'],
    code: `
$reboot[index.js]
$wait[1s]
$channelSendMessage[$channelID;{title:Yeniden başlatma işlemi başarılı!}{description:$username[$clientID] yeniden başlatılıyor. Yeniden başlatılmadan önceki uptime süresi: $replaceText[$replaceText[$replaceText[$replaceText[$uptime;d; Gün;-1];h; Saat;-1];m; Dakika;-1];s; Saniye;-1]} {color:PURPLE}]
$onlyForIDs[$botOwnerID;Bu komutu sadece **$userTag[$botOwnerID]** kullanabilir]
`
}