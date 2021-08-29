const Aoi = require('aoi.js');
const fs = require('fs');
const bot = new Aoi.Bot({
	token: process.env.token,
	prefix: '-',
	mobile: true,
	autoUpdate: true
});

bot.onMessage({
	guildOnly: false
});
bot.onPresenceUpdate();
bot.onChannelDelete();
bot.onChannelCreate();
bot.onChannelUpdate();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onLeave();
bot.onJoined();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.loadCommands(`./komutlar/`);

//uptime
const express = require('express');

const app = express();

app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.write('Bot basariyla acildi!');
	res.end();
});


app.listen(8000);
//uptime
//sa as
bot.command({
	name: 'merhaba', //komut adı
	nonPrefixed: true,
	code: `Merhaba <@$authorID>, nasılsın?`
});
bot.command({
	name: 'sa',
	code: `
  $reply[$messageID;Aleykümselam <@$authorID>, hoş geldin.;yes]
    $onlyIf[$getServerVar[saas]!=kapalı;]
    $onlyIf[$message==;]
  `,
	nonPrefixed: true
});

bot.command({
	name: 'selamın aleyküm',
	code: `
  $reply[$messageID;Aleykümselam <@$authorID>, hoş geldin.;yes]
    $onlyIf[$getServerVar[saas]!=kapalı;]
    $onlyIf[$message==;]
    
  `,
	nonPrefixed: true
});

bot.command({
	name: 'esselâmu aleyküm',
	code: `
  $reply[$messageID;Aleykümselam <@$authorID>, hoş geldin.;yes]
    $onlyIf[$getServerVar[saas]!=kapalı;]
    $onlyIf[$message==;]
  `,
	nonPrefixed: true
});

bot.command({
	name: 'saas-aç',
	code: `
 Başarılı! Artık biri **sa** ve benzeri mesajlar yazdığında yanıt vereceğim. Kapatmak için \`-saas-kapat\` yazabilirsin!
  $resetServerVar[saas]
  $onlyPerms[managemessages;❌ **Mesajları Yönet** yetkin bulunmadığı için bu komutu kullanamazsın!]
  $onlyIf[$getServerVar[saas]!=açık;Bu özellik zaten açık!]
  $onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;$botOwnerID]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.gg/zK9y5WPrMD) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
  `
});

bot.command({
	name: 'saas-kapat',
	code: `
  Başarılı! Artık biri **sa** ya da benzeri mesajlar yazdığı zaman yanıt vermeyeceğim. Tekrar açmak için \`-saas-aç\` yazabilirsin!
  $setServerVar[saas;kapalı]
   $onlyPerms[managemessages;❌ **Mesajları Yönet** yetkin bulunmadığı için bu komutu kullanamazsın!]
  $onlyIf[$getServerVar[saas]!=kapalı;Bu özellik zaten kapalı!]
  $onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;$botOwnerID]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.gg/zK9y5WPrMD) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
  `
});
//sa as bitiş
bot.command({
	name: 'kurallar',
	code: `
  $reactionCollector[$splitText[1];$authorID;1m;✅;evet;yes]
  $textSplit[$sendMessage[{title:$username[$clientID] Kullanım Koşulları}{description: Merhaba <@$authorID>! Botumuzun bazı kuralları bulunuyor. Bu yüzden bunları onaylamalısın.
$userTag[$clientID] Kullanım Kuralları
1- Alttaki emojiye basarak kuralları okuduğunuzu kabul etmiş bulunacaksınız.

1- Botumuzdaki para birimindeki açıkları haksız kazanç elde etmek yasaktır.(Ceza: Paranın sıfırlanması ve en son karalisteye alınma.)

2- Kurucuya ve bota küfür etmek yasaktır. Bildirirseniz ödül alabilirsiniz. (Ceza: Küfür eden kişiye karaliste)

3- Kendini Noibot'un kurucusu gibi tanıtanları bildiriniz. (Ceza: çakma "kurucuya" karaliste)

4- Botun \`-tekrarla\` komutu kullanılarak küfür, ırkçılık vb. şeyleri söyletmeyiniz. Bunlar komut logunda gözüküyor. (Ceza: afsız karaliste)

5- Botumuz APACHE 2.0 lisansı ile korunmaktadır. Bota ait komutları çalmayınız ve altyapısını çıkarmayınız.}{thumbnail:$userAvatar[$clientID]}{footer:$username kurallara baktı.}{color:B89AFF};yes]]
  $onlyIf[$getGlobalUserVar[kurallar;$authorID]!=onaylandı;]
  `
});
bot.awaitedCommand({
	name: 'evet',
	code: `
  $clearReactions[$channelID;$message[1];✅]
  $description[
  <@$authorID> kurallarıımızı kabul ettiğiniz için teşekkür ederiz! Kurallara bir daha bakmak isterseniz \`-kurallar\` komutunu kullanabilirsiniz!]
  $footer[Noibot daima hizmetinizde!]
  $color[B89AFF]
  $setGlobalUserVar[kurallar;onaylandı;$authorID]
  
  
  `
});
//etiket cevap
bot.command({
	name: '<@!840883172963254283>',
	code: `
  $title[Biri beni mi çağırdı?]
  $description[
    Prefixim: -
    Yardım komutum: -yardım
    İstatistik komutum: -i
    Davet komutum: -davet
    Mevcut pingim: $ping ms
    Tamtamına $serverCount sunucuya ve $allMembersCount kişiye hizmet ediyorum!]
    $footer[Noibot'u kullanmaya başla!]
    $color[B89AFF]
`,
	nonPrefixed: true
});
bot.command({
	name: '<@840883172963254283>',
	code: `
  $title[Biri beni mi çağırdı?]
  $description[
    Prefixim: -
    Yardım komutum: -yardım
    İstatistik komutum: -i
    Davet komutum: -davet
    Mevcut pingim: $botping ms
    Tamtamına $serverCount sunucuya ve $allMembersCount kişiye hizmet ediyorum!]
    $footer[Noibot'u kullanmaya başla!]
    $color[B89AFF]
`,
	nonPrefixed: true
});
bot.command({
	name: '<!@840883172963254283>',
	code: `
  $title[Biri beni mi çağırdı?]
  $description[
    Prefixim: -
    Yardım komutum: -yardım
    İstatistik komutum: -i
    Davet komutum: -davet
    Mevcut pingim: $botping ms
    Tamtamına $serverCount sunucuya ve $allMembersCount kişiye hizmet ediyorum!]
    $footer[Noibot'u kullanmaya başla!]
    $color[B89AFF]
`,
	nonPrefixed: true
});
//etiket cevap bitiş

