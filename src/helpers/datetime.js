import moment from 'moment';

export const getGMT = () => moment().format('HH:mm');
export const getPacificTime = () => moment().format('hh:mm A');
export const getDayWeek = (date) => {
	const weekDay = moment(date).format('dddd').substring(0, 3);
	const monthDay = moment(date).date();

	return `${weekDay} ${monthDay}`;
};
export const getMonthYear = (date) => moment(date).format('MMMM, Y');
export const nextWeek = (date) => moment(date).add(1, 'weeks');
export const prevWeek = (date) => {
	const subtractedDate = moment(date).subtract(1, 'weeks');
	const isBefore = moment().isAfter(subtractedDate);

	return isBefore ? moment(date) : subtractedDate;
};
