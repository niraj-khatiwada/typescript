// Function Overloading

function random(a: string, b: string): string
function random(a: string, b: number): string
function random(a: number, b: string): string
function random(a: number, b: number): number
function random(a: string | number, b: string | number) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  return `${a}${b}`
}

// console.log(random(1, 1))
// console.log(random(1, '1').length)

// Decorators

function Logger() {
  return function (target: Function) {
    console.log('Logging', target.name)
  }
}

function withLoggerForProperty() {
  return function (
    target: any,
    property: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target, property, descriptor)
  }
}

function withParameter() {
  return function (target: any, nameOfMethod: string, position: number) {
    console.log(target, nameOfMethod, position)
  }
}

@Logger()
class Pino {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  @withLoggerForProperty()
  get getDisplay(): string {
    return this.name
  }

  @withLoggerForProperty()
  set setDisplay(@withParameter() name: string) {
    this.name = name
  }
}

// const log = new Pino('Fastify')
// const log2 = new Pino('Fastify')
