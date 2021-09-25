const GotoClient = require('./src/structures/Gotoclient')


let client = new GotoClient({
    prefix: '/'
});

client.start()