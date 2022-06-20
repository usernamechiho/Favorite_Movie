import styles from './movieList.module.scss'
import { useMount, useState, useUpdateEffect, useCallback, useEffect } from 'hooks'

import SearchInput from '../_Component/SearchInput'
import MovieCard from './MovieCard'
import Spinner from 'routes/_Component/Spinner'
import { getMovieListFromApi } from 'services/movie'
import { useSearchParams } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { movieListState, pageNumberState } from 'states/movie'

import { useInView } from 'react-intersection-observer'

const TOO_MANY_RESULT = '검색 결과가 너무 많습니다. 한국어는 지원하지 않습니다.'
const NO_MOVIE_FOUND = '해당 검색어와 일치하는 영화가 없습니다.'
const NO_CONNECTION = '현재 서비스 사용이 불가능합니다.'

const MovieList = () => {
  const [movieList, setMovieList] = useRecoilState(movieListState)
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState)

  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [searchParams] = useSearchParams()
  const inputSearchTitle = searchParams.get('title')

  const { ref, inView } = useInView()

  const fetchMovieListFromApi = useCallback(async () => {
    if (!inputSearchTitle) return

    setIsLoading(true)

    await getMovieListFromApi(inputSearchTitle, pageNumber)
      .then((res) => {
        if (res.data.Response === 'False') {
          if (res.data.Error === 'Too many results.') setErrorMessage(TOO_MANY_RESULT)
          else if (res.data.Error === 'Movie not found!') setErrorMessage(NO_MOVIE_FOUND)
          return
        }
        setMovieList((prev) => [...prev, ...res.data.Search])
      })
      .catch(() => {
        setErrorMessage(NO_CONNECTION)
      })
    setIsLoading(false)
  }, [inputSearchTitle, pageNumber])

  useMount(() => {
    fetchMovieListFromApi()
  })

  useEffect(() => {
    if (inView) setPageNumber((prev) => prev + 1)
  }, [inView])

  useUpdateEffect(() => {
    fetchMovieListFromApi()
  }, [inputSearchTitle, pageNumber])

  const MovieCardList: JSX.Element[] = movieList.map((info, i) => (
    <li key={`${info.imdbID}_${i}`}>
      <MovieCard info={info} />
    </li>
  ))

  return (
    <div className={styles.movieListContainer}>
      <header className={styles.inputContainer}>
        <SearchInput />
      </header>
      <section className={styles.movieListSection}>
        {movieList && <ul>{MovieCardList}</ul>}
        {movieList && <div ref={ref} />}
        {!movieList.length && !isLoading && <span className={styles.errorMessage}>{errorMessage}</span>}
        {isLoading && <Spinner />}
      </section>
    </div>
  )
}

export default MovieList
