import { RequestTypes } from '../utils/RequestTypes'

const attractionEndpoint = '/attractions/'

const createNewAttraction = async (entityDetails) => {
  return await RequestTypes.postRequest(attractionEndpoint, entityDetails)
}

const getAttractions = async () => {
  return await RequestTypes.getRequest(attractionEndpoint)
}

const getAttractionById = async (entityId) => {
  return await RequestTypes.getRequest(`${attractionEndpoint + entityId}`)
}

const getAttractionsByFilter = async (filterParams) => {
  return await RequestTypes.getRequest(attractionEndpoint, {
    params: filterParams
  })
}

const updateAttractionById = async (id, updatedDetails) => {
  return await RequestTypes.patchRequest(`${attractionEndpoint + id}`, updatedDetails)
}

const deleteAttractionById = async (id) => {
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
