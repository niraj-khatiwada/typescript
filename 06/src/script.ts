// Index Signatures

interface Inter {
  // [_: string]: string | number[] | undefined
  classes: number[]
}

const obj: Inter = {
  // abc: 'Lol',
  // def: 'Lal',
  classes: [10],
}

obj.classes = [100]

// for (const key in obj) {
//   console.log(key, obj[key as keyof Inter])
// }

function displayKeyAndValue(key: keyof Inter): void {
  console.log(key, obj[key])
}

displayKeyAndValue('classes')

//

interface _Record {
  code: string
  for: string
  real: string
}

const obj2: _Record = {
  code: 'Code',
  for: 'For',
  real: 'Real',
}

// console.log(obj2.codeaknsans)

type Keys = 'code' | 'for' | 'real'

type __Record = Record<Keys, string>

const obj3: __Record = {
  code: 'Code',
  for: 'Code',
  real: 'Code',
}
