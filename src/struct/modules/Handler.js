const { EventEmitter } = require('events');
const TaisakuModule = require('./Module');

/**
 * Base class for a module handler.
 * @param {TaisakuClient} client - The taisaku client.
 * @param {HandlerOptions} options - Options for the handler.
 * @extends {EventEmitter}
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