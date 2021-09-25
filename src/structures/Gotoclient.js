const { embed } = require('../utile/functions');
const { AkairoClient, CommandHandler, ListenerHandler }  = require('discord-akairo');
const { TOKEN, MONGOSTRING } = require('../../config');
const mongoose = require('mongoose');

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
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners/'
        });

        this.functions = {
            embed: embed
        }
    }

        init(){
            this.CommandHandler.useListenerHandler(this.listenerHandler);
            this.CommandHandler.loadAll()
            console.log(`Commandes -> ${this.CommandHandler.modules.size}`)
            this.listenerHandler.loadAll();
            console.log(`Listeners -> ${this.listenerHandler.modules.size}`)
    }

    async start(){
        try{
            await mongoose.connect(MONGOSTRING, {
                useNewUrlParser: true, useUnifiedTopology: true 
            });
            console.log("DB connectée !");
        } catch(e){
            console.log("DB non connectée !\n\n", e)
            return process.exit();
        }

        await this.init();
        return this.login(TOKEN);
    }
}