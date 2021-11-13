module.exports = {
    name: "aşkölçer",
    code: `
  $author[;$userAvatar[$mentioned[1]]]
  $description[$thumbnail[https://media.tenor.com/images/752063d293a04a2ce7ac64b8f983e4d2/tenor.gif]
    $username#$discriminator kişisinin $username[$mentioned[1]]#$discriminator[$mentioned[1]]
kişisine aşkıı
  $randomText[%$random[0;9]🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤||Bu aşk değil!||;%$random[10;19]♥️🖤🖤🖤🖤🖤🖤🖤🖤🖤 ||Aşkı geç bir şey hissediyorsan mucize||;%$random[20;29]♥️♥️🖤🖤🖤🖤🖤🖤🖤🖤 ||Az ama idare eder||;%$random[30;39]♥️♥️♥️🖤🖤🖤🖤🖤🖤🖤 ||Eh işte||;%$random[40;49]♥️♥️♥️♥️🖤🖤🖤🖤🖤🖤 ||Yeni bir adım atmaya başladın.||;%$random[50;59]♥️♥️♥️♥️♥️🖤🖤🖤🖤🖤 ||Yolun yarısı iyidir||.;%$random[60;69]♥️♥️♥️♥️♥️♥️🖤🖤🖤🖤 ||Siz birbiriniz için yaratılmışsınız <3||;%$random[70;79]♥️♥️♥️♥️♥️♥️♥️🖤🖤🖤 ||Neredeyse gerçek aşk!||;%$random[80;89]♥️♥️♥️♥️♥️♥️♥️♥️🖤🖤 ||TEK KELİMELE MÜKEMMEL!||;%$random[90;99]♥️♥️♥️♥️♥️♥️♥️♥️♥️🖤 ||OLUM ÇOK İYİ LAN||;%100♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ ||GERÇEK AŞK BU!||]]
  $suppressErrors[Hiçlikle aşk mı???]
  $onlyIf[$isBot[$mentioned[1]]!=true;Robotlarla aşk yaşayamazsın :c]
 $onlyIf[$mentioned[1]!=$authorID;Kendini %100 seviyorsun...]
  $onlyIf[$message!=;Birini etiketlemeolor:303136}]
  `
}