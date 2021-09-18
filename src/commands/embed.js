const { Command } = require('discord-akairo');
const { BLUE_COLOR } = require('../../config');


class EmbedCommand extends Command {
    constructor() {
        super('embed', {
           aliases: ['embed'] 
        });
    }

    exec(message) {
        return message.channel.send({ embeds: [ 
            this.client.functions.embed() 
                .setDescription("Oui UwU !")
                .setTitle("Test")
        ]})
    }
}

module.exports = EmbedCommand;