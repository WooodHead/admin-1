import get from 'lodash/get';

export const uniqueValues = arr => [...new Set(uniqueValues)];

export const lsGet = key => {
  const item = localStorage.getItem(key);

  try {
    return JSON.parse(item);
  } catch (error) {
    return null;
  }
};

export const statuses = [
  { id: 'new', name: 'NEW' },
  { id: 'hold', name: 'HOLD' },
  { id: 'ok', name: 'OK' },
  { id: 'cancelled', name: 'CANCELLED' }
];

export const roles = [
  { id: 'visitor', name: 'visitor' },
  { id: 'exhibitor', name: 'exhibitor' },
  { id: 'presenter', name: 'presenter' },
  { id: 'contestant', name: 'contestant' },
  { id: 'representative', name: 'representative' }
];

export const lsSet = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const setActiveEvent = event => lsSet('activeEvent', event);
export const activeEventId = () => get(lsGet('activeEvent'), 'id', 0);

export const getEventName = () =>
  get(lsGet('activeEvent'), 'name', '-- no event set --');

export default activeEventId;
