export function mapNumber(
  number: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
) {
  return ((number - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin
}

/** extract the name from a url. Capitalizes the first letter.
 * Specify additional knowNames to map matched names in URLs to the name you
 * want returned */
export function urlName(url: string, knownNames?: { [key: string]: string }) {
  knownNames = {
    npmjs: 'NPM',
    ...knownNames
  }

  let [_, name = '', extension = ''] =
    url.match(/(?:\w+?:\/\/)?(?:\w+\.)?(\w+)(\.\w+)/) ?? []

  if (name in knownNames) {
    name = knownNames[name]
  } else {
    name = name.slice(0, 1).toUpperCase() + name.slice(1)
  }

  return { name, extension }
}
