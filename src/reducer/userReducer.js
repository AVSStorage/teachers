const initialState = {
    isAuth: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'user/auth': {
          const { isAuth } = action.payload;
          return {
            ...state,   
            isAuth
          }
        }  
        default:
          return state
    }
}