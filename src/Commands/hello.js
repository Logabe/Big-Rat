const { SlashCommandBuilder } = require("@discordjs/builders");

//Get the sender's name

const getNameE = (message) => {
  return message.replace(/[a-zA-Z]/g, "e");
};

//Replace every letter in the senders name with the letter 'e'
module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Say Hello to the rat!"),
  execute: async (interaction, client) => {
    return interaction.reply("Eeeee, " + getNameE(interaction.message.author) +"!");
  },
};
