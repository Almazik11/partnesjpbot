/**
 * Set the description of the advertisement you want to bump.
 * @module commands/desc
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  const desc = args.join(' ')
  if (desc === undefined || desc === '') {
    return client.embed.send(message, { desc: '> <:heart:967000646446383144> ─ Укажите описание гильдии. Обратите внимание, что ваше приглашение в гильдию будет прикреплено автоматически.' })
  }

  if (desc.length > client.config.ad.desc.max_length) {
    return client.embed.send(message, { desc: `>  <:no:966272561753227264> ─ Описание не может быть длиннее ${client.config.ad.desc.max_length} символов.` })
  }
  if (desc.length < client.config.ad.desc.min_length) {
    return client.embed.send(message, { desc: `>  <:no:966272561753227264> ─ Описание должно содержать не менее ${client.config.ad.desc.min_length} символов.` })
  }
  if (desc.includes('http') || desc.includes('@everyone') || desc.includes('@here')) {
    return client.embed.send(message, { desc: '>  <:PandaHugg:966717408440090654> ─ Пожалуйста, никаких ссылок или упоминаний в описании.' })
  }
  client.database.run('UPDATE settings SET desc = ? WHERE guildid = ?', [desc, message.guild.id])
  client.embed.send(message, { desc: '>  <:yes:966272635329720320> ─ Описание успешно обновлено.' })
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
  name: 'desc',
  usage: '<description>',
  description: 'Set a description for your advertisement.'
}
