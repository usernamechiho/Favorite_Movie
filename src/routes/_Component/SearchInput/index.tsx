import styles from './searchInput.module.scss'

import { useState, ChangeEvent, FormEvent } from 'react'
import { InputSearchIcon } from 'assets/svgs'

const INPUT_PLACEHOLDER = '영화 제목을 입력해주세요.'

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const changeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value)
  }
  return (
    <form className={styles.inputForm} onSubmit={handleSubmit}>
      <InputSearchIcon className={styles.searchIcon} />
      <input type='text' className={styles.input} placeholder={INPUT_PLACEHOLDER} onChange={changeSearchInput} />
    </form>
  )
}

export default SearchInput
