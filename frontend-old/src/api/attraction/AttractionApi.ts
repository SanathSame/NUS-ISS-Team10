import { type AttractionFilter } from '../../models/attraction/AttractionFilter'
import { RequestTypes } from '../utils/RequestTypes'

const attractionEndpoint = '/attractions/'

const createNewAttraction = async (entityDetails: any): Promise<any> => {
  return await RequestTypes.postRequest(attractionEndpoint, entityDetails)
}

const getAttractions = async (): Promise<any> => {
  return await RequestTypes.getRequest(attractionEndpoint)
}

const getAttractionById = async (entityId: any): Promise<any> => {
  return await RequestTypes.getRequest(`${attractionEndpoint + entityId}`)
}

const getAttractionsByFilter = async (filterParams: AttractionFilter): Promise<any> => {
  return await RequestTypes.getRequest(attractionEndpoint, {
    params: filterParams
  })
}

const updateAttractionById = async (id: any, updatedDetails: any): Promise<any> => {
  return await RequestTypes.patchRequest(`${attractionEndpoint + id}`, updatedDetails)
}

const deleteAttractionById = async (id: any): Promise<any> => {
  return await RequestTypes.deleteRequest(`${attractionEndpoint + id}`)
}

export const ProductApi = {
    createNewAttraction,
    getAttractions,
    getAttractionById,
    getAttractionsByFilter,
    updateAttractionById,
    deleteAttractionById
}