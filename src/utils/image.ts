export const changeToDefaultImage = (e: { currentTarget: { src: string } }, defaultImage: string) => {
  e.currentTarget.src = defaultImage
}
