 module.exports = {
    name: "abone-yetkilisi-ayarla",
    code: `$setServerVar[aboneyetkilisi;$mentionedRoles[1]]
  $title[Başarılı!]
  $description[**<:noibot_evet:838174038378545172> | Abone yetkilisi başarıyla <@&$mentionedRoles[1]> olarak ayarlandı!**]
  $footer[$username abone yetkilisi rolünü ayarladı!;$userAvatar[$authorID]]
  $addTimestamp
  $color[$random[0;99999]]
  $onlyIf[$message!=;{title:Hata!}{descri$customEmoji[ion:**<:noib]5524235> | <@$authorID> bir rol etiketlemen lazım!**}{footer:Noibot Abone Rol Sistemi}{color:r:303136}]
`
}