import styles from './movieCard.module.scss'

import { FavoriteStarIcon } from 'assets/svgs'
import DEFAULT_POSTER from 'assets/images/noPoster.png'

const MovieCard = () => {
  return (
    <button type='button' className={styles.listButtonContainer}>
      <img src={DEFAULT_POSTER} className={styles.moviePoster} />
      <dl className={styles.movieInfo}>
        <dt>Movie Title</dt>
        <dd>1997</dd>
        <dd>Genre</dd>
      </dl>
      <FavoriteStarIcon className={styles.buttonStarIcon} />
    </button>
  )
}

export default MovieCard
