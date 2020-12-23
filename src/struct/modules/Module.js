module.exports = class TaisakuModule {
    constructor(identifier, options = {}) {
        
        /**
         * Returns the identifier of the module.
         * @returns {string}
         */
        this.toString = () => {
            return identifier
        }
    };
};