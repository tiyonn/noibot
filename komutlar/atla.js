module.exports= ({
	name: "atla",
	aliases: ["skip", "s"],
	code: `$author[Şarkı başarıyla atlandı!;$authorAvatar]
	$description[Şuan çalan şarkı **$songInfo[title;1]**. Keyifli dinlemeler :)!]
	$skipSong
	$color[B89AFF]
	$suppressErrors[{title:HATA}{description:Herhangi bir şarkı çalmıyor.}{color:RED}]
	$onlyIf[$voiceID!=;{title:HATA}{description:Bir sesli kanalda olmalısınız.}{color:RED}]`
})