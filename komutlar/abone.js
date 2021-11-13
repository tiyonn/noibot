module.exports = {
    name: "abone",
    aliases: "a",
    code: `$giveRoles[$mentioned[1];$getServerVar[abonerol]]
      $setGlobalUserVar[abonesayisi;$sum[$getGlobalUserVar[abonesayisi];1]]
    $title[Yeni Abone!]
    $description[**<@$mentioned[1]> adlı kullanıcıya başarıyla <@&$getServerVar[abonerol]> adlı rol ve** $customEmoji[i. <a:noibot_p183>**]
    $footer[Abone rolünü veren kişi: $username;$userAvatar[$authorID]]
    $addTimestamp
    $color[RANDOM]
    $onlyForRoles[$getServerVar[aboneyetkilisi];{title:Hata!}{de$customEmoji[iption_unlem] | Sende abone yetkilisi rolü yok!}{footer:Noibot Abone Rol Sistemi}{color:RED}]
    $onlyIf[$hasRoles[$mentioned[1];$getServerVar[abonerol]]!=true;{title:Hata!}{d$customEmoji[noibot_unlem] | Kişi zaten abone!}{footer:Noibot Abone Rol Sistemi}{color:RED}]
    $onlyIf[$getServerVar[abonerol]!=0;{title:Hata!}{$customEmoji[noibot_unlem] | Sunucuda abone rolü ayarlanmamış!}{footer:Noibot Abone Rol Sistemi}{color:RED}]
    $onlyIf[$getServerVar[aboneyetkilisi]!=0;{title:Hata!}$customEmoji[noibot_unlem] | Sunucuda abone yetkilisi rolü ayarlanmamış!}{footer:Noibot Abone Rol Sistemi{color:303136}]
    `}