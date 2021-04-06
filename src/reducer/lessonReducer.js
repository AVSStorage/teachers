
const initialState = {
    isModalOpen: false,
    actionType: 'add',
    editIndex: 0,
    lessons: [
        { 
          id: 1
          ,title: 'Название занятия',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
          type: 'lesson',
          tasks: [

          ],
          
        materials: [ {
          id: 1, 
          extension: 'pdf',
          name: 'Алгебра',
          image: 'file_example.png'
      }],
        links: [{
          id: 1,
          name: 'Yandex',
          href: 'www.yandex.ru',
          image: 'file_example.png'
      },
     
      {
        id: 2,
        name: 'Google',
        href: 'www.google.com',
        image: 'file_example.png'
    }],
    homework:[],
        tags: []
    },
    { 
        id: 2
        ,title: 'Название зантия',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
        type: 'lesson',
    tasks: [],
    materials: [{
      id: 1, 
      extension: 'pdf',
      name: 'Алгебра',
      image: 'file_example.png'
  }],
    links: [],
    tags: [],
    homework:[]
    },
    { 
    id: 3
    ,title: 'Название занятия',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
    type: 'lesson',
    tasks: [],
    materials: [],
    links: [{
      id: 1,
      name: 'Yandex',
      href: 'www.yandex.ru',
      image: 'file_example.png'
  }],
  homework:[],
    tags: []
}],
tags :[]
}
export default function lessonsReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      
      case 'lesson/add': {
        const {  isModalOpen, actionType, lessons, editIndex } = action.payload

        return {
          // that has all the existing state data
          ...state,
          lessons,
          // but has a new array for the `todos` field
          isModalOpen,
          actionType,
          editIndex
        }
      }
      case 'lesson/edit': {
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
      case 'lesson/materials': {
        const {  lessons } = action.payload
  
        return {
          // that has all the existing state data
          ...state,
          lessons
          // but has a new array for the `todos` field
          
        }
      }
     
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }