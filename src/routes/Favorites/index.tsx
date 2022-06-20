import styles from './favorites.module.scss'
import MovieCard from 'routes/MovieList/MovieCard'

import { useRecoilValue } from 'recoil'
import { favoriteMovieListState } from 'states/movie'

import { SmileIcon } from 'assets/svgs'

const Favorites = () => {
  const favoriteMovieList = useRecoilValue(favoriteMovieListState)

  const FavoriteMovieListCard = favoriteMovieList.map((info, i) => (
    <MovieCard info={info} key={`${info.Title}_${info.imdbID}`} />
  ))

  return (
    <div className={styles.favoritePageContainer}>
      <header className={styles.favoriteHeader}>
        <SmileIcon className={styles.smileIcon} />
        <h1>Check Your Favorites !</h1>
      </header>
      <main className={styles.favoriteCardContainer}>{FavoriteMovieListCard && <ul>{FavoriteMovieListCard}</ul>}</main>
    </div>
  )
}

export default Favorites
