const { MessageEmbed } = require("discord.js");

/**
 * Class to help with client utilities.
 * @param {TaisakuClient} client - The taisaku client.
 */
module.exports = class ClientUtils {
    constructor(client) {
        /**
         * The taisaku client.
         * @type {TaisakuClient}
         */
        this.client = client;
    };

    /**
     * Returns the amount of guilds the client is in.
     * @returns {number}
     */
    guildSize() {
        return this.client.guilds.cache.size
    };

    /**
     * Returns the names of the guilds the client is in.
     * @returns {string[]}
     */
    guildNames() {
        return this.client.guilds.cache.array()
    };

    /**
     * Creates a MessageEmbed.
     * @param {MessageEmbedOptions} options - Options for the embed.
     * @returns {MessageEmbed}
     */
    embed(options) {
        return new MessageEmbed(options);
    };

    /**
     * Returns the permission names of the provided guild member.
     * @param {GuildMember} guildMember - The guild member.
     * @returns {string[]}
     */
    permissionNames(guildMember) {
        return guildMember.permissions.toArray();
    };
};