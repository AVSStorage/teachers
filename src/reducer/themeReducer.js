
const initialState = {
    isModalOpen: false,
    actionType: 'add',
    editIndex: 0,
    themes: [
        { 
          id: 1
          ,title: 'Название темы',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
          type: 'theme',
        lessons: [
          {id: 1, 
          title: 'Занятие 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo '},
          {id: 2, 
            title: 'Занятие 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo '
          },
          {id: 3, 
            title: 'Занятие 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo '
          }
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
        tags: []
    },
    { 
        id: 2
        ,title: 'Название темы',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
        type: 'theme',
    lessons: [],
    materials: [{
      id: 1, 
      extension: 'pdf',
      name: 'Алгебра',
      image: 'file_example.png'
  }],
    links: [],
    tags: []
    },
    { 
    id: 3
    ,title: 'Название темы',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
    type: 'theme',
    lessons: [],
    materials: [],
    links: [{
      id: 1,
      name: 'Yandex',
      href: 'www.yandex.ru',
      image: 'file_example.png'
  }],
    tags: []
}]
}
export default function courseReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      
      case 'theme/add': {
        const {  isModalOpen, actionType, themes, editIndex } = action.payload

        return {
          // that has all the existing state data
          ...state,
          themes,
          // but has a new array for the `todos` field
          isModalOpen,
          actionType,
          editIndex
        }
      }
      case 'theme/edit': {
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
      case 'theme/materials': {
        const {  themes } = action.payload
  
        return {
          // that has all the existing state data
          ...state,
          themes
          // but has a new array for the `todos` field
          
        }
      }
     
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }