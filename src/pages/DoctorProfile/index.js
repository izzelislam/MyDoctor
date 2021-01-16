import React from 'react'
import { View, Text } from 'react-native'
import { Header, Profile, ProfileItem, Button, Gap } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({ navigation }) => {
	return (
		<View style= { styles.page }>
			<Header title="Doctor Profile" onPress= { () => navigation.goBack() } />
			<Profile name="Nairobi Putri" desc="Dokter Anak" />
			<Gap height= {10} />
			<ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
			<ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
			<ProfileItem label="No. STR" value="0000116622081996" />
			<View style= { styles.action }>
				<Button title="Start Consultation" onPress={ () => navigation.navigate('Chat') }/>
			</View>
		</View>
	)
}

export default DoctorProfile

const styles= {
	page: {
		flex: 1,
		backgroundColor: colors.white
	},
	action: {
		paddingHorizontal: 40,
		paddingTop: 23
	}
}