import styles from './movieList.module.scss'
import SearchInput from '../_Component/SearchInput'

import MovieCard from './MovieCard'

const MovieList = () => {
  return (
    <div className={styles.movieListContainer}>
      <header className={styles.inputContainer}>
        <SearchInput />
      </header>
      <section className={styles.movieListSection}>
        <ul>
          <li>
            <MovieCard />
          </li>
          <li>박스 2</li>
          <li>박스 3</li>
          <li>박스 4</li>
          <li>박스 4</li>
          <li>박스 4</li>
        </ul>
      </section>
    </div>
  )
}

export default MovieList
