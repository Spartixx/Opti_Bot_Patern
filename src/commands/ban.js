const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');


class BanCommand extends Command {
    constructor() {
        super('ban', {
           aliases: ['ban'],
           description: {
            content: 'La commande ban permet de bannir des utilisateurs !',
            usages: `${PREFIX}ban <mention> <durée (en jour, indiquer que le chiffre) <reason>`,
            raccourcis: 'ban'
        },
           category: 'Modération',
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'BAN_MEMBERS',
           clientPermissions: 'BAN_MEMBERS',
           ratelimit: 2,
           cooldown: 3000,
           typing: true,
           ownerOnly: false,
           channel: 'guild',
           args: [
               {id: 'member', type: 'member'},
               {id: 'reason', type: 'string', match: "restContent"}
           ],
        });
    }

    async exec(message, { member, reason }) {

        let args = message.content.split(' ')
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('911927775567425557')
        const pseudo = `${'```'}\n ${member.user.tag} ${'```'}`;
        const identifiant = `${'```'}\n ${member.user.id} ${'```'}`;
        const ban_reason = `${'```'}\n ${reason} ${'```'}`;
        const ban_channel = this.client.channels.cache.get('911719516050960414');

        if(!reason) reason = "Raison non spécifiée.";
        if(member.id === "845741568388366366"){
            return message.reply('***Je n\'est pas la permission de bannir cette personne !***')
        }
        if(args[2] > 7) args[2] = 7, message.reply('Le nombre de jours maximum définis par discord est 7, le nombre de jours à donc été changé pour 7.')
        else{
        member ? member.ban({days: args[2], reason: args[3]}) : message.reply('***l\'utilisateur n\'existe pas !***');}

        const ban_duration = `${'```'}\n ${args[2]} jours ${'```'}`;

        const embed = this.client.functions.embed()
        .setTitle(' ***✅ Ban effectué ! ✅*** ')
        .addField('🤖 pseudo 🤖', pseudo, true)
        .addField('🆔 Identifiant 🆔', identifiant, false)
        .addField('🔷 Raison 🔷', ban_reason, false)
        .addField('⌛ Durée ⌛',ban_duration, false )
        .setImage(member.user.displayAvatarURL())

    await ban_channel.send({embeds: [embed]})
    .then(() => console.log(`${moment().format('LTS')} : Ban --> Message envoyé pour ${member.user.tag}`)).then(() => CONSOLE_LOG_CHANNEL.send(`${'```'}\n${moment().format('LTS')} : Ban --> Message envoyé pour ${member.user.tag} ${'```'}`))
    .catch(() => console.log(`${moment().format('LTS')} : Ban --> Message /non/ envoyé pour ${member.user.tag}`))
    }
}

module.exports = BanCommand;