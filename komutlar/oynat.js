module.exports = ({
	name: "oynat",
	aliases: ["resume", "r", "devam"],
	code: `$addCmdReactions[✅]
	$resumeSong
	$onlyIf[$voiceID!=;{title:HATA}{description:Bir sesli kanalda olmalısınız.}{color:RED}]
	$suppressErrors[{title:HATA}{description:Herhangi bir şarkı çalmıyor ya da durdurulmamış.}{color:RED}]`
})