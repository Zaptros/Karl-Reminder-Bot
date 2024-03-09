const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addreminder')
        .setDescription("Add channel to get weekly reminders")
        .addStringOption( option => 
            option.setName("day")
                .setDescription("Day of the week to be reminded")
                .addChoices(days)
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName("hour")
                .setDescription("Hour (0-23) to be reminded")
                .setMinValue(0)
                .setMaxValue(23)
                .setRequired(true)
        )
        .addStringOption( option => 
            option.setName("message")
                .setDescription("Reminder Message")
        ),
        async execute(interaction) {
            let c = interaction.channel;
            for (existing of sendToChannel) {
                if (existing.id == c.id) {
                    interaction.reply("This channel is already subscribed: on " )
                    return
                }
            } 
            let day = days.findIndex(interaction.options.getString('day'))
            let hour = interaction.options.getString('hour')
            let message = interaction.options.getString('message') ?? "Generic Reminder Message"

            await interaction.reply("Added this channel to reminder")
            console.log("Added channel \"" + c.name + "\" in server \"" + interaction.guild.name + '" for reminders at ' + days[day] + " at " + hour + "00")
            return {
                    id: c.id,
                    channel: c,
                    day:day,
                    hour:hour,
                    message: message
                }
        }
}