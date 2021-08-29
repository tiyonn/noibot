module.exports = {
    name: "tekmele",
    code: `
  $author[$username#$discriminator bi koydu var ya uffff;$userAvatar[$mentioned[1]]]
  $description[$mentioned[1] tamtamına $random[1 metre;5 metre;10 metre;50 metre;100 METRE;500 METREEE;OHA AMA 1000 METREEEEEE;ADAM UZAYA FIRLADI ULAN 1000 KİLOMETRE] uçtu!
    $username#$discriminator $username[$mentioned[1]]#$discriminator[$mentioned[1]]
  kişisine çok güzel tekme attı!]
  $image[https://tenor.com/view/asdf-kick-gif-11029651]
  $suppressErrors[Birini etiketlemezsen nasıl tekme atacaksın?]
 $onlyIf[$mentioned[1]!=$authorID;Kendine nasıl tekme atacaksın bu fizik kurallarına aykırı!]
  $onlyIf[$message!=;Birini etiketlemezsen nasıl tekme atacaksın?]
  $onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.com/invite/K8CBJgH) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
  `
}