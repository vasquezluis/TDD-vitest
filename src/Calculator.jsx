import { useState } from 'react'
import { evaluate } from 'mathjs'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operations = ['+', '-', '*', '/']
export const equalSign = '='

const Calculator = () => {
  const [value, setValue] = useState('')

  const createHanldeClick = (op) => {
    setValue(value.concat(op))
  }

  return (
    <section>
      <h1>Calculator</h1>

      <input type='text' value={value} readOnly />

      <div role='grid'>
        {rows.map((row, index) => (
          <div key={index} role='row'>
            {row.map(number => (
              <button key={number} onClick={() => createHanldeClick(number)}>{number}</button>
            ))}
          </div>
        ))}

        {
          operations.map(operation => (
            <button onClick={() => createHanldeClick(operation)} key={operation}>{operation}</button>
          ))
        }

        <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
      </div>

    </section>
  )
}

export default Calculator
