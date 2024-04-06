import { RequestTypes } from '../utils/RequestTypes'

const userEndpoint = '/users/'
const createNewUser = async (entityDetails) => {
  return await RequestTypes.postRequest(userEndpoint, entityDetails)
}

const getUsers = async () => {
  return await RequestTypes.getRequest(userEndpoint)
}

const getUserById = async (entityId) => {
  return await RequestTypes.getRequest(`${userEndpoint + entityId}`)
}

const getUsersByFilter = async (filterParams) => {
  return await RequestTypes.getRequest(userEndpoint, {
    params: filterParams
  })
}

const updateUserById = async (id, updatedDetails) => {
  return await RequestTypes.patchRequest(`${userEndpoint + id}`, updatedDetails)
}

const deleteUserById = async (id) => {
  return await RequestTypes.deleteRequest(`${userEndpoint + id}`)
}

export const UserApi = {
  createNewUser,
  getUsers,
  getUserById,
  getUsersByFilter,
  updateUserById,
  deleteUserById
}
