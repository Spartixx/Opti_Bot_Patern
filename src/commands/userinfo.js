const { Command } = require('discord-akairo');
const { BLUE_COLOR } = require('../../config');


class UserInfoCommand extends Command {
    constructor() {
        super('userinfo', {
           aliases: ['userinfo', 'infos'],
           description: 'Affiche les informations de l\'utilisateur',
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
               {id: 'member', type: 'member', default: message => message.member},
           ]
        });
    }

    exec(message, args) {
        return message.channel.send({embed: [
            this.client.functions.embed()
            .setTitle("***Voici les infos de l'utilisateur :***")
        ]})
    }
}

module.exports = UserInfoCommand;