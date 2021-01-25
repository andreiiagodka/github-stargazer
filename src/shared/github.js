import axios from 'axios'

const URL = 'https://api.github.com/repos/'

export const getRepositoryData = name => {
  return axios.all([getRepository(name), getRepositoryLanguages(name)])
}

const getRepository = name => {
  return axios.get(URL + name)
}

const getRepositoryLanguages = name => {
  return axios.get(URL + name + '/languages')
}