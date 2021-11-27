const { Listener } = require('discord-akairo');
const moment = require('moment');
const { SlashCommandBuilder } = require('@discordjs/builders');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('911927775567425557')
        console.log(`${moment().format('LTS')} : Bot Opérationel !`)
        CONSOLE_LOG_CHANNEL.send(`${'```'}\n${moment().format('LTS')} : Bot Démarré avec succès ! ${'```'}`);    
    }
}

module.exports = ReadyListener;