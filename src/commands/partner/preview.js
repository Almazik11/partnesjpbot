/**
 * Preview the advertisement.
 * @module commands/preview
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  client.database.get('SELECT * FROM settings WHERE guildid = ?', [message.guild.id]).then(row => {
    const str = [
                  `__**${message.guild.name}**__\n`,
                  `${row.desc === null ? '> <a:gemoji_1:919528250064117780> ─ Описание не было установлено.' : row.desc} \`[ap!desc]\``
    ]

    client.embed.send(message, { desc: str.join('\n') })
  })
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'Server Owner'
}

/** Command Help */
exports.help = {
  name: 'preview',
  usage: '',
  description: 'Preview your advertisement.'
}
