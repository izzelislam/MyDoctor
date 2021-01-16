import React from 'react'
import { View, Text } from 'react-native'
import IsMe from './IsMe'
import Other from './Other'

const ChatItem = ({ isMe }) => {
	if (isMe) {
		return <IsMe/>
	}
	return <Other/>
}

export default ChatItem

