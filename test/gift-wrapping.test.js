import { describe, it, expect } from 'vitest'

import { gifts, wrapping } from '../src/adventjs/gift-wrapping'

describe('gift-wrapping', () => {
  it('should be a function', () => {
    expect(typeof wrapping).toBe('function')
  })

  it('should throw if array is not wraped with paper', () => {
    // const result = []
    // gifts.forEach(element => {
    //   result.push(`*****\n${element}\n*****`)
    // })

  })

  it('should return an array with each string wraped with paper', () => {
    expect(wrapping(gifts)).toStrictEqual([
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'
    ])
  })
})
