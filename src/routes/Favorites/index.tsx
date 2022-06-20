import styles from './favorites.module.scss'
import MovieCard from 'routes/MovieList/MovieCard'

import { useRecoilValue } from 'recoil'
import { favoriteMovieListState } from 'states/movie'

import useDragDrop from 'utils/dragAndDrop'

import { SmileIcon } from 'assets/svgs'

const Favorites = () => {
  const favoriteMovieList = useRecoilValue(favoriteMovieListState)

  const { handleDragOver, handleDragStart, handleDragEnd, handleDrop } = useDragDrop()

  const FavoriteMovieListCard = favoriteMovieList.map((info, i) => (
    <li
      key={`${info.Title}_${info.imdbID}`}
      data-position={i}
      draggable
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
    >
      <MovieCard info={info} />
    </li>
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
