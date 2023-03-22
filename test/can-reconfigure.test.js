import { describe, it, expect } from 'vitest'

const canReconfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('from must be a string')
  if (typeof to !== 'string') throw new Error('to must be a string')

  const isSameLength = from.length !== to.length
  if (isSameLength) return false

  // * new Set().size cuenta los elementos unicos
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  // * generalidad
  const transformations = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]
    // console.log(storedLetter)
    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}

describe('canReconfigure', () => {
  it('should be a function', () => {
    expect(canReconfigure).toBeTypeOf('function')
  })

  // * el 3er test ya cumple con un parametro existente
  // it('should throw if the first parameter is missing', () => {
  //   expect(() => canReconfigure()).toThrow()
  // })

  it('should throw if the first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  it('should throw if the second parameter is not a string', () => {
    expect(() => canReconfigure('a')).toThrow()
  })

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if parameter provided have different length', () => {
    expect(canReconfigure('ABC', 'DE')).toBe(false)
  })

  it('should return false if parameter provided have different length even with same unique letters', () => {
    expect(canReconfigure('AAB', 'AB')).toBe(false)
  })

  it('should return false if strings provided have different number of unique letters', () => {
    expect(canReconfigure('ABC', 'DDD')).toBe(false)
  })

  it('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
