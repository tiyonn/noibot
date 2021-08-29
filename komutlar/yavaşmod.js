module.exports = {
    name: "yavaşmod",
    code: `
$if[$message!=kapat]

$slowmode[$channelID;$message[2]]
<:evet:838174038378545172> | <#$channelID> kanalının yavaş modu başarıyla \`$message[2]\` olarak ayarlandı.
$argsCheck[>2; Doğru Kullanım: -yavaşmod <süre>]
$onlyPerms[managechannels;<:hayir:838174021945524235> | **Kanalları Yönet** yetkin bulunmadığı için bu işlemi gerçekleştiremezsin.]
$elseIf[$message!=aç]

<:evet:838174038378545172> | <#$channelID> kanalının yavaş modu başarıyla kapatıldı.
$slowmode[$channelID;0]
$onlyPerms[managechannels;<:hayir:838174021945524235> | **Kanalları Yönet** yetkin bulunmadığı için bu işlemi gerçekleştiremezsin.]
$endelseIf
$endif
$onlyIf[$message!=;yavaş mod aç/kapat]
$onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.com/invite/K8CBJgH) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
`}