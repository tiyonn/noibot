module.exports = ({
	name: "sıra",
	aliases: ["queue", "q"],
	code: `$title[Şarkı Sırası]
$description[$queue[1;10;{number} - {title} (Ekleyen: <@{userID}>)]]
$color[B89AFF]
$suppressErrors[{title:Şarkı Sırası}{description:Herhangi bir şarkı çalmıyor.}{color:RED}]`})