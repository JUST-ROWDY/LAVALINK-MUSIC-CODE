const util = require("../util");

module.exports = {
    name: "invite",
    aliases: ["inv" , "i"],
    exec: (msg) => {
        msg.channel.send(util.embed().setDescription("<a:T_Loading:850330735860514866>   | [INVITE ME](https://discord.com/oauth2/authorize?client_id=854726496634798080&scope=bot&permissions=2147478769)  | [SUPPORT SERVER LINK](https://discord.gg/GNBmQz6fF5)").setImage('https://cdn.discordapp.com/attachments/854574478628618270/854960626555944970/standard_5.gif'));    
    }
};
