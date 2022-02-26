const { MessageAttachment, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");

const file = new MessageAttachment('/Media/bigrat.png');

const embed = new MessageEmbed()
	.setTitle('big rat')
	.setImage('attachment://bigrat.png');

module.exports = {
    data: new SlashCommandBuilder()
      .setName("rat")
      .setDescription("big rat"),
    execute: async (interaction, client) => {
        return interaction.reply({ embeds: [embed], files: [file] });
    },
  };