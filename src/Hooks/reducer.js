const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + state.step,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - state.step,
      }
    case 'CHANGE_STEP':
      return {
        ...state,
        step: action.payload,
      }
    default:
      throw new Error(`action type ${action.type} is unexpected.`)
  }
}

export default counterReducer
