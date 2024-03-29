/**
 * Initialize the bot in the guild the command was executed in.
 * @module commands/init
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  if (args[0] === undefined) {
    return client.embed.send(message, { desc: '>  <:PandaHugg:966717408440090654> ─ Пожалуйста, укажите канал.' })
  }
  const channel = client.guilds.cache.get(message.guild.id).channels.cache.find(channel => [channel.name, channel.id].includes(args[0].replace(/[<#>]/g, '')))
  if (channel) {
    client.database.run('UPDATE settings SET partner = ? WHERE guildid = ?', [channel.id, message.guild.id])
    client.embed.send(message, { desc: `>  <:yes:966272635329720320> ─ Успешно! Сейчас вы можете установить описание по команде \`${client.config.prefix}desc\` и сделать бамп по команде \`${client.config.prefix}bump\` !` })
  } else {
    client.embed.send(message, { desc: '>  <:no:966272561753227264> ─ Указан несуществующий канал.' })
  }
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
  name: 'init',
  usage: '<channel>',
  description: 'Setup the bot.'
}
