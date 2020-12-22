declare module "discord-taisaku" {
    import { Client, ClientOptions, Snowflake } from "discord.js";
    import { Logger } from "nicer-logging";

    export class TaisakuClient extends Client {
        public constructor(options?: TaisakuClientOptions, clientOptions?: ClientOptions);
        public owners: Snowflake[];
        public logger: Logger;
        public init(token: string): Promise<string>;
    }

    export interface TaisakuClientOptions {
        owners?: Snowflake[];
        prefix?: string[];
    }
}