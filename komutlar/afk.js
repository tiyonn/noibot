module.exports = ({
    name: "$alwaysExecute",
    code: `Etiketlediğiniz kişi \`$getGlobalUserVar[afks;$mentioned[1]]\` sebebinden dolayı AFK.
$onlyIf[$getGlobalUserVar[afk;$mentioned[1]]==evet;]
$suppressErrors`
})