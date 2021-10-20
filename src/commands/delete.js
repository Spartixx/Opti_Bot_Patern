const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');


class DeleteCommand extends Command {
    constructor() {
        super('delete', {
           aliases: ['delete', 'd'],
           description: {
            content: 'La commande delete permet de supprimer des messages !',
            usages: `${PREFIX}delete <id>`,
            raccourcis: 'delete, d'
        },
           category: 'Dev',
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'SEND_MESSAGES',
           clientPermissions: 'SEND_MESSAGES',
           ratelimit: 2,
           cooldown: 3000,
           typing: true,
           ownerOnly: false,
           channel: 'guild',
           args: [
               {id: 'command', type: 'commandAlias'},
           ]
        });
    }

    exec(message, args) {
        let arg = message.content.split(' ')
        let to_delete = arg[1]
        let msg = arg[2]

        message.channel.messages.fetch(to_delete).then(m =>{
            m.delete(msg), message.delete()
        })
    }
}

module.exports = DeleteCommand;