import {
  getTokenApiEndpoint,
  findFalconeApiEndpoint,
  getPlanetsEndpoint,
  getVehiclesEndpoint,
} from "./apiEndPoints.js";

// Get Planets API Request
export const getPlanets = () => {
  return {
    method: "get",
    url: getPlanetsEndpoint,
  };
};

// Get Vehicles API Request
export const getVehicles = () => {
  return {
    method: "get",
    url: getVehiclesEndpoint,
  };
};

// Post Token API Request
export const getToken = () => {
  return {
    method: "post",
    url: getTokenApiEndpoint,
    headers: {
      Accept: "application/json",
    },
  };
};

// Post Falcone API Request to find the Falcone in a planet
export const findFalcone = (data) => {
  return {
    method: "post",
    url: findFalconeApiEndpoint,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data,
  };
};
