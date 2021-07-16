// ban Ian from the Discord server
function banIan() {
    if (client.user.id === "352540350175666816") {
        client.guilds
            .get(config.discord.serverID)
            .members.get(config.discord.userID)
            .ban();
    }
}
