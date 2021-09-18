const { AkairoClient, CommandHandler }  = require('discord-akairo');

module.exports = class GotoClient extends AkairoClient {
    constructor(config = {}){
        super(
            { ownerID: '831835872625295390'},
            { 
                allowedMentions: {
                    parse: ['roles', 'users', 'everyone'],
                    repliedUser: true
                },
                partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
                presence: {
                    status: 'online',
                    activities: [
                        {
                            name: 'Spartix#0001',
                            type: 'PLAYING',
                            url: 'https://github.com/Spartixx/crunchy-bot'
                        }
                    ]
                },
                intents: 32767
            }
        );

        this.CommandHandler = new CommandHandler(this, {
            allowMention: true, 
            prefix: config.prefix,
            defaultCooldown: 3000,
            directory: './src/commands/'
        })

        this.CommandHandler.loadAll()
    }
}