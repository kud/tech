const getAvatarUrl = (size = 500) =>
  `${process.env.avatar.url}${size && `?s=${size}`}`

export default getAvatarUrl
