import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Header, ChatItem, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

const Chat = ({ navigation }) => {
	return (
		<View style= { styles.page }>
			<Header type="dark-profile" title="Nairobi Putri Hayza" onPress= { () => navigation.goBack() } />
			<View style= { styles.content }>
				<ScrollView showsVerticalScrollIndicator= {false}>
					<Text style= { styles.chatDate }>Senin, 21 Maret, 2020</Text>
					<ChatItem isMe />
					<ChatItem/>
					<ChatItem isMe/>
					<ChatItem isMe/>
					<ChatItem />
				</ScrollView>
			</View>
			<InputChat/>
		</View>
	)
}

export default Chat

const styles= {
	page: {
		flex: 1,
		backgroundColor: colors.white
	},
	content: {
		flex: 1
	},
	chatDate: {
		fontSize: 11,
		fontFamily: fonts.primary.normal,
		color: colors.text.secondary,
		marginVertical: 20,
		textAlign: 'center'
	}
}