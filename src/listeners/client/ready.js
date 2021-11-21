const { Listener } = require('discord-akairo');
const moment = require('moment');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        console.log(`${moment().format('LTS')} : Bot Opérationel !`);
    }
}

module.exports = ReadyListener;