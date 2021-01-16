import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { colors, fonts } from '../../../utils'

const Loading = () => {
	return (
		<View style= { styles.wrapper }>
			<ActivityIndicator size="large" color={colors.primary} />
			<Text style= { styles.text }>Loading...</Text>
		</View>
	)
}

export default Loading

const styles= {
	wrapper: {
		flex: 1,
		position: 'absolute',
		backgroundColor: colors.loadingBackground,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%'
	},
	text: {
		fontSize: 18,
		color: colors.primary,
		fontFamily: fonts.primary[600],
		marginTop: 6
	}
}