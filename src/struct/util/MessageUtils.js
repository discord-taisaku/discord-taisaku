/**
 * Message utilities.
 * @param {TaisakuClient} client - The taisaku client.
 * @param {Message} message - The message.
 */
 module.exports = class MessageUtils {
    constructor(client, message) {
        this.create = this.send;

        /**
         * The taisaku client.
         * @type {TaisakuClient}
         */
        this.client = client;

        /**
         * The message.
         * @type {Message}
         */
        this.message = message;
    };

    /**
     * Sends a message.
     * @param {*} content - The message content.
     * @returns {Promise<Message>}
     */
    async send(content) {
        return this.message.channel.send(content);
    };
 };