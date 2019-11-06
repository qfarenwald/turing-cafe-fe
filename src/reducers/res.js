export const res = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RES':
      return [...state, action.newRes]
    default:
      return state
  }
}
