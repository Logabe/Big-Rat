const { SlashCommandBuilder } = require("@discordjs/builders");

//Get the sender's name

const getNameE = (message) => {
  return message.replace(/[a-zA-Z]/g, "e");
};

//Say hello to the sender
const sayHello = (message) => {
  return "Eeeee " + message + "!";
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Say Hello To me!"),
  execute: async (interaction, client) => {
    return interaction.reply(sayHello(getNameE(interaction.message.content)));
  },
};
