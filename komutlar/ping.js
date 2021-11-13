module.exports = ({
  name: "ping",
  code: `$if[$botPing<=100]
  🟢 Pingim $botPing ms. Ping durumum **düşük**.
$endif
$if[$botPing>=100]
🔵 Pingim $botPing ms. Ping durumum **orta**.
$onlyIf[$botPing<=250]
$endif
$if[$botPing>=250]
🟠 Pingim $botPing ms. Ping durumum **yüksek**. Eğer bu durum devam ediyorsa destek sunucuma (https://discord.gg/zK9y5WPrMD) gelerek durumu bildirebilirsin.
$onlyIf[$botPing<=300]
$endif
$if[$botPing>=300]
🔴 Pingim $botPing ms. Ping durumum **aşırı yüksek**. Bunu destek sunucuma (https://discord.gg/zK9y5WPrMD) gelerek durumu bildirirsen seviniriz.
$endIf
`
})