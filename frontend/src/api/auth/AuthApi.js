import { RequestTypes } from '../utils/RequestTypes'

const authenticateUser = async (entityDetails) => {
  return await RequestTypes.postRequest('/auth/login', entityDetails)
}

export const AuthApi = {
  authenticateUser
}
