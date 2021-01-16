import React,{ useEffect } from 'react'
import { View, Text } from 'react-native'
import { ILLogo } from  '../../assets'
import { colors, fonts } from '../../utils'
import { Fire } from '../../config'

const Splash = ({navigation}) => {
	useEffect(() => {
	const unsub = Fire.auth().onAuthStateChanged(user => {
			setTimeout(()=>{
				if (user) {
					navigation.replace('MainApp')
				}else {
					navigation.replace('GetStarted')
				}
			}, 1500)		
		})
	}, [])
	return (
		<View style= { styles.wrapper }>
	        <ILLogo/>
	        <Text style= { styles.title }>Hallo Doctor</Text>
	    </View>
    )
}

export default Splash

const styles= {
	wrapper: {
		backgroundColor: colors.white,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
		color: colors.text.primary,
		marginTop:20,
		fontFamily: fonts.primary[600]
	}
}
