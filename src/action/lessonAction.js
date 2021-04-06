export const addLesson = function(payload) {
    return {
        type: 'lesson/add',
        payload
    }
  }

export const editLesson = function(payload) {
    return {
        type: 'lesson/edit',
        payload
    }
}

export const addMaterialToLesson = function(payload) {
    return {
        type: 'lesson/material',
        payload
    }
}