// özel komut
bot.command({
	name: "konuaç",
	code: `<@$authorID>, konu açılıyor...
	$editIn[5s;<@472493318706692099> <@764185419939315744> <@$botOwnerID> <@851132728858116116> <@644579535018524694> BAKIN LAN İTLER 
        $onlyForServers[864134606483881984;821307138785017887;KTD gel it.]`
});
bot.command({
	name: "31",
	code: `PUHAHAHHAHAJAHAHAJSJKSKDKELELÖEÖEÖEÖEÖLWĞWĞDLDÖMXMDPEĞRÖELLDÖDÖMMEKEL`,
	nonPrefixed: true
});
bot.command({
	name: "tiyon",
	code: `Biri sahibimi çağırıyor!`
        nonPrefixed: true
})
bot.command({
	name: 'eval',
	code: `$eval[$noMentionMessage] $onlyForIDs[853181363552649237;{title:Hata!}{description: $customEmoji[noibot_unlem]│Bu komut sahibime özeldir!}]
`
});
bot.command({
	name: 'istatistik',
	aliases: ['i', 'botbilgi'],
	code: `
$title[İstatistiklerim!]
$addField[Diğer detaylar;$customEmoji[noibot_tac]│Bot sahibi: $userTag[$botOwnerID]
 
$customEmoji[noibot_kisiler]│Toplam kişi sayısı: $allMembersCount
 
$customEmoji[noibot_kanal]│Toplam kanal sayısı: $allChannelsCount
 
$customEmoji[noibot_discord]│Sunucu sayısı: $serverCount

$customEmoji[noibot_zaman]│Uptime sürem: $replaceText[$replaceText[$replaceText[$replaceText[$uptime;d; Gün;-1];h; Saat;-1];m; Dakika;-1];s; Saniye;-1];yes]
 
$addField[Host ve sürüm detayları;
$customEmoji[noibot_windows]│İşletim sistemi: $djsEval[require("os").platform();yes]
 
$customEmoji[noibot_nodejs]│Node.js sürümü: $nodeVersion
 
$customEmoji[noibot_aoijs]│AOI.JS sürümü: v$packageVersion
 
$customEmoji[noibot_cpu]│CPU modeli: $djsEval[require ('os').cpus()[0].model;yes];yes]
  $footer[Noibot daima hizmetimizde!]
  $color[B89AFF]
  $thumbnail[$userAvatar]
  `
});


