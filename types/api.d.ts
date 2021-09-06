export interface TwitchChannelChatters {
  _links: {},
  chatter_count: number,
  chatters: {
    broadcaster: string[],
    vips: string[],
    moderators: string[],
    staff: string[],
    admins: string[],
    global_mods: string[],
    viewers: string[]
  }
}