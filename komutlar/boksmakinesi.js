module.exports = {
    name: "boks",
    code: `
  $color[RANDOM]
  $title[Boks Makinesi!]
  $image[https://media.tenor.com/images/36179549fa295d988fc1020a7902c41c/tenor.gif]
  $author[$randomText[Ailenle;Arkadaşlarınla;Sevgilinle;Tek Başına] gezerken bir boks malinesi gördün ve gidip 1 lira atıp makineyi çalıştırdın...]
$description[$thumbnail[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpgJsoDvSdWzQ-pl93obsTwcFHrN1qtlFaw&usqp=CAU]
Veee $randomText[sağ;sol] elini sallayarak çok sıkı bir yumruk yaptın ve makineye
son hızla vurmaya çalıştın!]
$editIn[5s;{description:Sonuuuuuuç:
Tamtamına %$random[0;100] vurdun!}{color:RANDOM}
{thumbnail:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpgJsoDvSdWzQ-pl93obsTwcFHrN1qtlFaw&usqp=CAU}
{author:Bakalım:$authorAvatar}{title:İŞTE BU}{image:https://oyunmakinalari.files.wordpress.com/2017/02/ithal-boks-makinasc4b1-1.png}]
$onlyIf[$message==;]
$onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;ìdiniz]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.gg/zK9y5WPrMD) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
`
}