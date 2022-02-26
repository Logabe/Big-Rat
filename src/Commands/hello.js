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
  name: "hello",
  description: "Says hello to the sender",
  execute: (message, args) => {
    message.reply(sayHello(getNameE(message.author.username)));
  },
};
