// Type Aliases

type StringOrNumber = string | number

interface Test {
  name: StringOrNumber
}

// Literal Types
let _name: 'Niraj'

// Functions
type multiply = (a: number, b: number, c?: number) => number
// OR
// interface multiply {
//   (a: number, b: number): number
// }

// Optional & default parameters
const calculateProduct: multiply = function (
  a: number,
  b: number,
  c: number = 1
): number {
  return a * b * c
}

calculateProduct(1, 2)

// Rest Operators
function sum(...nums: number[]) {
  return nums.reduce((a, c) => a + c, 0)
}

console.log(sum(1, 2, 3))

// Never Type
function superfluous(wat?: string): never {
  throw new Error('Oops!' + (wat ?? ''))
}

const numberOrString = function (value: number | string): string {
  if (typeof value === 'number') return 'number'
  if (typeof value === 'string') return 'string'
  // throw new Error('Wat?')
  // OR
  superfluous('Wat?')
}
