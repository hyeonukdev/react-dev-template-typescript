import { createStore } from 'redux'

const ADD = 'ADD'
const DELETE = 'DELETE'

export const addToDo = (text: string) => {
  return {
    type: ADD,
    text
  }
}

export const deleteToDo = (id: number) => {
  return {
    type: DELETE,
    id
  }
}

const reducer = (
  state: any,
  action: { type: string; text: string; id: number }
) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state]
    case DELETE:
      return state.filter((toDo: any) => toDo !== action.id)
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
