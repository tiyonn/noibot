module.exports = ({
    name: "sunucukur",
    aliases: "sunucu-kur",
    code: `
    $channelSendMessage[$channelID;<@$ownerID> {title:Başarılı!}{description:Sunucu kurulumu başarıla tamamlandı. Botun hazır sunucu  kurallarını ayarlamak  isterseniz \`-hazırkurallar\` yazarak bakabilirsiniz! Modlog ayarlamayı unutmayın!}{color:303136}{footer:Noibot Sunucu Kurma Sistemi}]
$wait[1s]
$createRole[🤖|Botlar;ff5558;no]
$createRole[👤|Üye;4dffdb;no]
$createRole[💎|VIP;5ee49a;no]
$createRole[📗|Rehber;ca0032;no]
$createRole[👥|Partner;ba5583;no]
$createRole[😶|Muted;ababab;no]
$createRole[🛡|Moderatör;00d6ff;no]
$createRole[💼 | Yönetim;48ff00;no]
$createRole[💠 | Baş Yönetici;ff7fe2;no]
$createRole[👑 | Kurucu;9370db;no]
$wait[1s]
$modifyChannelPerms[$get[yetk3];-viewchannel;$guildID]
$modifyChannelPerms[$get[yetk2];-viewchannel;$guildID]
$modifyChannelPerms[$get[yetk1];-viewchannel;$guildID]
$wait[1s]
$let[yetk3;$createChannel[😶・özel-oda;text;yes;$get[yetkili]]]
$let[yetk2;$createChannel[💼・yönetim;text;yes;$get[yetkili]]]
$let[yetk1;$createChannel[🔧・yetkili;text;yes;$get[yetkili]]]
$wait[1s]
$let[yetkili;$createChannel[Yetkili;category;yes]]
$wait[1s]
$createChannel[📠・reklam-log;text;no;$get[loglar]]
$createChannel[📠・mesaj-log;text;no;$get[loglar]]
$createChannel[📠・modlog;text;no;$get[loglar]]
$wait[1s]
$let[loglar;$createChannel[Loglar;category;yes]]
$wait[1s]
$createChannel[❗・partner-şart;text;no;$get[partner]]
$createChannel[👥・partnerler;text;no;$get[partner]]
$createChannel[📄・partner-text;text;no;$get[partner]]
$wait[1s]
$let[partner;$createChannel[Partner;category;yes]]
$wait[1s]
$createChannel[🔤・kelime-oyunu;text;no;$get[kategori2]]
$createChannel[💬・bot-ile-sohbet;text;no;$get[kategori2]]
$createChannel[🔶・tuttu-tutmadı;text;no;$get[kategori2]]
$createChannel[🔢・sayı-saymaca;text;no;$get[kategori2]]
$wait[1s]
$let[kategori2;$createChannel[Eğlence;category;yes]]
$wait[1s]
$createChannel[🎵・Müzik 2;voice;no;$get[kategori]]
$createChannel[🎵・Müzik 1;voice;no;$get[kategori]]
$createChannel[・müzik-odası;text;no;$get[kategori]]
$createChannel[🤖・bot-komut;text;no;$get[kategori]]
$createChannel[📷・görsel-paylaşım;text;no;$get[kategori]]
$createChannel[💭・genel-sohbet;text;no;$get[kategori]]
$wait[1s]
$let[kategori;$createChannel[Main;category;yes]]
    $wait[1s]
    $createChannel[💎・boostlar;text;no;$joinSplitText[]] 
    $createChannel[📇・rol-al;text;no;$joinSplitText[]] 
    $createChannel[📩・davetler;text;no;$joinSplitText[]] 
    $createChannel[⏳・sayaç;text;no;$joinSplitText[]] 
    $createChannel[🚪・gelen-giden;text;no;$joinSplitText[]] 
    $let[kurallar;$createChannel[📋・kurallar;text;yes;$joinSplitText[]] 
    $wait[1s] 
    $textSplit[$createChannel[LOBI;category;yes];]
    $onlyForIDs[$ownerID;$customEmoji[noibot_carpi]│Bu komutu kullanabilmen için **Sunucu Sahibi** olmalısın.]
   
    `
})