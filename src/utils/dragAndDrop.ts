import { DragEvent, useState } from 'react'
import { useRecoilState } from 'recoil'

import { favoriteMovieListState } from 'states/movie'

const useDragDrop = () => {
  const [grab, setGrab] = useState<HTMLElement>()
  const [favoriteMovieList, setFavoriteMovieList] = useRecoilState(favoriteMovieListState)

  const handleDragOver = (e: DragEvent<HTMLElement>) => e.preventDefault()

  const handleDragStart = (e: DragEvent<HTMLElement>) => setGrab(e.currentTarget)

  const handleDragEnd = () => setGrab(undefined)

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    const currentPosition = Number((grab as HTMLElement).dataset.position)
    const targetPosition = Number(e.currentTarget.dataset.position)

    const newList = [...favoriteMovieList]
    newList[currentPosition] = newList.splice(targetPosition, 1, newList[currentPosition])[0]

    setFavoriteMovieList(newList)
  }

  return { handleDragOver, handleDragStart, handleDragEnd, handleDrop }
}

export default useDragDrop
