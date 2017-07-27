import { identity } from 'lodash/fp';

const actionHandler = [identity, (payload, meta) => meta];

export default actionHandler;
