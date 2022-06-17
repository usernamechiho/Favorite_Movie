import { atom } from 'recoil'
import { MovieInfo } from 'types/movie'

export const movieListState = atom<MovieInfo[]>({
  key: '#movieListState',
  default: [],
})

export const pageNumberState = atom<number>({
  key: '#pageNumberState',
  default: 1,
})

export const favoriteMovieListState = atom<MovieInfo[]>({
  key: '#favoriteMovieListState',
  default: [],
})
