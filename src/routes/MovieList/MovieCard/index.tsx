import styles from './movieCard.module.scss'

import { changeToDefaultImage } from 'utils/helper'
import { FavoriteStarIcon } from 'assets/svgs'
import DEFAULT_POSTER from 'assets/images/noPoster.png'

const MovieCard = ({ info }: any) => {
  return (
    <li>
      <button type='button' className={styles.listButtonContainer}>
        <img
          src={info.Poster}
          alt={`${info.Title}, ${info.Year}`}
          className={styles.moviePoster}
          onError={(e) => changeToDefaultImage(e, DEFAULT_POSTER)}
        />
        <dl className={styles.movieInfo}>
          <dt>{info.Title}</dt>
          <dd>{info.Year}</dd>
          <dd>{info.Type}</dd>
        </dl>
        <FavoriteStarIcon className={styles.buttonStarIcon} />
      </button>
    </li>
  )
}

export default MovieCard
