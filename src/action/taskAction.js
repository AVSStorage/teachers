export const addTask = function(payload) {
    return {
        type: 'task/add',
        payload
    }
  }

export const editTask = function(payload) {
    return {
        type: 'task/edit',
        payload
    }
}

export const addMaterialToTask = function(payload) {
    return {
        type: 'task/material',
        payload
    }
}