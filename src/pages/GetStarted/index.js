import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import {ILLogo, ILGetStarted} from '../../assets'
import { Button, Gap } from '../../components'
import { colors, fonts } from '../../utils'

const GetStarted = ({navigation}) => {
	return (
		<ImageBackground source={ILGetStarted} style= { styles.page }>
			<View>
				<ILLogo/>
				<Text style={ styles.title} >Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
			</View>
			<View>
				<Button title="Get Started" onPress={ () => navigation.navigate('Register') } />
				<Gap height={16} />
				<Button title="Sign In" type="secondary" onPress={ ()=> navigation.navigate('Login') } />
			</View>
		</ImageBackground>
	)
}

export default GetStarted

const styles= {
	page: {
		padding: 40,
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: colors.white
	},
	title: {
		fontSize: 28,
		marginTop: 91,
		color: colors.white,
		fontFamily: fonts.primary[600]
	}
}