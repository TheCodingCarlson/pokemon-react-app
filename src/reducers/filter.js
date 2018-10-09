function filter(state = [], action) {
  switch(action.type) {
    case 'UPDATE_FILTER' :
      console.log("updating filter");
      return [
        state.filter = ''
      ]
    default:
      return state;
  }
}

export default filter;