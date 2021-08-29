module.exports = {
    name: "abone",
    aliases: "a",
    code: `$giveRoles[$mentioned[1];$getServerVar[abonerol]]
      $setGlobalUserVar[abonesayisi;$sum[$getGlobalUserVar[abonesayisi];1]]
    $title[Yeni Abone!]
    $description[**<@$mentioned[1]> adlı kullanıcıya başarıyla <@&$getServerVar[abonerol]> adlı rol verildi. <a:noibot_pikachu:838867433162801183>**]
    $footer[Abone rolünü veren kişi: $username;$userAvatar[$authorID]]
    $addTimestamp
    $color[RANDOM]
    $onlyForRoles[$getServerVar[aboneyetkilisi];{title:Hata!}{description:<a:noibot_dikkat:838866848740933632> | Sende abone yetkilisi rolü yok!}{footer:Noibot Abone Rol Sistemi}{color:RED}]
    $onlyIf[$hasRoles[$mentioned[1];$getServerVar[abonerol]]!=true;{title:Hata!}{description:<a:noibot_dikkat:838866848740933632> | Kişi zaten abone!}{footer:Noibot Abone Rol Sistemi}{color:RED}]
    $onlyIf[$getServerVar[abonerol]!=0;{title:Hata!}{description:<a:noibot_dikkat:838866848740933632> | Sunucuda abone rolü ayarlanmamış!}{footer:Noibot Abone Rol Sistemi}{color:RED}]
    $onlyIf[$getServerVar[aboneyetkilisi]!=0;{title:Hata!}{description:<a:noibot_dikkat:838866848740933632> | Sunucuda abone yetkilisi rolü ayarlanmamış!}{footer:Noibot Abone Rol Sistemi}{color:RED}]
    $onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
    $onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.com/invite/K8CBJgH) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
    `}