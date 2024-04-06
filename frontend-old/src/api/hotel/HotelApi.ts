import { type HotelFilter } from '../../models/hotel/HotelFilter'
import { RequestTypes } from '../utils/RequestTypes'

const hotelEndpoint = '/hotels/'

const createNewHotel = async (entityDetails: any): Promise<any> => {
  return await RequestTypes.postRequest(hotelEndpoint, entityDetails)
}

const getHotels = async (): Promise<any> => {
  return await RequestTypes.getRequest(hotelEndpoint)
}

const getHotelById = async (entityId: any): Promise<any> => {
  return await RequestTypes.getRequest(`${hotelEndpoint + entityId}`)
}

const getHotelsByFilter = async (filterParams: HotelFilter): Promise<any> => {
  return await RequestTypes.getRequest(hotelEndpoint, {
    params: filterParams
  })
}

const updateHotelById = async (id: any, updatedDetails: any): Promise<any> => {
  return await RequestTypes.patchRequest(`${hotelEndpoint + id}`, updatedDetails)
}

const deleteHotelById = async (id: any): Promise<any> => {
  return await RequestTypes.deleteRequest(`${hotelEndpoint + id}`)
}

export const ProductApi = {
    createNewHotel,
    getHotels,
    getHotelById,
    getHotelsByFilter,
    updateHotelById,
    deleteHotelById
}