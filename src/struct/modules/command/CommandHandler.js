const Command = require('./Command');
const THandler = require("../Handler");

/**
 * The handler that handles all {@link Command}s.
 * @param {TaisakuClient} client - The taisaku client.
 * @extends {TaisakuHandler}
 */
module.exports = class CommandHandler extends THandler {
    constructor(client, {
        blockBots = true,
        directory,
        moduleToHandle = Command,
        bypassPermissions = client.ownerID,
        bypassCooldown = client.ownerID
    }) {
        super(client, {
            blockBots,
            directory,
            moduleToHandle
        });
    }
};