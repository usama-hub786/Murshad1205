
module.exports = {
  name: "menu",
  alias: ["help", "commands"],
  category: "main",
  desc: "Displays all bot commands",
  use: ".menu",
  async exec(msg, sock, args, options) {
    const { prefix, botName, ownerName, creatorName, groupLink } = require('../config')
    const menuText = `
╭───❍「 *✨${botName}✨* 」
│ 😇 *owner:* ${ownerName}
│ 🛠 *creator:* ${creatorName}
│ 🌐 *group:* ${groupLink}
│ 📍 *prefix:* ${prefix}
╰───────────❍

> .play <song name>
> .ytmp3 <url>
> .fb <url>
> .insta <url>
> .tiktok <url>
> .nice (unlock view-once photo)
> .menuimg (change menu background)
> .botname <name>
> .ownername <name>

Use any command with ${prefix}
`
    await msg.reply(menuText)
  }
}
    