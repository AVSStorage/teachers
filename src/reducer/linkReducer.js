const initialState = {
  editIndex: null,
  actionType: 'add',
    links: [
        {
            id: 1,
            name: 'Yandex',
            href: 'www.yandex.ru',
            description: '',
            image: 'file_example.png',
            tags: []
        },
        {
            id: 2,
            name: 'Wikipedia',
            href: 'ru.wikipedia.org',
            description: '',
            image: 'file_example.png',
            tags: []
        }
    ]
}
export default function linkReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
       case 'link/get': {
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
        }
      } 
      case 'link/add': {
        const {  isModalOpen, links, editIndex } = action.payload
        return {
          // that has all the existing state data
          ...state,
          links,
          editIndex,
          isModalOpen
          // but has a new array for the `todos` field
        }
      }
    
      case 'link/edit': {
        const {  isModalOpen, actionType, editIndex } = action.payload
        return {
          // that has all the existing state data
          ...state,
          isModalOpen,
          actionType,
          editIndex
          // but has a new array for the `todos` field
        }
      }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }