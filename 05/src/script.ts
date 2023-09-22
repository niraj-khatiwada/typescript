// Classes

interface TSInterface {
  display(): string
}

class TSClass implements TSInterface {
  private _name: string
  private _age: number
  private readonly test!: string

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  display() {
    return this._name + this._age
  }
}

const class1 = new TSClass('Niraj', 26)
// console.log(class1.display())

class TSClassExtended extends TSClass {
  constructor(name: string, age: number) {
    super(name, age)
  }
}

const classExtended = new TSClassExtended('Suraj', 22)

console.log(classExtended.display())
