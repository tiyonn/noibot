module.exports = {
    name: "abone-istatistik",
    code: `$title[Abone İstatistiğin]
      $description[<@$authorID> ** , \`$getGlobalUserVar[abonesayisi]\` kişiye abone rolü vermişsin.**]
   $footer[$username abone istatistiğine baktı.;$userAvatar[$authorID]]
   $addTimestamp
   $color[RANDOM]
   $onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
   $onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.gg/zK9y5WPrMD) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
   ` }