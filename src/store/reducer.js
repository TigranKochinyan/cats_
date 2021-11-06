const defaultState = {
    categorys: [],
    cats: [],
};

export default function reducer(state=defaultState, action){
    
    switch(action.type){
      case 'GET_CATEGORYS': {
        return {
          ...state,
          categorys: action.categorys
        }
      }
      case 'GET_CATS': {
        return {
          ...state,
          cats: action.cats
        }
      }
      case 'CHNAGE_CATEGORY': {
        return {
          ...state,
          cats: action.cats,
          currentCategoryId: action.id
        }
      }
      case 'LOAD_MORE': {
        return {
          ...state,
          cats: [...state.cats, ...action.cats],
        }
      }
      case 'SHOW_LESS': {
        const cats = [...state.cats].slice(0, 10)
        return {
          ...state,
          cats,
        }
      }
      default: return state
    }
}