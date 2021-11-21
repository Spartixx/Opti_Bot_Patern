const { Listener } = require('discord-akairo');
const moment = require('moment');

class guildMemberRemoveListener extends Listener {
    constructor() {
        super('guildMemberRemove', {
            emitter: 'client',
            event: 'guildMemberRemove'
        });
    }

    async exec(member) {
        let leave_channel = this.client.channels.cache.get('910998531177865257')
        let pseudo = `${'```'}\n${member.user.tag}${'```'}`
        let membres = `${'```'}\n${member.guild.memberCount.toLocaleString()}${'```'}`
        let member_id = `${'```'}\nid : ${member.user.id}${'```'}`

        const embed = this.client.functions.embed()
            .setTitle('👋 ***Un membre vient de partir !*** 👋')
            .addField('🤖 Pseudo : 🤖', pseudo, true)
            .addField('📈 membres : 📈', membres, true)
            .addField('***On espère te revoir parmis nous !***', `${member_id}`, false)
            .setImage(member.user.displayAvatarURL())

        await leave_channel.send({embeds: [embed]})
        .then(() => console.log(`${moment().format('LTS')} : guildMemberRemove --> Message envoyé pour ${member.user.tag}`))
        .catch(() => console.log(`${moment().format('LTS')} : guildMemberRemove --> Message /non/ envoyé pour ${member.user.tag}`))
    }
}

module.exports = guildMemberRemoveListener;