bot.roleDeleteCommand({
	channel: '$getServerVar[modlog]',
	code: `$title[Bir Rol Silindi]
        $description[Silinen rolün adı: 
        \`\`\`$oldRole[name]\`\`\`]
    $color[RED]`
});

bot.roleCreateCommand({
	channel: '$getServerVar[modlog]',
	code: `$title[Bir Rol oluşturuldu]
        $description[**Yeni oluşturulan rolün bilgileri**
        
       Adı: \`\`\`$newRole[name]\`\`\`
       
        ID: $roleID[$newRole[name]]
        $replaceText[$replaceText[$isMentionable[$roleID[$newRole[name]]];true;Etiketlenebilir;-1];false;Etiketlenemez;-1]
        Rol yetkileri:
   \`\`\`js
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$rolePerms[$roleID[$newRole[name]];, ];Administrator;Yönetici;-1];Manage Guild;Sunucuyu Yönet;-1];Kick Members;Üyeleri At;-1];Create Instant Invite;Davet Oluştur;-1];Ban Members;Üyeleri Yasakla;-1];Manage Channels;Kanalları Yönet;-1];Add Reactions;Tepki Ekle;-1];View Audit Log;Denetim Kaydını Görüntüle;-1];View Channel;Kanalları Görüntüle;-1];Send Messages;Mesaj Gönder;-1];Manage Messages;Mesajları Yönet;-1];Embed Links;Gömülü Bağlantı Yerleştir;-1];Attach Files;Dosya Ekle;-1];Read Message History;Mesaj Geçmişini Görüntüle;-1];Mention Everyone;Herkesten Bahset;-1];View Guild Insights;Sunucu İstatistiklerini Görüntüle;-1];Connect;Bağlan;-1];Speak;Konuş;-1];Mute Members;Üyeleri Sustur;-1];Deafen Members;Üyeleri Sağırlaştır;-1];Move Members;Üyeleri Taşı;-1];Manage Nicknames;Kullanıcı Adlarını Yönet;-1];Manage Roles;Rolleri Yönet;-1];Manage Webhooks;Webhookları Yönet;-1];Manage Emojis;Emojileri Yönet;-1];Use VaSe Eylemini Kullan;-
\`\`\`

Rol sıralamasında \`\`\`$rolePosition[$ID[$newRole[name]]]. sırada.]\`\`\`
    $color[GREEN]`
});
bot.channelCreateCommand({
	channel: '$getServerVar[modlog]',
	code: `$title[Bir Kanal Oluşturuldu]
        $description[**Oluşturulan kanalın bilgileri:**
   
   Adı: \`\`\`$newChannel[name]\`\`\`
       
    $color[GREEN]    ID'si: \`\`\`$channelID[$newChannel[name]]\`\`\`
`
});
bot.channelDeleteCommand({
	channel: '$getServerVar[modlog]',
	code: `$title[Bir KaAal Silindi]
        $description[Silinen Kanalın adı:
        \`\`\`$oldChannel[name]\`\`\`
    
        Olduğu kategoriID'si: \`\`\`$oldChannel[categoryID]]\`\`\`
    $color[RED]`
});

bot.channelUpdateCommand({
	channel: '$getServerVar[modlog]',
	code: `$title[Bir Kanalın Adı Değiştirildi]\`
        $description[Kan\`alın eski adı:
        \`\`\`$oldChannel[name]\`\`\`
        Kanalın yeni adı:
        \`\`$newChannel[name]\`\`]
    $color[e48f00]`
});

bot.updateCommand({
	channel: '$getServerVar[modlog]',
	code: `
        $author[$username[$authorID] Kişisi Bir Mesaj Düzenledi.;$authorAvatar]
$thumbnail[$serverIcon]
$description[
Eski Mesaj:
\`\`\`
$oldMessage\`\`\`

Yeni Mesaj:
\`\`\`
$message\`\`\`

Mesajın Düzenlendiği Kanal: <#$channelUsed>

Düzenleyen Kişi: $username]
$color[e48f00]
 $onlyIf[$isBot[$authorID]!=true;]`
});

bot.deletedCommand({
	channel: '$getServerVar[modlog]',
	code: `
$author[$username[$authorID] Kişisi Mesaj Sildi!;$authorAvatar]
$description[$thumbnail[$serverIcon]
Silinen Mesaj:
\`\`\`
$message\`\`\`

Mesajın Silindiği Kanal: <#$channelUsed>
]
$color[RED]
$onlyIf[$isBot[$authorID]!=true;]
`
});
bot.inviteCreateCommand({
	channel: '$getServerVar[modlog]',
	code: `
$title[Bir Davet Oluşturuldu]
$description[
Daveti açan: \`$inviteUserID\`
URL: $inviteURL
Channel ID: $inviteChannelID]
`
});

