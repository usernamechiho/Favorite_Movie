import styles from './searchInput.module.scss'

import { useSearchParams } from 'react-router-dom'
import { useState, ChangeEvent, FormEvent } from 'react'
import { InputSearchIcon } from 'assets/svgs'

import { useResetRecoilState } from 'recoil'
import { movieListState, pageNumberState } from 'states/movie'

const INPUT_PLACEHOLDER = '영화 제목을 입력해주세요'

const SearchInput = () => {
  const [searchTitle, setSearchTitle] = useState('')
  const [searchParams, setSearchParams] = useSearchParams('')

  const currentSearchTitle = searchParams.get('title')

  const resetMovieList = useResetRecoilState(movieListState)
  const resetPageNumber = useResetRecoilState(pageNumberState)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchTitle === currentSearchTitle) return

    resetMovieList()
    resetPageNumber()
    setSearchParams({ title: searchTitle })
  }

  const changeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.currentTarget.value)
  }

  return (
    <form className={styles.inputForm} onSubmit={handleSubmit}>
      <InputSearchIcon className={styles.searchIcon} />
      <input type='text' className={styles.searchInput} placeholder={INPUT_PLACEHOLDER} onChange={changeSearchInput} />
    </form>
  )
}

export default SearchInput
