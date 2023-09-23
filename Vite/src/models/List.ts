export interface ListItem {
  id: number
  content: string
  checked: boolean
}

export interface List {
  list: ListItem[]
  addItem(item: ListItem): void
  deleteItem(id: number): number
}

export class ToDos implements List {
  private _list: ListItem[] = []

  private static instance: ToDos

  private constructor() {}

  static getInstance(): ToDos {
    if (!ToDos.instance) {
      ToDos.instance = new ToDos()
    }
    return ToDos.instance
  }

  get list(): ListItem[] {
    return this._list
  }

  addItem(newItem: ListItem) {
    this._list.unshift(newItem)
  }

  updateItem(
    id: number,
    updateFields: Partial<Omit<ListItem, 'id'>>
  ): ListItem | null {
    const itemIndex = this._list.findIndex((item) => item.id === id)
    let updatedItem = null
    if (itemIndex !== -1) {
      const item = this._list[itemIndex]
      updatedItem = {
        id,
        content: item.content,
        checked: item.checked,
        ...updateFields,
      }
      this._list.splice(itemIndex, 1, updatedItem)
    }
    return updatedItem
  }

  deleteItem(id: number): number {
    const itemIndex = this._list.findIndex((item) => item.id === id)
    if (itemIndex !== -1) {
      this._list.splice(itemIndex, 1)
    }
    return itemIndex
  }

  clear() {
    this._list = []
  }
}
