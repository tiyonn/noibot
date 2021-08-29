module.exports = {
    name: "unban",
    code: `
$thumbnail[$useravatar[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$unban[$message[1]]
$addField[Banı açılan kişi: \`$username[$message[1]]#$discriminator[$message[1]]\`]
$addfield[\`>\` Banı açan kullanıcı;<@$authorID>]
 $footer[> Banı açılan kullanıcının ID'si:$message[1]]
$color[RANDOM]
$onlyIf[$hasPerms[$authorID;ban]!=false;**Üyeleri Engelle** yetkin bulunmuyor!]
$onlyIf[$isNumber[$message[1]]!=false;Girilen şey bir ID değil!]
$onlyIf[$message!=;Bir ID girin!]
$onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.com/invite/K8CBJgH) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
`
}