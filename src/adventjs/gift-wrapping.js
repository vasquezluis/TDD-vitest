export const gifts = ['cat', 'game', 'socks']

export const wrapping = (array) => {
  const result = []

  array.forEach(element => {
    const wordLenth = element.length + 2
    const asteri = '*'
    const count = asteri.repeat(wordLenth)

    result.push(`${count}\n*${element}*\n${count}`)
  })

  return result
}
