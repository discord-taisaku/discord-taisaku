const { EventEmitter } = require('events');
const TaisakuModule = require('./Module');

/**
 * Base handler class.
 * @param {TaisakuClient} client - The taisaku client.
 * @param {TaisakuHandlerOptions} options - Options for the handler.
 */
module.exports = class TaisakuHandler extends EventEmitter {
    constructor(client, {
        directory,
        moduleToHandle = TaisakuModule,
        fileExtensions = ['.js', '.ts']
    }) {
        super();

        this.client = client;
    };
};