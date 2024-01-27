import { type ProductFilter } from '../../models/product/ProductFilter'
import { RequestTypes } from '../utils/RequestTypes'


const productEndpoint = '/products/'

const createNewProduct = async (entityDetails: any): Promise<any> => {
  return await RequestTypes.postRequest(productEndpoint, entityDetails)
}

const getProducts = async (): Promise<any> => {
  return await RequestTypes.getRequest(productEndpoint)
}

const getProductById = async (entityId: any): Promise<any> => {
  return await RequestTypes.getRequest(`${productEndpoint + entityId}`)
}

const getProductsByFilter = async (filterParams: ProductFilter): Promise<any> => {
  return await RequestTypes.getRequest(productEndpoint, {
    params: filterParams
  })
}

const updateProductById = async (id: any, updatedDetails: any): Promise<any> => {
  return await RequestTypes.patchRequest(`${productEndpoint + id}`, updatedDetails)
}

const deleteProductById = async (id: any): Promise<any> => {
  return await RequestTypes.deleteRequest(`${productEndpoint +id}`)
}

export const ProductApi = {
  createNewProduct,
  getProducts,
  getProductById,
  getProductsByFilter,
  updateProductById,
  deleteProductById
}
