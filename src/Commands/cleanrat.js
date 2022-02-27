const { MessageAttachment, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");

const file = new MessageAttachment('./Media/cleanrat.gif');

const embed = new MessageEmbed()
	.setTitle('clean rat')
	.setImage('attachment://cleanrat.gif');

module.exports = {
    data: new SlashCommandBuilder()
      .setName("cleanrat")
      .setDescription("rat clean"),
    execute: async (interaction, client) => {
        return interaction.reply({ embeds: [embed], files: [file] });
    },
  };