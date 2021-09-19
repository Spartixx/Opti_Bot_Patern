const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');


class SayCommand extends Command {
    constructor() {
        super('clear', {
           aliases: ['clear', 'del', 'delete'],
           description: {
            content: 'La commande clear permet de supprimer des messages !',
            usages: `${PREFIX}clear <nb>`,
            raccourcis: 'clear, del, delete'
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
        let msg = message.content.split(' ');
        let number = parseInt(msg[1]);
        message.delete()
        if(isNaN(number)){
            return message.reply(`${msg[1]} n'est pas un nombre !`)
        }else if(msg[1] === undefined){
            return message.reply('Nombre de messages non ou mal défini !')
        }else{
            message.channel.bulkDelete(number).then(message.channel.send(`${msg[1]} ont été supprimé !`))
        }
    }
}

module.exports = SayCommand;