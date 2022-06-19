import styles from './modal.module.scss'

import { useRef, useEffect } from 'hooks'
import { MovieInfo } from 'types/movie'

interface Props {
  info: MovieInfo
  onClose: () => void
}

const Modal = ({ info, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (e: MouseEvent) => {
    if ((e.target as HTMLDivElement).id === 'modal-container') onClose()
  }

  return (
    <div className={styles.modalContainer} id='modal-container' ref={modalRef}>
      <div className={styles.modalContentContainer}>
        <div
          className={styles.modalImage}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${info.Poster})`,
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <section className={styles.movieTitleSection}>
          <h1>{info.Title}</h1>
        </section>

        <section className={styles.movieInfoSection}>
          <dl className={styles.movieYearDl}>
            <dt>Year</dt>
            <dd>{info.Year}</dd>
          </dl>
          <dl className={styles.movieTypeDl}>
            <dt>Type</dt>
            <dd>{info.Type}</dd>
          </dl>
        </section>
        <footer className={styles.buttonFooter}>
          <button type='button' onClick={onClose}>
            즐겨찾기
          </button>
          <div className={styles.buttonDivider} />
          <button type='button' onClick={onClose}>
            닫기
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Modal
