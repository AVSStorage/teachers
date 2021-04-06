const initialState = {
    isModalOpen: false,
    actionType: 'add',
    editIndex: 0,
    tests:[
        { 
            id: 1
            ,title: 'Тест 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
            type: 'test',
            links: [],
            tags: []
        },
        { 
            id: 2
            ,title: 'Тест 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
            type: 'test',
            links: [],
            tags: []
        },
        { 
            id: 3
            ,title: 'Тест 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
            type: 'test',
            links: [],
            tags: []
        }
    ]
  }
  export default function taskReducer(state = initialState, action) {
      // The reducer normally looks at the action type field to decide what happens
      switch (action.type) {
        
        case 'test/add': {
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
        case 'test/edit': {
            const {  isModalOpen, editIndex  } = action.payload
           
         
         
            return {
              ...state,
              isModalOpen,
              // tasks,
              editIndex,
              actionType: 'edit'
            }
        }
        default:
          // If this reducer doesn't recognize the action type, or doesn't
          // care about this specific action, return the existing state unchanged
          return state
      }
    }