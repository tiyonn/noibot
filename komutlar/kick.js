module.exports = {
    name: "kick",
    code: `
  $kick[$mentioned[1];$replaceText[**$noMentionMessage**;****;Sebepsiz;-1]]
  Atılan kişi: $userTag[$mentioned[1]]
  
  Atılma Sebebi = $replaceText[**$noMentionMessage**;****;Sebepsiz !;-1]
  
  $onlyIf[$hasPerms[kick;$authorID]!=false;$getServerVar[hata]]
  $onlyIf[$message!=;Birini etiketler misin?]
$onlyIf[$mentioned[1]!=;Birini etiketler misin?]
$sendDM[$mentioned[1];{title:$serverName[$guildID] adlı sunucudan atıldınız.} {description: Atılma sebebi: $replaceText[$nomentionmessage;;\`Sebepsiz\`;-1]} {footer:Atan kişi: $username} {color:red}]
 $onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
 $onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.com/invite/K8CBJgH) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
 `
}