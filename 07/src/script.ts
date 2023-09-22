// Generics

function doSomething<T>(key: T): T {
  if (typeof key === 'object') {
    return { haha: 'hehe' } as T
  }
  if (typeof key === 'number') {
    return +key as T
  }
  return (key + 'ing') as T
}

const value = doSomething({ lol: 'lala' })

// console.log(value.lol)

interface School<T> {
  has: T
}

const object: School<string> = {
  has: 'Niraj',
}

// Extend in generics
interface ID {
  id: number
}
function showUser<T extends ID>(user: T): T {
  return user
}

showUser({ id: 100 })

// Advanced Generics
function getUsersProperty<T extends ID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] {
  return users.map((user) => user[key])
}

console.log(
  getUsersProperty(
    [
      { id: 100, name: 'Niraj' },
      { id: 200, name: 'Suraj' },
    ],
    'name'
  )
)
