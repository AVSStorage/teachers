export const addCourse = function(payload) {
    return {
        type: 'course/add',
        payload
    }
  }

  export const editCourse = function(payload) {
    return {
        type: 'course/edit',
        payload
    }
  }
  export const addMaterialToCourse = function(payload) {
    return {
        type: 'course/materials',
        payload
    }
  }

  export const addLinkToCourse = function(payload) {
    return {
        type: 'course/links',
        payload
    }
  }


  export const addTagToCourse = function(payload) {
    return {
        type: 'course/tags',
        payload
    }
  }