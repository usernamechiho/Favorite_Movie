import axios from 'axios'

const BASE_URL = 'https://www.omdbapi.com/?apikey='

export const getMovieListFromApi = (title: any, page: any) => {
  return axios.get(`${BASE_URL}${process.env.REACT_APP_MOVIE_API_KEY}&s=${title}&page=${page}`)
}
