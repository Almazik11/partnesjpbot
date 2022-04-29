/**
 * Provides useful information.
 * @module commands/help
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  client.embed.send(message, {
    title: 'Help',
    code: true,
    desc: `> <a:gemoji_2:919528268380643328> ─ Хотите сообщить об ошибках/недочётах? Вы можете обратиться на наш сервер тех. поддержки https://discord.gg/hHFNB4UJrh. Все команды начинаются с ap!.`,
    fields: [{
      name: 'invite',
      value: 'Способ пригласить этого бота в свою собственную гильдию.'
    },
    {
      name: 'init',
      value: 'Синхронизировать рекламный канал.'
    },
    {
      name: 'desc',
      value: 'Установите описание вашей рекламы.'
    },
    {
      name: 'preview',
      value: 'Предварительный просмотр вашей рекламы.'
    },
    {
      name: 'bump',
      value: 'Разместите свое объявление во всех других гильдиях.'
    },
    {
      name: 'help',
      value: 'Бесполезная команда.'
    }
    ]
  })
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: ['h'],
  guildOnly: false,
  permLevel: 'User'
}

/** Command Help */
exports.help = {
  name: 'help',
  usage: '',
  description: 'Helpful command.'
}
