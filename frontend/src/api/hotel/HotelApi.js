import { RequestTypes } from '../utils/RequestTypes'

const hotelEndpoint = '/hotels/'

const createNewHotel = async (entityDetails) => {
  return await RequestTypes.postRequest(hotelEndpoint, entityDetails)
}

const getHotels = async () => {
  return await RequestTypes.getRequest(hotelEndpoint)
}

const getHotelById = async (entityId) => {
  return await RequestTypes.getRequest(`${hotelEndpoint + entityId}`)
}

const getHotelsByFilter = async (filterParams) => {
  return await RequestTypes.getRequest(hotelEndpoint, {
    params: filterParams
  })
}

const updateHotelById = async (id, updatedDetails) => {
  return await RequestTypes.patchRequest(`${hotelEndpoint + id}`, updatedDetails)
}

const deleteHotelById = async (id) => {
  return await RequestTypes.deleteRequest(`${hotelEndpoint + id}`)
}

export const HotelApi = {
  createNewHotel,
  getHotels,
  getHotelById,
  getHotelsByFilter,
  updateHotelById,
  deleteHotelById
}
