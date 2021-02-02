export const getChatTime= (date) => {
	const hour= date.getHours()
	const minute= date.getMinutes()

	return `${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`
}

export const setDateChat= (olddate) => {
	const year= olddate.getFullYear()
	const month= olddate.getMonth()+1
	const date= olddate.getDate()

	return `${year}-${month}-${date}`
}