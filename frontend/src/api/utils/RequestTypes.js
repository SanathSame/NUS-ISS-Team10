import axios from 'axios'
import { RequestInterceptor } from './RequestInterceptor'

const BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT

const instance = axios.create({
  baseURL: BACKEND_ENDPOINT,
  timeout: 5000
})

RequestInterceptor.setRequestInterceptor(instance)
RequestInterceptor.setResponseInterceptor(instance)

const postRequest = async (url, data = {}) => {
  return await instance.post(url, data)
}

const getRequest = async (url, params = {}) => {
  return await instance.get(url, { params })
}

const patchRequest = async (url, data = {}) => {
  return await instance.patch(url, data)
}

const deleteRequest = async (url, params = {}) => {
  return await instance.delete(url, { params })
}

export const RequestTypes = {
  postRequest,
  getRequest,
  patchRequest,
  deleteRequest
}
