import './styles.css'

import { ToDos } from './models/List'
import { DOMUI } from './views/List'

const todos = ToDos.getInstance()
const ui = DOMUI.getInstance()

const newListInput = document.querySelector(
  "input[id='new-item']"
) as HTMLInputElement

const todoForm = document.querySelector(
  "form[id='todo-form']"
) as HTMLFormElement

todoForm.addEventListener('submit', function (evt: SubmitEvent) {
  evt.preventDefault()
  if (newListInput.value.length > 0) {
    todos.addItem({
      id: +new Date(),
      content: newListInput.value,
      checked: false,
    })
    ui.render(todos.list)
    clearForm()
  }
})

const clearAllButton = document.querySelector(
  "button[id='clear-all']"
) as HTMLButtonElement
clearAllButton?.addEventListener('click', function () {
  todos.clear()
  ui.render(todos.list)
})

function clearForm() {
  newListInput.value = ''
}
