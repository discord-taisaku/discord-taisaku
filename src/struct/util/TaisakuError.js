const Messages = {
    THIS_IS_A_TEST: "this do be a test doe"
};

exports.Messages = Messages;

/**
 * Base class for a taisaku error.
 * @param {string} key - The error key.
 * @param {...any[]} args - Arguments, if needed, depending on the key.
 * @extends {Error}
 */
module.exports = class TaisakuError extends Error {
    constructor(key, ...args) {
        if (!Messages[key] || key === "THIS_IS_A_TEST") throw new TypeError(`Invalid key '${key}'!`);
        const message = typeof Messages[key] === 'function'
            ? Messages[key](...args)
            : Messages[key];
        super(message);

        this.key = key;
    };

    get name() {
        return `TaisakuError`
    };
};