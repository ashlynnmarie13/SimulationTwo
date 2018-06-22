import axios from "axios";

//ACTION TYPES
const GET_HOUSES = "GET_HOUSES";
const ADD_HOUSE = "ADD_HOUSE";
const REMOVE_IMAGE = "REMOVE_IMAGE";
const UPDATE_RENT = "UPDATE_RENT";
const CANCEL = "CANCEL";

//ACTION CREATORS
export function getHouses() {
  return {
    type: GET_HOUSES,
    payload: axios.get("/api/houses")
  };
}

export function addHouse(house_name, address, city, state, zipcode) {
  return {
    type: ADD_HOUSE,
    payload: house_name,
    address,
    city,
    state,
    zipcode
  };
}
//need to update to remove the image
export function removeImage(image) {
  return {
    type: REMOVE_IMAGE,
    payload: image
  };
}

export function updateRent(monthly_mortgage, rent) {
  return {
    type: UPDATE_RENT,
    payload: monthly_mortgage,
    rent
  };
}

export function cancel() {
  return {
    type: CANCEL,
    payload: initialState
  };
}

//INITIAL STATE
const initialState = {
  houses: [],
  isLoading: false,
  error: ""
};

//REDUCER FUNCTION
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_HOUSES_PENDING":
      return { ...state, isLoading: true };
    case "GET_HOUSES_FULFILLED":
      return { ...state, isLoading: false, houses: action.payload.data };
    case "GET_HOUSES_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "ADD_HOUSE_PENDING":
      return { ...state, isLoading: true };
    case "ADD_HOUSE_FULFILLED":
      return {
        houses: [...state.houses, action.payload.data]
      };
    case "ADD_HOUSE_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "REMOVE_IMAGE_PENDING":
      return { ...state, isLoading: true };
    case "REMOVE_IMAGE_FULFILLED":
      return {
        houses: [...state.houses, action.payload.data]
      };
    case "REMOVE_IMAGE_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "UPDATE_RENT_PENDING":
      return { ...state, isLoading: true };
    case "UPDATE_RENT_FULFILLED":
      return {
        houses: [...state.houses, action.payload.data]
      };
    case "UPDATE_RENT_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "UPDATE_RENT_PENDING":
      return { ...state, isLoading: true };
    case "UPDATE_RENT_FULFILLED":
      return {
        houses: [...state.houses, action.payload.data]
      };
    case "UPDATE_RENT_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    default:
      return { state };
  }
}
