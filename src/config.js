const config = {
  statusURL: 'https://discord.gg/WZNeZTST98',
  prefix: 'ap!',
  botGuildID: '1007408431910617261',
  ownerID: '962606306148122626',
  ad: {
    desc: {
      min_length: 10,
      max_length: 800
    }
  },
  botMaintenance: false,
  deleteCommands: true,
  deleteTime: 30000,
  emojis: {
    delete: '1006891413360881745'
  },
  permLevels: [
    {
      level: 0,
      name: 'User',
      check: () => {
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      }
    },
    {
      level: 4,
      name: 'Server Owner',
      check: (client, message) => {
        return new Promise((resolve, reject) => {
          resolve(message.member.id === message.guild.owner.id)
        })
      }
    },
    {
      level: 10,
      name: 'Bot Owner',
      check: (client, message) => {
        return new Promise((resolve, reject) => {
          resolve(message.member.id === config.ownerID)
        })
      }
    }
  ]
}

module.exports = config
