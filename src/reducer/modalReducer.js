const initialState = {
    modalType: null,
    modalProps: {}
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case 'modal/show': {
          const {modalType,modalProps } = action.payload;
          return {
            modalType: modalType,
            modalProps: modalProps
          }
        }  
        case 'modal/hide':
          return initialState
        default:
          return state
    }
}