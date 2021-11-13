module.exports = {
    name: "kick",
    code: `
  $kick[$mentioned[1];$replaceText[**$noMentionMessage**;****;Sebepsiz;-1]]
  Atılan kişi: $userTag[$mentioned[1]]
  
  Atılma Sebebi = $replaceText[**$noMentionMessage**;****;Sebepsiz !;-1]
  
  $onlyIf[$hasPerms[kick;$authorID]!=false;$getServerVar[hata]]
  $onlyIf[$message!=;Birini etiketler misin?]
$onlyIf[$mentioned[1]!=;Birini etiketler misin?]
$sendDM[$mentioned[1];{title:$serverName[$guildID] adlı sunucudan atıldınız.} {description: Atılma sebebi: $replaceText[$nomentionmessage;;\`Sebepsiz\`;-1]} {footer:Atan kişi: $username} {olor:303136}]
 `
}