const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login("NjgwNzk0ODI1OTY0MTI2Mjc2.XlFvoA.dugkRjeAqtmEKQuc7-h410EJCEc");



const PREFIX = 'rpg';

bot.on('ready', () =>{
    console.log('Bot nya onlen kok');
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[1]){
        case 'hunt':
            setTimeout(function(){
               message.reply('ya hunt lagi')
            },1*60000);
        break;

        case 'ladder':
            setTimeout(function(){
                message.reply('ya ladder lagi')
            },1*300000);
            break;
        
        case 'axe':
            setTimeout(function(){
                message.reply('ya axe lagi')
            },1*300000);
            break;

        case 'net':
            setTimeout(function(){
                message.reply('ya net lagi')
            },1*300000);
            break;
    }

})

