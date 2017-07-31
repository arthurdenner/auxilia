import moment from 'moment';

const formatDate = date => moment(date).utcOffset('-0300').format('DD/MM/YYYY - HH:mm');

export default formatDate;
