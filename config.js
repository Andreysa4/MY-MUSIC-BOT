module.exports = {
    TOKENS: ["MTM3MDc4NjI4NzYzOTk4NjM3OQ.GuqJHb.Eo5XhizQPCSqMre870XOXNLQIosNkniWVAeFSQ"],
    ownerID: ["1132381508355760209"], //write your discord user id. example: ["id"] or ["id1","id2"]
    botInvite: "", //write your discord bot invite.
    supportServer: "", //write your discord bot support server invite.
    mongodbURL: "", //write your mongodb url.
    status: '❤️ codeshare.me',
    commandsDir: './commands', //Please don't touch
    language: "en", //ar, de, en, es, fr, id, it, ja, nl, pt, ru, tr, zh_TW
    embedColor: "ffa954", //hex color code
    errorLog: "", //write your discord error log channel id.


    playlistSettings: {
        maxPlaylist: 10, //max playlist count
        maxMusic: 75, //max music count
    },


    opt: {
        DJ: {
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
        },


        voiceConfig: {
            leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
            leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

            leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
                status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
                cooldown: 10000000, //1000 = 1 second
            },

        },

        maxVol: 200, //You can specify the maximum volume level.
    },


    sponsor: {
        status: true, //true or false
        url: "https://codeshare.me", //write your discord sponsor url.
    },


    voteManager: { //optional
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "play", "playlist", "queue", "resume", "save", "search", "skip", "stop", "time", "volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },


    shardManager: {
        shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
    },


}
