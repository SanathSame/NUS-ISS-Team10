import { RequestTypes } from '../utils/RequestTypes'

const itineraryEndpoint = '/itineraries/'
const flightsEndpoint = '/flights/'
const hotelsEndpoint = '/hotels/'
const attractionsEndpoint = '/attractions/'

const createNewItinerary = async (entityDetails) => {
  return await RequestTypes.postRequest(itineraryEndpoint, entityDetails)
}

const getItineraries = async () => {
  return await RequestTypes.getRequest(itineraryEndpoint)
}

const getItineraryById = async (entityId) => {
  return await RequestTypes.getRequest(`${itineraryEndpoint + entityId}`)
}
const getItineraryByUsername = async (username) => {
  return await RequestTypes.getRequest(`${itineraryEndpoint + username}`)
}

const getItinerariesByFilter = async (filterParams) => {
  return await RequestTypes.getRequest(itineraryEndpoint, {
    params: filterParams
  })
}

const updateItineraryById = async (id, updatedDetails) => {
  return await RequestTypes.patchRequest(`${itineraryEndpoint + id}`, updatedDetails)
}

const deleteItineraryById = async (id) => {
  return await RequestTypes.deleteRequest(`${itineraryEndpoint + id}`)
}

// New endpoints to fetch specific flights, hotels, and attractions by their IDs in the itinerary

const getFlightById = async (flightId) => {
  return await RequestTypes.getRequest(`${flightsEndpoint + flightId}`)
}

const getHotelById = async (hotelId) => {
  return await RequestTypes.getRequest(`${hotelsEndpoint + hotelId}`)
}

const getAttractionById = async (attractionId) => {
  return await RequestTypes.getRequest(`${attractionsEndpoint + attractionId}`)
}

export const ItineraryApi = {
  createNewItinerary,
  getItineraries,
  getItineraryById,
  getItineraryByUsername,
  getItinerariesByFilter,
  updateItineraryById,
  deleteItineraryById,
  getFlightById,
  getHotelById,
  getAttractionById
}
