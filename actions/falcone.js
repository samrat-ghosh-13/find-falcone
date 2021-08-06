import {
  getTokenApiEndpoint,
  findFalconeApiEndpoint,
  getPlanetsEndpoint,
  getVehiclesEndpoint
} from './apiEndPoints.js';

export const getPlanets = () => {
  return {
    method: 'get',
    url: getPlanetsEndpoint
  };
};

export const getVehicles = () => {
  return {
    method: 'get',
    url: getVehiclesEndpoint
  };
};

export const getToken = () => {
  return {
    method: 'post',
    url: getTokenApiEndpoint,
    headers: {
      Accept: 'application/json'
    }
  };
};

export const findFalcone = (data) => {
  return {
    method: 'post',
    url: findFalconeApiEndpoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data
  };
};
