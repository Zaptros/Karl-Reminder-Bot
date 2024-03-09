const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('delreminder')
    .setDescription("Remove channel from weekly reminders"),
    async execute(interaction) {
        let c = interaction.channel;
        for (i in sendToChannel) {
            if (sendToChannel[i].id == c.id) {
                sendToChannel.splice[i,1]
                interaction.reply("Channel will no longer receive reminders from Karl" )
                console.log("Removed channel \"" + c.name + "\" in server \"" + interaction.guild.name + '" from reminders')
                return
            }
        }
        await interaction.reply("Channel did not have a reminder :(" );
    }
}