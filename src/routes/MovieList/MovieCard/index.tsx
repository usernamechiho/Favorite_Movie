import styles from './movieCard.module.scss'

import { useState } from 'hooks'

import { changeToDefaultImage } from 'utils/helper'
import { FavoriteStarIcon } from 'assets/svgs'
import DEFAULT_POSTER from 'assets/images/noPoster.png'

import Portal from 'routes/_Component/Modal/portal'
import Modal from 'routes/_Component/Modal/Modal'

const MovieCard = ({ info }: any) => {
  const [isModal, setIsModal] = useState(false)

  const handleModalOpen = () => setIsModal(true)
  const handleModalClose = () => setIsModal(false)

  return (
    <li>
      <button type='button' className={styles.listButtonContainer} onClick={handleModalOpen}>
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

      {isModal && (
        <Portal>
          <Modal onClose={handleModalClose} info={info} />
        </Portal>
      )}
    </li>
  )
}

export default MovieCard
