let defaultState = {
  mode:"MODULE_LIST",
  selectModule:-1
}

const selectMode = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_MODE':
      return {
        mode:action.mode,
        selectModule:action.id
      }
    default:
      return state
  }
}

export default selectMode