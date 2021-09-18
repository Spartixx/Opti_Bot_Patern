const { TOKEN } = require('./config');
const GotoClient = require('./src/structures/Gotoclient')


let client = new GotoClient({
    prefix: '/'
});

client.login(TOKEN);