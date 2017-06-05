import { delete as del, get, post, put } from 'axios';
import { merge } from 'lodash';
import { url } from '../constants';
import { getAuth } from './selectors';

export const getOptions = (options = {}) => {
  const auth = getAuth();

  return merge({}, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `${auth.token_type} ${auth.access_token}`,
    },
  }, options);
};

export const create = (slug, data, options) =>
  post(`${url}/${slug}`, data, getOptions(options));

export const read = (slug, options) =>
  get(`${url}/${slug}`, getOptions(options));

export const remove = (slug, options) =>
  del(`${url}/${slug}`, getOptions(options));

export const update = (slug, data, options) =>
  put(`${url}/${slug}`, data, getOptions(options));
