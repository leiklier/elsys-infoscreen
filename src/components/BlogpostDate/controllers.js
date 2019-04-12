import dateFormat from 'dateformat'

dateFormat.i18n = {
	dayNames: [
		'Søn',
		'Man',
		'Tir',
		'Ons',
		'Tors',
		'Fri',
		'Lør',
		'Søndag',
		'Mandag',
		'Tirsdag',
		'Onsdag',
		'Torsdag',
		'Fredag',
		'Lørdag'
	],
	monthNames: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'Mai',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Okt',
		'Nov',
		'Des',
		'Januar',
		'Februar',
		'Mars',
		'April',
		'Mai',
		'Juni',
		'Juli',
		'August',
		'September',
		'Oktober',
		'November',
		'Desember'
	],
	timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM']
}

export function formatDate(date) {
	return dateFormat(date, 'ddd d"." mmmm "kl." HH:MM')
}
