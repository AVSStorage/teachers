const initialState = {
    isModalOpen: false,
    actionType: 'add',
    editIndex: 0,
    courses: [
        { 
        id: 1
        ,title: 'Название курса',
        type: 'course',
        materials: [],
        links: [],
        tags: []
    },
    { 
        id: 2
        ,title: 'Название курса',
        description: '2',
    type: 'course',
    materials: [],
    links: [],
    tags: []
    },
    { 
    id: 3
    ,title: 'Название курса',
    description: '3',
    type: 'course',
    materials: [],
    links: [],
    tags: []
},
{ 
    id: 4
    ,title: 'Название курса',
    description: '4',
type: 'course',
materials: [],
links: [],
tags: []
}
    ],
    materials: [],
    links: [],
    tags: []
}
export default function courseReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      
      case 'course/add': {
        const {  isModalOpen, actionType, courses, editIndex } = action.payload

        return {
          // that has all the existing state data
          ...state,
          courses,
          // but has a new array for the `todos` field
          isModalOpen,
          actionType,
          editIndex
        }
      }
      case 'course/edit': {
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
      case 'course/materials': {
        const {  courses } = action.payload
  
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          courses
        }
      }
      case 'course/links': {
        const {  links } = action.payload
      
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          links
        }
      }
      case 'course/tags': {
        const {  tags } = action.payload
      
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          tags
        }
      }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }