const initialState = {
  isModalOpen: false,
  action: 'add',
  editIndex: 0,
  tasks: [
    { 
        id: 1
        ,title: 'Химия',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi ',
        type: 'task',
        materials: [],
        condition: '',
        hint: '',
        decision:'',
        links: [],
        condinition_files: [],
        decision_files: [],
        hint_files: [],
        tags: []

    },
    { 
        id: 2
        ,title: 'Русский язык',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi',
        type: 'task',
        materials: [],
        links: [],
        condition: '',
        hint: '',
        decision:'',
        condinition_files: [],
        decision_files: [],
        hint_files: [],
        tags: []
    },
    { 
        id: 3
        ,title: 'Биология',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi',
        type: 'task',
        materials: [],
        links: [],
        condition: '',
        hint: '',
        decision:'',
        condinition_files: [],
        decision_files: [],
        hint_files: [],
        tags: []
    }
],
tags: []

}
export default function taskReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      
      case 'task/add': {
        const {  isModalOpen, tasks, editIndex } = action.payload
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          isModalOpen,
          tasks,
          action: 'add',
          editIndex
        }
      }
      case 'task/edit': {
          const {  isModalOpen,  editIndex  } = action.payload
         
         // const tasks = [...state.tasks]
         // const id = tasks.findIndex(taskItem => taskItem.id == task.id )
          // tasks.splice(id, 1, task)
       
          return {
            ...state,
            isModalOpen,
             editIndex,
            action: 'edit'
          }
      }
      case 'task/materials': {
        const {  tasks } = action.payload
  
        return {
          // that has all the existing state data
          ...state,
          tasks
          // but has a new array for the `todos` field
          
        }
      }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }