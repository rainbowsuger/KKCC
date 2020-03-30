import Http from './http';

export const getContactList = params => Http.$request({
  params,
  method: 'get',
  url: '/contactList',
}, false, {});

export const newContactForm = params => Http.$request({
  params,
  method: 'post',
  url: '/contact/new/form',
}, true, {});

export const newContactJson = params => Http.$request({
  params,
  method: 'post',
  url: '/contact/new/json',
}, false, {});

export const editContact = params => Http.$request({
  params,
  method: 'put',
  url: '/contact/edit',
}, false, {});

export const delContact = params => Http.$request({
  params,
  method: 'delete',
  url: '/contact',
}, false, {});
