import styles from './movieList.module.scss'
import SearchInput from '../_Component/SearchInput'

const MovieList = () => {
  return (
    <div className={styles.movieListContainer}>
      <div className={styles.inputContainer}>
        <SearchInput />
      </div>
      <section className={styles.movieListSection}>12</section>
    </div>
  )
}

export default MovieList
