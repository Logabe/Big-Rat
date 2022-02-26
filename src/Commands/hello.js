const { SlashCommandBuilder } = require("@discordjs/builders");

const getName = (message) => {
  if (message.guild != null) {
    return message.member.displayName;
  } else {
    return message.author.username;
  }
};

const getNameE = (message) => {
  return message.replace(/[a-zA-Z]/g, "e");
};

//Replace every letter in the senders name with the letter 'e'
module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Say Hello to the rat!"),
  execute: async (interaction, client) => {
    return interaction.reply("Eeeee, " + getNameE(interaction.message.replace(/[a-zA-Z]/g, "e")) +"!");
  },
};
