import { ListItem, ToDos } from '../models/List'

const toDos = ToDos.getInstance()

interface DOMList {
  ul: HTMLUListElement
  getUlHTMLTemplate(id: number, text: string): string
  render(list: ListItem[]): void
}

export class DOMUI implements DOMList {
  private _ul: HTMLUListElement = document.querySelector(
    "ul[id='list-container']"
  ) as HTMLUListElement

  private static instance: DOMUI

  private constructor() {}

  static getInstance(): DOMUI {
    if (!DOMUI.instance) {
      DOMUI.instance = new DOMUI()
    }
    return DOMUI.instance
  }

  get ul(): HTMLUListElement {
    return this._ul
  }

  getUlHTMLTemplate(id: number, text: string): string {
    return `<li class='todo-item' id='${id}'><input type="checkbox" id='${id}-item-checkbox' class='todo-checkbox'/>${text}<button class='delete-item' id='${id}-delete-button'>x</button></li>`
  }

  render(list: ListItem[]) {
    const self = this
    this._ul.innerHTML = ''
    this._ul.innerHTML = list
      .map((item) => this.getUlHTMLTemplate(item.id, item.content))
      .join('\n')

    const liItems = document.querySelectorAll(
      'li[class="todo-item"]'
    ) as NodeListOf<HTMLLIElement>

    for (const item of liItems) {
      // Checkboxes
      const checkBox = item.children[0] as HTMLInputElement
      if (!(checkBox == null)) {
        checkBox.addEventListener('change', function () {
          const idAttribute = checkBox.getAttribute('id')
          if (idAttribute) {
            toDos.updateItem(+idAttribute.replace('-item-checkbox', ''), {
              checked: checkBox.checked,
            })
          }
        })

        // Buttons
        const deleteButton = item.children[1] as HTMLButtonElement
        if (!(deleteButton == null)) {
          deleteButton.addEventListener('click', function () {
            const idAttribute = deleteButton.getAttribute('id')
            if (idAttribute) {
              toDos.deleteItem(+idAttribute.replace('-delete-button', ''))
              self.render(toDos.list)
            }
          })
        }
      }
    }
  }
}
