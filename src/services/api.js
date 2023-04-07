import qs from 'query-string'

export const MAIN_ENDPOINT = 'http://localhost:3789'

export const createUrl = (endpoint) => (route, prms = null) => {
  const params = prms ? `?${qs.stringify(prms)}` : ''
  return decodeURIComponent(`${endpoint}${route}${params}`)
}
const url = createUrl(MAIN_ENDPOINT)

const getHeaders = ({ secure, json }) => Object.assign(
  json ? {'Content-Type': 'application/json'} : {}, 
  secure ? { 'X-Auth': localStorage.getItem('token') } : {})

export const mockFetch = (mockData, duration) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockData)
  }, duration || 1000)
})

export const getData = (route, { secure, ...options }) => {
  return fetch(url(route), {
    headers: getHeaders({ secure }),
    ...options
  })
}

export const postData = (route, { data, secure = false, ...options }) => {
  return fetch(url(route), {
    method: 'POST',
    headers: getHeaders({ json: true, secure }),
    body: JSON.stringify(data),
    ...options
  })
}

export const putData = (route, { data, secure = false, ...options }) => {
  return fetch(url(route), {
    method: 'PUT',
    headers: getHeaders({ json: true, secure }),
    body: JSON.stringify(data),
    ...options
  })
}

export const deleteData = (route, { data, secure = false, ...options }) => {
  return fetch(url(route), {
    method: 'DELETE',
    headers: getHeaders({ secure }),
    ...options
  })
}