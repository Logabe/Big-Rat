const { SlashCommandBuilder } = require("@discordjs/builders");

//Get the sender's name

const getNameE = (message) => {
  return message.replace(/[a-zA-Z]/g, "e");
};

//Say hello to the sender
const sayHello = (message) => {
  return "Eeeee " + message + "!";
};
//sayHello(getNameE(interaction.user.username))
module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Say hello to the rat."),
  execute: async (interaction, client) => {
    var i = Math.floor(Math.random() * 2);
    if(i = 0){
      return interaction.reply('Ee, ' + getNameE(interaction.user.username) + '!');
    } else if(i = 0){
      return interaction.reply('Eeeee, ' + getNameE(interaction.user.username) + '!');
    }
  },
};
