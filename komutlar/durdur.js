module.exports = ({
	name: "durdur",
	aliases:["stop", "s", "dur"],
	code: `$addCmdReactions[✅]
	$pauseSong
	$onlyIf[$voiceID!=;{title:HATA}{description:Bir sesli kanalda olmalısınız.}{color:BLACK}]
	$suppressErrors[{title:HATA}{description:Herhangi bir şarkı çalmıyor.}{color:BLACK}]`
})