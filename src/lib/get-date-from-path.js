const getDateFromPath = (path) => path.match(/\d{4}\/\d{2}\/\d{2}/)[0]

export default getDateFromPath
