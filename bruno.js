const fetch = require('node-fetch')
const auth = require('./token.json')

request();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function request() {
    while (true) {
        fetch(`https://discord.com/api/v9/applications/${auth.appid}/bot`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'authorization': `${auth.auth}` }
        }).then(res => res.json())
        .then(json => {
            console.log(json);
            if (json.message != 'Too many users have this username, please try another.') {
                console.log('Bruno a été créé !!')
                process.exit(0);
            }
            else console.log(json.message);
        });
        await sleep(60000);
    }
}