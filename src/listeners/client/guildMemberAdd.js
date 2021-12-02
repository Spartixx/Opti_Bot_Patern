const { Listener } = require('discord-akairo');
const moment = require('moment');
const { CONSOLE_LOGS_CHANNEL } = require('../../../config');

class GuildMemberAddListener extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }

    async exec(member) {
        let join_channel = this.client.channels.cache.get('910998444313837659')
        let pseudo = `${'```'}\n${member.user.tag}${'```'}`
        let membres = `${'```'}\n${member.guild.memberCount.toLocaleString()}${'```'}`

        member.roles.add('910278872094875689')

        const embed = this.client.functions.embed()
            .setTitle('👋 ***Un nouveau membre est arrivé !*** 👋')
            .addField('🤖 Pseudo : 🤖', pseudo, true)
            .addField('📈 membres : 📈', membres, true)
            .setImage(member.user.displayAvatarURL())

        await join_channel.send({embeds: [embed]})
        .then(() => console.log(`${moment().format('LTS')} : guildMemberAdd --> Message envoyé pour ${member.user.tag}`)).then(() => CONSOLE_LOGS_CHANNEL.send(`${'```'}\n${moment().format('LTS')} : guildMemberAdd --> Message envoyé pour ${member.user.tag} ${'```'}`))
        .catch(() => console.log(`${moment().add(6, 'hours').format('LTS')} : guildMemberAdd --> Message /non/ envoyé pour ${member.user.tag}`))
    }
}

module.exports = GuildMemberAddListener;