const util = require("../util");
const disbut = require("discord-buttons")

const unlisted = ["eval", "source"];
const prefix = process.env.PREFIX
module.exports = {
    name: "help",
    aliases: ["h", "hp"],
    exec: (msg) => {
        const commands = msg.client.commands
            .filter(c => !unlisted.includes(c.name))
            .map(c => `${c.name}`);

        const embed = util.embed()
            .setTitle('>  **Command List** ')
            .addField('<a:info5:778449861112365067> **❯ INFO**  ', ` My Prefix is \`${prefix}\` or Just @Mention Me <a:tbut1:812562118846578721> `)
            .addField('<a:22:778450157636157441> **❯ MUSIC[14] :**', ' `24/7`,`play`,`join`,`loop`, `lyrics`, `nowplaying`, `pause`, `queue`, `remove`, `resume`, `search`, `shuffle`, `skip`, `skipto`, `stop`, `volume`')
            .addField('<a:thunder:828532598375841793> **❯ FILTERS & MISC[4] :**','`bassboost`, `autoplay`,`seek`,`move`')
            .addField('<a:8780_discord_geaz:778450033867489292> **❯ UTILITIES[4] :**','`stats`,`invite`,`help`, `ping`,`Avatar`')
            .setFooter(`© ${msg.guild.me.displayName}`)

            .setThumbnail(msg.client.user.displayAvatarURL({ dynamic: true, size: 2048 }))

let button = new disbut.MessageButton()
       .setStyle('url')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=849607179329994764&permissions=3206720&scope=bot')
       .setLabel('INVITE LINK')

let button2 = new disbut.MessageButton()
       .setStyle('url')
       .setURL('https://discord.gg/D73chGNT')
       .setLabel('SUPPORT SERVER')

let row = new disbut.MessageActionRow()
       .addComponents(button, button2);

        msg.channel.send(embed, row);
    }
};

console.log("help working")