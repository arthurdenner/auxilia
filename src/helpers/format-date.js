import moment from 'moment';

const formatDate = date => moment(date).format('DD/MM/YYYY - HH:mm');

export default formatDate;
