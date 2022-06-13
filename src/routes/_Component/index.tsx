import { useState, ChangeEvent, FormEvent } from 'react'

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
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder={INPUT_PLACEHOLDER} onChange={changeSearchInput} />
    </form>
  )
}

export default SearchInput
