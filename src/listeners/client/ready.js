const { Listener } = require('discord-akairo');
const moment = require('moment');
const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('youtube')
    .setDescription('Permet de regarder youtube en stream !');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        console.log(`${moment().format('LTS')} : Bot Opérationel !`)
        CONSOLE_LOG_CHANNEL.send(`${'```'}\n${moment().add(6, 'hours').format('LTS')} : Bot Démarré avec succès ! ${'```'}`);

        
        
        this.client.guilds.cache.get('910277150177890324').commands.create(data)
    }
}

module.exports = ReadyListener;