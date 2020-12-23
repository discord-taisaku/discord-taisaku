declare module "discord-taisaku" {
    import { Client, ClientOptions, MessageEmbed, MessageEmbedOptions, Snowflake, GuildMember, Message } from "discord.js";
    import { Logger } from "nicer-logging";

    module "discord.js" {
        interface Message {
            util?: MessageUtils;
        }
    }

    export class TaisakuClient extends Client {
        public constructor(options?: TaisakuClientOptions, clientOptions?: ClientOptions);
        public owners: Snowflake[];
        public logger: Logger;
        public init(token: string): Promise<string>;
        public util: ClientUtils;
    }

    export interface TaisakuClientOptions {
        owners?: Snowflake[];
        prefix?: string[];
    }

    export class ClientUtils {
        public constructor(client: TaisakuClient);
        public client: TaisakuClient;
        public guildSize(): number;
        public guildNames(): string[];
        public embed(options: MessageEmbedOptions): MessageEmbed;
        public permissionNames(guildMember: GuildMember): string[];
        public cutePermission(permission?: string): string;
    }

    export class MessageUtils {
        public constructor(client: TaisakuClient, message: Message);
        public send(content: string): Promise<Message>;
    }
}