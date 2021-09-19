const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');


class UserInfoCommand extends Command {
    constructor() {
        super('userinfo', {
           aliases: ['userinfo', 'info', 'userinfos', 'infos'],
           description: {
            content: '***La commande UserInfo permet de voir quelques informations sur un utilisateur !***',
            usages: `${PREFIX}userinfo | ${PREFIX}userinfo @membre`,
            raccourcis: 'userinfo, userinfos, infos, info'
        },
           category: 'Misc',
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
        return message.channel.send({ embeds: [ 
            this.client.functions.embed() 
                .setTitle(`***Voici quelques infos sur ${args.member.displayName} :***`)
                .setFooter(`ID : ${args.member.id}`)
                .setThumbnail(`${args.member.user.displayAvatarURL()}`)
                .addFields(
                    {name: 'Création du compte :', value: `Le ${args.member.user.createdAt}`, inline: true},
                    {name: 'Membre depuis :', value: `Le ${args.member.joinedAt}`, inline: true}
                )
        ]})
    }
}

module.exports = UserInfoCommand;