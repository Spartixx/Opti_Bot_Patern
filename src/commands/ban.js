const { Command } = require('discord-akairo');
const { PREFIX, CONSOLE_LOGS_CHANNEL } = require('../../config');
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
        const pseudo = `${'```'}\n ${member.user.tag} ${'```'}`;
        const identifiant = `${'```'}\n ${member.user.id} ${'```'}`;
        const ban_reason = `${'```'}\n ${args[3]} ${'```'}`;
        const ban_channel = this.client.channels.cache.get('911719516050960414');
        const embed_ban_duration = `${'```'}\n ${args[2]} ${'```'}`;
        const ban_duration = parseInt(args[2])
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')

        if(!reason){
            reason = 'Raison non justifiée.';

        }else if(member.permissions == "ADMINISTRATOR"){
            message.reply('***Je n\'est pas la permission de bannir cette personne !***')

        }else if(args[2] > 7){
            args[2] = 7, message.reply('***Le nombre de jours maximum définis par discord est 7, le nombre de jours à donc été changé pour 7.***')

        }else if(member.bannable == false){
            
            message.reply('***Une erreur est survenue, ce membre ne peut être banni.***')

        }else if(isNaN(args[2])){
            message.reply(`${args[2]} n'est pas un chiffre !`)
        }else{

            const embed = this.client.functions.embed()
            .setTitle(' ***:white_check_mark: Ban effectué ! :white_check_mark:*** ')
            .addField(':robot: pseudo :robot:', pseudo, true)
            .addField(':id: Identifiant :id:', identifiant, false)
            .addField(':large_blue_diamond: Raison :large_blue_diamond:', ban_reason, false)
            .addField(':hourglass: Durée :hourglass:',embed_ban_duration, false )
            .setImage(member.user.displayAvatarURL())
            
            await 
            CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`),
            ban_channel.send({embeds: [embed]}).then(member.ban({ days: ban_duration, reason: args[3] })).catch(err =>{
                console.log('Une erreur est survenue pour le commande Ban', err)
            })
        }
    }
};

module.exports = BanCommand;                    