const { MessageAttachment, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");

const file = new MessageAttachment('./Media/ratpog.png');

const embed = new MessageEmbed()
	.setTitle('rat pog')
	.setImage('attachment://bigrat.png');

module.exports = {
    data: new SlashCommandBuilder()
      .setName("ratpog")
      .setDescription("rat pog"),
    execute: async (interaction, client) => {
        return interaction.reply({ embeds: [embed], files: [file] });
    },
  };