module.exports = {
    name: "abone-rol-ayarla",
    code: `$setServerVar[abonerol;$mentionedRoles[1]]
  $title[Başarılı!]
  $description[**<:noibot_evet:838174038378545172> | Abone rolü başarıyla <@&$mentionedRoles[1]> olarak ayarlandı!** ]
  $footer[$username abone rolünü ayarladı!;$userAvatar[$authorID]]
  $addTimestamp
  $color[$random[0;99999]]
  $argsCheck[>1;{title:Hata!}{description:**<:noibot_hayir:838174021945524235> | <@$authorID> bir rol etiketlemen lazım! **}{footer:Noibot Abone Rol Sistemi}{color:RED}]
  $onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
  $onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.com/invite/K8CBJgH) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
`
}