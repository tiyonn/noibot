module.exports = ({
    name: "afk",
    code: `$setGlobalUserVar[afk;evet]
$setGlobalUserVar[afkc;0]
$setGlobalUserVar[afks;$message]
$description[Başarıyla AFK moduna girdin. Artık biri seni etiketlediğinde AFK sebebini söyleyeceğim!]
$color[RANDOM]
$onlyIf[$message!=;Lütfen bir AFK sebebi belirt.:303136}]
`
})