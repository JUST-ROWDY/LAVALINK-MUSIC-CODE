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
            .addField(' **❯ INFO**  ', ` My Prefix is \`${prefix}\` or Just @Mention Me <a:tbut1:812562118846578721> `)
            .addField(' **❯ MUSIC[14] :**', ' `24/7`,`play`,`join`,`loop`, `lyrics`, `nowplaying`, `pause`, `queue`, `remove`, `resume`, `search`, `shuffle`, `skip`, `skipto`, `stop`, `volume`')
            .addField(' **❯ FILTERS & MISC[4] :**','`bassboost`, `autoplay`,`seek`,`move`')
            .addField(' **❯ UTILITIES[4] :**','`stats`,`invite`,`help`, `ping`,`Avatar`')
            .setFooter(`© ${msg.guild.me.displayName}`)

            .setThumbnail(msg.client.user.displayAvatarURL({ dynamic: true, size: 2048 }))

let button = new disbut.MessageButton()
       .setStyle('url')
       .setURL('YOUR BOT INVITE LINK)
       .setLabel('INVITE LINK')

let button2 = new disbut.MessageButton()
       .setStyle('url')
       .setURL('UR SUPPORT SERVER LINK ')
       .setLabel('SUPPORT SERVER')

let row = new disbut.MessageActionRow()
       .addComponents(button, button2);

        msg.channel.send(embed, row);
    }
};

console.log("help working")
