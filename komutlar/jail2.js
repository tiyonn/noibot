module.exports = ({
    name: "jail",
    code: `$giveRoles[$mentioned[1;yes];$getServerVar[jailrol]]
$onlyIf[$hasRole[$authorID;$getServerVar[jailyetkili]]==true;]
$onlyBotPerms[manageroles;]
`
})