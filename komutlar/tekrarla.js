module.exports =({

name: "tekrarla",
aliases: ["tkrla", "repeat"],
code: `
$repeatMessage[1;$message]
$onlyIf[$checkContains[$message;@everyone;@here;<@>;<!@>;<@&>;<!@&>]`
})