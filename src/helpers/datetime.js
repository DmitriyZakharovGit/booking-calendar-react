import moment from 'moment';

export const getMountYear = (now) => moment(now).format('M,Y');
export const nextWeek = (now) => moment(now).add(1, 'weeks');
export const prevWeek = (now) => moment(now).subtract(1, 'weeks');
