import { type UserFilter } from '../../models/user/UserFilter'
import { RequestTypes } from '../utils/RequestTypes'

const userEndpoint = '/users/'
const createNewUser = async (entityDetails: any): Promise<any> => {
  return await RequestTypes.postRequest(userEndpoint, entityDetails)
}

const getUsers = async (): Promise<any> => {
  return await RequestTypes.getRequest(userEndpoint)
}

const getUserById = async (entityId: number): Promise<any> => {
  return await RequestTypes.getRequest(`${userEndpoint + entityId}`)
}

const getUsersByFilter = async (filterParams: UserFilter): Promise<any> => {
  return await RequestTypes.getRequest(userEndpoint, {
    params: filterParams
  })
}

const updateUserById = async (id: string, updatedDetails: any): Promise<any> => {
  return await RequestTypes.patchRequest(`${userEndpoint + id}`, updatedDetails)
}

const deleteUserById = async (id: string): Promise<any> => {
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
