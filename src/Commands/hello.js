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
    .setDescription("Say Hello To me!"),
  execute: async (interaction, client) => {
    return interaction.reply('Ee, ' + getNameE(interaction.user.username) + '!');
  },
};
