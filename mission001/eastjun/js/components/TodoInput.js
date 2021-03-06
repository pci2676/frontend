import validator from '../utils/validator.js'

export default function TodoInput({ onAdd }) {
  const $todoInput = document.querySelector('#new-todo-title')

  $todoInput.addEventListener('keydown', (event) => this.addTodoItem(event))

  this.addTodoItem = (event) => {
    const $newTodoTarget = event.target
    if (this.isValid(event, $newTodoTarget.value)) {
      onAdd($newTodoTarget.value)
      $newTodoTarget.value = ''
    }
  }

  this.isValid = (event, newTodoContents) => {
    return validator.isEnterKey(event.key) && validator.isString(newTodoContents)
  }
}
