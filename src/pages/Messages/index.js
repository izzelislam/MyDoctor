import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { List } from '../../components'
import { colors, fonts, getData } from '../../utils'
import { DumyDoctor1, DumyDoctor2, DumyDoctor3 } from '../../assets'
import { Fire } from '../../config'

const Messages = ({ navigation }) => {
	const [historyChat, setHistoryChat]= useState([])
	const [user, setUser]= useState({})
	
	useEffect(() => {
		getDataUserFromLocal()
		const rootDB= Fire.database().ref()
		const urlHistory= `messages/${user.uid}/`
		const messageDB= rootDB.child(urlHistory)

		messageDB.on('value',async snapshot => {
			if(snapshot.val()){
				const oldData=snapshot.val()
				const newData=[]
				
				const promises= await Object.keys(oldData).map(async key => {
					const urlUidDoctor= `doctors/${oldData[key].uidPartner}`
					const detailDoctor= await rootDB.child(urlUidDoctor).once('value')
					console.log('detail doctor', detailDoctor.val())
					newData.push({
						id: key,
						detailDoctor: detailDoctor.val(),	
						...oldData[key]
					})
				})

				await Promise.all(promises)
				setHistoryChat(newData)
			}
		})
	}, [user.uid])

	const getDataUserFromLocal= () => {
		getData('user')
		.then( res => {
			setUser(res)
		})
	}

	return (
		<View style= { styles.page }>
			<View style= { styles.content }>
				<Text style= { styles.title }>Messages</Text>
				{ historyChat.map( chat => {
					const dataDoctor= {
						id: chat.detailDoctor.uid,
						data: chat.detailDoctor
					}
					return (
						<List key={ chat.id } avatar={{ uri:chat.detailDoctor.photo }} name={ chat.detailDoctor.fullName } desc={ chat.lastContentChat }
							onPress= { () => navigation.navigate('Chat', dataDoctor) } />
					)
				} ) }
			</View>
		</View>
	)
}

export default Messages

const styles= {
	page: {
		backgroundColor: colors.secondary,
		flex: 1
	},
	content: {
		backgroundColor: colors.white,
		flex: 1,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	title: {
		fontSize: 20,
		color: colors.text.primary,
		fontFamily: fonts.primary[600],
		marginTop: 30,
		marginLeft: 16
	}
}