bot.command({
	name: 'modlog-aç',
	code: `
  $setServerVar[modlog;$mentionedChannels[1]]
$title[Başarılı!]
$description[$customEmoji[noibot_tik]│Modlog kanalı başarıyla <#$mentionedChannels[1]> olarak ayarlandı. Bundan sonra sunucuda olan olayları o kanala ileteceğim!]
$color[GREEN]
  $onlyPerms[admin;$customEmoji[noibot_carpi]│ Bu komutu kullanabimen için **\`Yönetici\`** yetkin olması lazım!
  $onlyIf[$message!=;{title:Hata!} {description:$customEmoji[noibot_carpi]│Kanal belirtmen lazım! Örnek: \`-modlog-aç #modlog\`}{footer:Noibot daima hizmetinizde!}]
  $onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;$botOwnerID]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.gg/zK9y5WPrMD) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
  `
});
bot.command({
	name: 'modlog-kapat',
	code: `
  $resetServerVar[modlog]
$title[Başarılı!]
$description[Modlog kanalı başarıyla sıfırlandı]
$color[GREEN]
  $onlyPerms[admin;{title:Hata!} {$customEmoji[noibot_carpi]│Bu komut için \`Yönetici\` yetkin bulunmalıdır!}{footer:Noibot daima hizmetinizde!}{color:RED}]
  $onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;$botOwnerID]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.gg/zK9y5WPrMD) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]`
});

bot.command({
	name: 'çıkış-ban',
	aliases: ['çıkban'],
	code: `$if[$message[1]==aç]
  $setServerVar[çban;a]
  $sendMessage[{title:Başarılı!}
{description:\`Çıkış ban sistemi başarıyla açıldı. Artık sunucudan çıkan herkes banlanacak\`}
{color:303136}{timestamp}{author:$username:$authorAvatar};no]
$onlyIf[$mentionedChannels[1]==;{execute:çıkban}]
  $onlyBotPerms[ban;$customEmoji[noibot_carpi]│Kullanıcıları banlamaya yetkim olmadığı için çıkan kişileri banlayamam!]
  $onlyIf[$getServerVar[çban]==k;$customEmoji[yanlis] Çıkış ban sistemi zaten aktif]
  $elseIf[$message[1]==kapat]
  $setServerVar[çl;]
  $setServerVar[çban;k]
  $title[Başarılı!]
  $description[Çıkış ban sistemi başarıyla kapatıldı. Artık sunucudan çıkan kimse banlanmayacak.
**Eski log kanalı:** $replaceText[$replaceText[$checkCondition[$getServerVar[çl]==];true;\`Eski log kanalı ayarlanmamış!\`;-1];false;<#$getServerVar[çl]>;-1]]
  $color[303136]
$addTimestamp
$author[$username;$authorAvatar]
  $onlyIf[$getServerVar[çban]==a;$customEmoji[noibot_carpi]│Çıkış ban sistemi zaten kapalı!]
  $endElseIf
  $endif
  $onlyIf[$checkCondition[$message[1]==aç]$checkCondition[$message[1]==kapat]!=falsefalse;$customEmoji[noibot_carpi]│Sadece \`aç\` veya \`kapat\` argümanları kullanılabilir]
$onlyIf[$message[1]!=;$customEmoji[noibot_carpi]│Sadece \`aç\` veya \`kapat\` argümanları kullanılabilir]
  $onlyPerms[ban;$customEmoji[noibot_carpi]│Bu komutu Kullanabilmek için **Üyeleri Yasakla** yetkisine sahip olmanız gerekiyor.]
  $onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;$botOwnerID]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.gg/zK9y5WPrMD) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]
  `
});
bot.awaitedCommand({
	name: 'çıkban',
	code: `  $setServerVar[çl;$mentionedChannels[1]]
$setServerVar[çban;a]
  $sendMessage[{title:Başarılı!}
{description:\`Çıkış ban sistemi başarıyla açıldı. Artık sunucudan çıkan herkes banlanacak\`
 **Log kanalı:** <#$mentionedChannels[1]>}
{color:303136}{timestamp}{author:$username:$authorAvatar};no]
  $onlyBotPerms[ban;$customEmoji[noibot_carpi]│ Kullanıcıları banlamaya yetkim olmadığı için çıkan kişileri banlayamam!]
  $onlyIf[$getServerVar[çban]==k;$customEmoji[noibot_carpi]│Çıkış ban sistemi zaten aktif!]
  $onlyIf[$getGlobalUserVar[kurallar]==onaylandı;<@$authorID> {title:Hata!}{description:Botumuzun kurallarını kabul etmediniz! Kabul etmek için \`-kurallar\` yazabilirsin.}{footer:Noibot daima hizmetinizde!}{color:RED}]
$onlyIf[$getGlobalUserVar[bakım;$botOwnerID]!=evet;<@$authorID>{title:Hata}{description:Şuan bakım modundayım bu yüzden komutlarımı kullanamazsın. [Destek sunucuma](https://discord.gg/zK9y5WPrMD) gelerek bakım modu ne zaman bitecek öğrenebilirsin.}{footer:Noibot bakım bitince hizmetinizde olacak!}{color:303136}]`
});
bot.command({
	name: "teşekkürler",
	aliases: ["özelteşekkürler", "özltşkler", "thx"],
	code: `
	$title[Teşekkürler...]
	$description[$customEmoji[noibot_soru]│**Burada bulunan her bir kişi, bot için ve benim kodlama işine girmem için çok özel ve önemli kişilerdir. Bulduğunuz yerde selamımı iletirseniz çok memnun olurum :)**
・<@853202758508347402> (\`efemertcbgl#0001\`)

・<@539843855567028227> (\`$userTag[539843855567028227]\`)

・<@606828535423959041> (\`$userTag[606828535423959041]\`)
$footer[Çok teşekkürler <3]
$color[B89AFF]`	})
bot.leaveCommand({
	channel: '$randomChannelID',
	code: `$channelSendMessage[$getServerVar[çl];{title:Çıkış Ban!}{description:**<@$authorID> (**\`$userTag[$authorID] - $authorID\`**) adlı kullanıcı, sunucumuzdan çıkış yaptı ve otomatik olarak banlandı!**}{color:BLACK}{timestamp}{author:$username:$userAvatar[$authorID]}{footer:$servername}{thumbnail:$userAvatar[$authorID]}]
    $onlyIf[$getServerVar[çl]!=;]
    $ban[$authorid;Noibot Çıkış Ban Sistemi]
    $onlyBotPerms[ban;]
    $onlyIf[$getServerVar[çban]==a;]`
});

