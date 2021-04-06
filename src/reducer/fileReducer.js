const initialState = {
    isModalOpen: false,
    editIndex: 0,
    event: 'materials',
    entity:'course',
    files: [
      { id: 1, name:'Файл 1', extension: 'pdf',  image: 'file_example.png', tags: []},
      { id: 2, name:'Файл 2', extension: 'pdf',  image: 'file_example.png', tags: []},
      { id: 3, name:'Файл 3', extension: 'pdf',  image: 'file_example.png', tags: []},
      { id: 4, name:'Файл 4', extension: 'pdf',  image: 'file_example.png', tags: []},
      { id: 5, name:'Файл 5', extension: 'pdf',  image: 'file_example.png', tags: []}
  ]
}
export default function fileReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      
      case 'file/get': {
        const {  isModalOpen, event, entity } = action.payload
     
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          isModalOpen,
          event,
          entity
        }
      }
      case 'file/close': {
        const {  isModalOpen } = action.payload
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          isModalOpen
        }
      }
      case 'file/edit': {
        const {  isModalOpen, actionType, editIndex } = action.payload
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          isModalOpen,
          actionType,
          editIndex
        }
      }
      case 'file/add': {
        const {  isModalOpen, files, editIndex } = action.payload
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          isModalOpen,
          files,
          editIndex
        }
      }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }