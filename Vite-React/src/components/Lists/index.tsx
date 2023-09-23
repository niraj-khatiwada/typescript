import { ReactNode } from 'react'

interface ListsProps<T> {
  items: T[]
  render(item: T): ReactNode
}

function Lists<T>({ items, render }: ListsProps<T>) {
  return items.map((item) => render(item))
}

export default Lists
