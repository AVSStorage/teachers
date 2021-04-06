const initialState = {
    students: [

    ]
}
export default function scheduleReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      
      case 'schedule/add_student': {
        const {  students } = action.payload
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          students
        }
      }
      case 'schedule/delete_student': {
          const {  students  } = action.payload
         
          //const tasks = [...state.tasks]
          //const id = tasks.findIndex(taskItem => taskItem.id == task.id )
          // tasks.splice(id, 1, task)
       
          return {
            ...state,
            students
          }
      }
      case 'schedule/transfer_student': {
        const {  students } = action.payload
  
        return {
          // that has all the existing state data
          ...state,
          students
          // but has a new array for the `todos` field
          
        }
      }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }