module.exports = ({
    name: "$alwaysExecute",
    code: `$setGlobalUserVar[afk;hayır]
$setGlobalUserVar[afks;]
$userTag[$authorID] geri geldi! Artık AFK değil. Aramıza hoşgeldin!
$onlyIf[$getGlobalUserVar[afkc]==2;]
$setGlobalUserVar[afkc;$sum[$getGlobalUserVar[afkc];1]]
$onlyIf[$getGlobalUserVar[afk;$authorid]==evet;]
$suppressErrors`
})