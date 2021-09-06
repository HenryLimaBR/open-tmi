import { NextApiRequest, NextApiResponse } from 'next'
import { TwitchChannelChatters } from '../../types/api'
import axios from 'axios'

async function chatters(req: NextApiRequest, res: NextApiResponse<TwitchChannelChatters | {}>) {
  const username: string = req.query.username as string
  if (username) {
    const chatters: TwitchChannelChatters = (await axios.get(`https://tmi.twitch.tv/group/user/${username}/chatters`)).data
    return res.status(202).json(chatters)
  }
  return res.status(400).json({})
}

export default chatters