/**
 * A small sanity ping pong check to see if the bot is responding.
 * @module commands/ping
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  const msg = await client.embed.send(message, { desc: 'Ping?' }, false)
  await client.embed.edit(message, msg, { desc:  <:heart:967000646446383144> понг! Задержка сейчас ${msg.createdTimestamp - message.createdTimestamp}ms. Задержка АPI: ${Math.round(client.ws.ping)}ms` })
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: ['p'],
  guildOnly: false,
  permLevel: 'User'
}

/** Command Help */
exports.help = {
  name: 'ping',
  usage: '',
  description: 'Send a ping and receive a pong!'
}
