import moment from 'moment';

export const getGMT = () => moment().format('HH:mm');
export const getPacificTime = () => moment().format('hh:mm A');
export const getMountYear = (now) => moment(now).format('MMMM, Y');
export const nextWeek = (now) => moment(now).add(1, 'weeks');
export const prevWeek = (now) => moment(now).subtract(1, 'weeks');
