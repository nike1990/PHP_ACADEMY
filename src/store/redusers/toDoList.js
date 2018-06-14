
export default function toDoList (state = [], action) {
    if (action.type === 'ADD_ITEM') {
        return [...state, action.payload]
    }
    return state
}
