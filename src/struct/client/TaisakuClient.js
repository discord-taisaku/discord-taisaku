const { Client } = require("discord.js");
const { Logger } = require("nicer-logging");

/**
 * Taisaku framework client.
 * @param {TaisakuClientOptions} options - Taisaku client options.
 * @param {ClientOptions} clientOptions - Discord client options.
 */
module.exports = class TaisakuClient extends Client {
    constructor(options = {}, clientOptions) {
        super(clientOptions || options);

        const {
            owners = [""]
        } = options;

        /**
         * Bot owners.  
         * These have full control over the bot and bypass everything, so be mindful of who you give this to.
         */
        this.owners = owners;
    };

    /**
     * Logs in to the bot.
     * @param {string} token The bot token.
     * @returns {Promise<string>}
     */
    async init(token) {
        if (!this.token) this.token = token;
        return await this.login(token)
            .catch((err) => {
                err.message === 'An invalid token was provided.' ? this.logger.error(`The provided token was invalid`) : this.logger.error(`Failed to login.`);
            });
    };

    get logger() {
        return new Logger(this.logOptions ? this.logOptions : { useColors: false });
    }
};