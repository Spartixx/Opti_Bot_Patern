const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');


class ClearCommand extends Command {
    constructor() {
        super('clear', {
           aliases: ['clear', 'del'],
           description: {
            content: 'La commande clear permet de supprimer des messages !',
            usages: `${PREFIX}clear <nb>`,
            raccourcis: 'clear, del, delete'
        },
           category: 'Modération',
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'MANAGE_MESSAGES',
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
        let msg = message.content.split(' ');
        let number = parseInt(msg[1]);
        if(msg.length === 1){
            return message.reply('***Veuillez entrer le nombre de messages à supprimer !***')
        }else if(isNaN(msg[1])){
            return message.reply(`***${msg[1]} n'est pas un nombre !***`)
        }else{
            message.channel.bulkDelete(number).then(message.channel.send(`***__${msg[1]}__ messages ont été supprimé !***`))
        }
    }
}

module.exports = ClearCommand;