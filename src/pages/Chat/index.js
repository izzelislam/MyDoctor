import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Header, ChatItem, InputChat } from '../../components'
import { colors, fonts, getData, getChatTime, setDateChat } from '../../utils'
import { Fire } from '../../config'

const Chat = ({ navigation, route }) => {
	const dataDoctor= route.params
	const [chatContent, setChatContent]= useState("")
	const [user, setUser]= useState({})
	const [chatData, setChatData]= useState([])

	useEffect(() => {
		getDataUserFromLocal()
		const urlFirebase= `chatting/${user.uid}_${dataDoctor.data.uid}/allChat/`
		Fire.database().ref(urlFirebase).on('value', (snapshot) => {
			// console.log('isi chat',snapshot.val())
			if(snapshot.val()){
				const dataSnapshot= snapshot.val()
				const allDataChat= []
				Object.keys(dataSnapshot).map(key =>{
					const dataChat= dataSnapshot[key]
					const newDataChat= []

					Object.keys(dataChat).map(itemChat => {
						newDataChat.push({
							id: itemChat,
							data: dataChat[itemChat]
						})
					})

					allDataChat.push({
						id: key,
						data: newDataChat
					})
				})
				console.log('semua chat data',allDataChat)
				setChatData(allDataChat)
			}
		})
	}, [dataDoctor.data.uid, user.uid])

	const getDataUserFromLocal= () => {
		getData('user')
		.then( res => {
			setUser(res)
		})
	}

	const chatSend= () => {
		const today= new Date()

		const data= {
			sendBy: user.uid,
			chatDate: today.getTime(),
			chatTime:getChatTime(today),
			chatContent: chatContent
		}

		const chatId= `${user.uid}_${dataDoctor.data.uid}`
		const urlFirebase= `chatting/${chatId}/allChat/${setDateChat(today)}`
		const urlMessagesUser= `messages/${user.uid}/${chatId}`
		const urlMessagesDoctor= `messages/${dataDoctor.data.uid}/${chatId}`
		
		const dataHistoryChatForUser= {
			lastContentChat: chatContent,
			lastChatDate: today.getTime(),
			uidPartner: dataDoctor.data.uid
		}
		
		const dataHistoryChatForDoctor= {
			lastContentChat: chatContent,
			lastChatDate: today.getTime(),
			uidPartner: user.uid
		}

		Fire.database()
			.ref(urlFirebase).push(data)
			.then(() => {
				setChatContent("")
				Fire.database().ref(urlMessagesUser).set(dataHistoryChatForUser)
				Fire.database().ref(urlMessagesDoctor).set(dataHistoryChatForDoctor)
			})
			.catch(err => console.log(err.message))
	}

	return (
		<View style= { styles.page }>
			<Header
				type="dark-profile"
				title={dataDoctor.data.fullName}
				desc={dataDoctor.data.profession}
				avatar={{uri: dataDoctor.data.photo}}
				onPress= { () => navigation.goBack() }
			/>
			<View style= { styles.content }>
				<ScrollView showsVerticalScrollIndicator= {false}>
					{chatData.map(chat => {
							return(
									<View key={chat.id}>
										<Text style= { styles.chatDate }>{chat.id}</Text>
										{
											chat.data.map(itemChat => {
												return <ChatItem 
																	key={itemChat.id}
																	isMe={itemChat.data.sendBy === user.uid }
																	text={itemChat.data.chatContent}
																	date={itemChat.data.chatTime}
															/>
											})
										}
									</View>
								)
						})}
				</ScrollView>
			</View>
			<InputChat
				value={chatContent}
				onChangeText={value =>setChatContent(value) }
				onPress={chatSend}
				placeholder={dataDoctor.data.fullName}
			/>
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