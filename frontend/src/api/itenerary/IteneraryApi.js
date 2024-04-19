import { RequestTypes } from '../utils/RequestTypes'

const iteneraryEndpoint = '/itenerarys/'

const createNewItenerary = async (entityDetails) => {
  return await RequestTypes.postRequest(iteneraryEndpoint, entityDetails)
}

const getItenerarys = async () => {
  return await RequestTypes.getRequest(iteneraryEndpoint)
}

const getIteneraryById = async (entityId) => {
  return await RequestTypes.getRequest(`${iteneraryEndpoint + entityId}`)
}

const getItenerarysByFilter = async (filterParams) => {
  return await RequestTypes.getRequest(iteneraryEndpoint, {
    params: filterParams
  })
}

const updateIteneraryById = async (id, updatedDetails) => {
  return await RequestTypes.patchRequest(`${iteneraryEndpoint + id}`, updatedDetails)
}

const deleteIteneraryById = async (id) => {
  return await RequestTypes.deleteRequest(`${iteneraryEndpoint + id}`)
}

export const IteneraryApi = {
  createNewItenerary,
  getItenerarys,
  getIteneraryById,
  getItenerarysByFilter,
  updateIteneraryById,
  deleteIteneraryById
}
