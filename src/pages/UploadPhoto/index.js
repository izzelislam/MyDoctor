import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Header, Button, Link, Gap } from '../../components'
import { ILNullPhoto, IconAddPhoto, IconRemovePhoto } from '../../assets'
import { colors, fonts, storeData } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker'
import { showMessage } from 'react-native-flash-message'
import { Fire } from '../../config'

const UploadPhoto = ({ navigation, route }) => {
	const {fullName, profesion, uid}= route.params
	const [hasPhoto, setHasPhoto]= useState(false)
	const [photo, setPhoto]= useState(ILNullPhoto)
	const [photoForDb, setPhotoForDb]= useState('')

	const getImage = () => {
		launchImageLibrary({includeBase64:true, quality: 0.5, maxWidth: 200, maxHeight: 200}, response => {
		  // console.log('response:', response)
		  if (response.didCancel) {
		  	showMessage({
		  		message: 'Anda belum memilih gambar',
		  		type: 'default',
		  		backgroundColor: colors.error,
		  		color: colors.white
		  	})
		  }else {
		  	  // console.log(response)
		  	  const source = {uri: response.uri}
		  	  setPhotoForDb(`data:${response.type};base64, ${response.base64}`)
			  setPhoto(source)
			  setHasPhoto(true)
			}
		});
	}

	const uploadAndContinue = () => {
		Fire.database()
	  	  	.ref('users/' + uid + '/')
	  	  	.update({ photo:photoForDb })

	  	const data= route.params
	  	data.photo= photoForDb

	  	storeData('user', data)

	  	navigation.replace('MainApp')
	}

	return (
		<View style= { styles.page }>
			<Header title="Upload Photo" onPress= { () => navigation.goBack() } />
			<View style= { styles.content }>
				<View style= { styles.profile }>
					<TouchableOpacity style= { styles.avatarwrapper } onPress={getImage}>
						<Image source={photo} style= { styles.avatar } />
						{hasPhoto && <IconRemovePhoto style= { styles.removephoto } />}
						{!hasPhoto && <IconAddPhoto style= { styles.addphoto } />}
					</TouchableOpacity>
					<Text style= { styles.name }>{fullName}</Text>
					<Text style= { styles.profesion }>{profesion}</Text>
				</View>
				<View>
					<Button disable={!hasPhoto} title="Upload and Continue" onPress={ uploadAndContinue } />
					<Gap height= {30}/>
					<Link title="Skip for this" align="center" size= {16} onPress={ () => navigation.navigate('MainApp') }/>
				</View>
			</View>
		</View>
	)
}

export default UploadPhoto

const styles= {
	page: {
		flex: 1,
		backgroundColor: colors.white
	},
	content: {
		paddingHorizontal: 40,
		paddingBottom: 64,
		flex: 1,
		justifyContent: 'space-between'
	},
	avatarwrapper: {
		height: 130,
		width: 130,
		borderWidth: 1,
		borderColor: colors.border,
		borderRadius: 65,
		alignItems: 'center',
		justifyContent: 'center'
	},
	avatar: {
		height: 110,
		width : 110,
		borderRadius: 110/2
	},
	addphoto: {
		position: 'absolute',
		bottom: 8,
		right: 6
	},
	removephoto: {
		position: 'absolute',
		bottom: 8,
		right: 6
	},
	name: {
		fontSize: 24,
		color: colors.text.primary,
		fontFamily: fonts.primary[600]
	},
	profesion: {
		fontSize: 18,
		color: colors.text.secondary,
		fontFamily: colors.primary[400]
	},
	profile: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	}
}