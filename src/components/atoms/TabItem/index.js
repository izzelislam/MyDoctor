import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { IconDoctor, IconDoctorActive, IconMessagesActive, IconHospitalsActive, IconHospitals, IconMessages } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({ title, active, onPress, onLongPress}) => {
	const Icon= () => {
		if (title === 'Doctor') {
			return active ? <IconDoctorActive/> : <IconDoctor/>
		}
		if (title === 'Messages') {
			return active ? <IconMessagesActive/> : <IconMessages/>
		}
		if (title === 'Hospitals') {
			return active ? <IconHospitalsActive/> : <IconHospitals/>
		}
		return <IconDoctor/>
	}

	return (
		<TouchableOpacity style= { styles.container } onPress= { onPress } onLongPress= { onLongPress }>
			<Icon/>
			<Text style= { styles.text(active) } >{title}</Text>
		</TouchableOpacity>
	)
}

export default TabItem

const styles= {
	container: {
		alignItems: 'center',
	},
	text: (active) => ({
		fontSize: 10,
		color: active ? colors.text.menuActive : colors.text.menuInactive,
		fontFamily: fonts.primary[600],
		marginTop: 4
	})
}