bot.command({
	name: '$alwaysExecute',
	code: `
  $color[B89AFF]
  $title[Ufukta birini gördüm!]
  $description[$thumbnail[$authorAvatar]
  $customEmoji[noibot_kalp]│ Açılın yoldan sahibim geliyor! Aramıza hoş geldin sahibim 💜]
  $cooldown[30m;]
  $onlyIf[$authorID==853181363552649237;]
  $deleteIn[10s]
  `
});
bot.command({
	name: '$alwaysExecute',
	code: `
  $color[B89AFF]
  $title[Ufukta birini gördüm!]
  $description[$thumbnail[$authorAvatar]
  $customEmoji[noibot_kalp]│ Açılın yoldan bir VIP geliyor! Aramıza hoş geldin <@$authorID> 🖤]
  $cooldown[30m;]
  $onlyIf[$authorID==787992991800492032;]
  $deleteIn[10s]
  `
});
bot.command({
	name: '$alwaysExecute',
	code: `
  $color[B89AFF]
  $title[Ufukta birini gördüm!]
  $description[$thumbnail[$authorAvatar]
  $customEmoji[noibot_kalp]│ Açılın yoldan bir VIP geliyor! Aramıza hoş geldin <@$authorID> 💙]
  $cooldown[30m;]
  $onlyIf[$authorID==822753827030958131;]
  $deleteIn[10s]
  `
});

//bot durumu

bot.status({
	text: '-yeni yazarak yeni komutlarıma bakabilirsin!',
	type: 'PLAYING',
	status: 'online',
	time: 12
});

bot.status({
	text: '$serverCount sunucuda varım!',
	type: 'WATCHING',
	status: 'online',
	time: 12
});

bot.status({
	text: 'Hala geliştirilme sürecindeyim... %31',
	type: 'LISTENING',
	status: 'online',
	time: 12
});
//değişkenler

bot.variables({
	saas: 'açık',
	afk: 'hayır',
	afks: '',
	afkc: '0',
	komutlog: '',
	jaillog: '',
	abonerol: '0',
	aboneyetkilisi: '0',
	abonesayisi: '0',
	linkengel: 'kapalı',
	jaillog: '',
	jailkanal: '',
	jailyetkili: '',
	jailrol: '',
	kurallar: 'onaylanmadı',
	modlog: '',
	çban: 'k',
	çl: '',
  bakım:"hayır"
});
