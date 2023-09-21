// Functions
function sum(a: number | string, b: number | string): string | number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  return `${a}${b}`
}

// Tuples
const _tuple = new Array<number | string>(1)

_tuple.push(...[1, 'Niraj'])

// console.log(_tuple)

let _list: number[] = []

_list[0] = 100

let _tuple1: [number, string] = [26, 'Niraj']

let _tuple2 = [27, 'Suraj']

// Objects

// const hello: Object = { name: 27 }
const hello: { name: number } = { name: 27 }

hello.name = 90

const obj: Object = [100]

// console.log(obj.toString())

// Types
type ObjType = {
  name: string
  age?: number // optional
}

const obj2: ObjType = { name: 'Niraj' }

// Interface

interface Obj2Type {
  name: string
  age?: number
}

const obj3: Obj2Type = { name: 'Niraj' }

// Enums
enum ABC {
  YES = 'YES',
  NO = 'NO',
  NOT_GIVEN = 'NG',
}

console.log(ABC.YES)
