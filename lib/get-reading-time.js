import onlyText from "lib/react-children-utilities/only-text"

const getReadingTime = (component) => {
  const plainText = onlyText(component)

  const wordsPerMinute = 200 // average case

  let textLength = plainText.split(" ").length

  if (textLength > 0) {
    return Math.ceil(textLength / wordsPerMinute)
  }

  return 0
}

export default getReadingTime
