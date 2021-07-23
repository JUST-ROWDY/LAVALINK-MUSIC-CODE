const MusicClient = require("./structures/MusicClient");

const client = new MusicClient({
    disableMentions: "everyone"
});
require('discord-buttons')(client);

client.build();
