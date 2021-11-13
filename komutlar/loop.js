module.exports = ({
name:"tekrarla",
aliases:"loop",
code:`$addCmdReactions[✅]
Liste tekrarlaması şuan $replaceText[$replaceText[$loopQueue;true;**açık**!;1];false;**kapalı**!;1]
$onlyIf[$voiceID!=;{title:HATA}{description:Bir sesli kanalda olmalısınız.}{color:RED}]
$suppressErrors[{title:HATA}{description:Herhangi bir şarkı çalmıyor.}{color:RED}]`})