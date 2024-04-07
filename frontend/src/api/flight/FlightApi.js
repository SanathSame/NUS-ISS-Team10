import { RequestTypes } from '../utils/RequestTypes'

const flightEndpoint = '/flights/'

const createNewFlight = async (entityDetails) => {
  return await RequestTypes.postRequest(flightEndpoint, entityDetails)
}

const getFlights = async () => {
  return await RequestTypes.getRequest(flightEndpoint)
}

const getFlightById = async (entityId) => {
  return await RequestTypes.getRequest(`${flightEndpoint + entityId}`)
}

const getFlightsByFilter = async (filterParams) => {
  return await RequestTypes.getRequest(flightEndpoint, {
    params: filterParams
  })
}

const updateFlightById = async (id, updatedDetails) => {
  return await RequestTypes.patchRequest(`${flightEndpoint + id}`, updatedDetails)
}

const deleteFlightById = async (id) => {
  return await RequestTypes.deleteRequest(`${flightEndpoint + id}`)
}

export const FlightApi = {
  createNewFlight,
  getFlights,
  getFlightById,
  getFlightsByFilter,
  updateFlightById,
  deleteFlightById
}
