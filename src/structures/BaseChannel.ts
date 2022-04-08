import type { APIChannel } from 'discord-api-types/v10';
import type Client from '../index';

// const ChannelTypes = {
//     GUILD_TEXT: 0,
//     DM: 1,
//     GROUP_DM: 3,
//     GUILD_NEWS: 5,

//     GUILD_NEWS_THREAD: 10,
//     GUILD_PUBLIC_THREAD: 11,
//     GUILD_PRIVATE_THREAD: 12,

//     GUILD_VOICE: 2,
//     GUILD_STAGE_VOICE: 13, //GUILD_STAGE: 13

//     GUILD_CATEGORY: 4,
// };

class BaseChannel <poto extends APIChannel>{
	data: poto;
	client: Client;
	//type APIChannel = APIGroupDMChannel | APIDMChannel | APITextChannel | APINewsChannel | APIVoiceChannel | APIGuildCategoryChannel | APIThreadChannel

	constructor(client: Client, data: poto) {
		this.data = data;
		this.client = client;
	}

	get name() {
		return this.data.name!;
	}

	get id() {
		return this.data.id;
	}

	get type() {
		return this.data.type;
	}

	// get guildID() {
	// 	return this.data.guild_id;
	// }

}


export default BaseChannel;