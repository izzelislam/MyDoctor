import React from 'react'
import { View, Text } from 'react-native'
import { Header, List } from '../../components'
import { DumyDoctor1 } from '../../assets'
import { colors } from '../../utils'

const ChooseDoctor = ({ navigation }) => {
	return (
		<View style= { styles.page }>
			<Header title="Pilih Dokter Anak" type="dark" onPress= { () => navigation.goBack() }/>
			<List onPress={ () => navigation.navigate('Chat') } type="next" avatar={ DumyDoctor1 } name="Alexander Jannie" desc="Wanita" />
			<List onPress={ () => navigation.navigate('Chat') } type="next" avatar={ DumyDoctor1 } name="Alexander Jannie" desc="Wanita" />
			<List onPress={ () => navigation.navigate('Chat') } type="next" avatar={ DumyDoctor1 } name="Alexander Jannie" desc="Wanita" />
			<List onPress={ () => navigation.navigate('Chat') } type="next" avatar={ DumyDoctor1 } name="Alexander Jannie" desc="Wanita" />
			<List onPress={ () => navigation.navigate('Chat') } type="next" avatar={ DumyDoctor1 } name="Alexander Jannie" desc="Wanita" />
		</View>
	)
}

export default ChooseDoctor

const styles= {
	page: {
		flex: 1,
		backgroundColor: colors.white
	}
}