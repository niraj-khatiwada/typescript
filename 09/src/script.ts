// Utility Types

// Partial

enum Grade {
  A = 'A',
  B = 'B',
  C = 'C',
}

interface Student {
  id: number
  class: number
  grade: Grade
  isVerified?: boolean
}

function update(student: Student, propsToUpdate: Partial<Student>): Student {
  return { ...student, ...propsToUpdate }
}

const student1: Student = {
  id: 100,
  class: 10,
  grade: Grade.A,
}

// console.log(update(student1, { isVerified: true }))

// Required
function strictUpdate(
  student: Student,
  propsToUpdate: Required<Student>
): Student {
  return { ...student, ...propsToUpdate }
}

// console.log(
//   strictUpdate(student1, {
//     id: 100,
//     class: 10,
//     grade: Grade.B,
//     isVerified: false,
//   })
// )

// Readonly
function strictUpdateReadonly(
  student: Student,
  propsToUpdate: Required<Student>
): Student {
  return { ...student, ...propsToUpdate }
}

const updated: Readonly<Student> = strictUpdateReadonly(student1, {
  id: 100,
  class: 10,
  grade: Grade.B,
  isVerified: false,
})

// updated.class = 100

// Record
const colors: Record<string, string> = {
  code: 'Code',
  for: 'For',
  real: 'Real',
}

type Students = 'Niraj' | 'Suraj'
type Grades = 'A' | 'B' | 'C'

const student: Record<Students, Grades> = {
  Niraj: 'A',
  Suraj: 'C',
}

// Pick & Omit

// Pick
const pickedStudent: Pick<Student, 'id' | 'class'> = {
  id: 100,
  class: 12,
}

// Omit
const omittedStudent: Omit<Student, 'id' | 'class'> = {
  grade: Grade.A,
}

// Exclude & Extract

type AdjustedGrades = Exclude<Grades, 'C'>

type AdjustedStudents = Extract<Students, 'Niraj'>

// NonNullable

type canBeNull = 'Niraj' | undefined | null

type Myself = NonNullable<canBeNull>

// ReturnType: A way of deriving types

function doesNotKnowWhatItReturns(name: string, age: number) {
  return { name, age }
}

type ReturnValue = ReturnType<typeof doesNotKnowWhatItReturns>

const value: ReturnValue = {
  name: 'Niraj',
  age: 22,
}

// Parameters: A way to derive parameters of a function

type ParametersValue = Parameters<typeof doesNotKnowWhatItReturns>

const value2: ParametersValue = ['Niraj', 26]

// Awaited: Await a promise

async function fetchUsers(): Promise<Student[]> {
  return await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .catch()
}

type Student1 = Awaited<ReturnType<typeof fetchUsers>>

const st1: Student1 = [{ class: 10, id: 100, grade: Grade.A }]

export type Vanilla = string
